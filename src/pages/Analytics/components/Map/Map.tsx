import * as d3 from 'd3';
import _us from '../../../../us.json';
import * as topojson from 'topojson-client';
import { GeometryObject, Topology } from 'topojson-specification';
import { useEffect } from 'react';

const Map = () => {
    const width = 975;
    const height = 610;
    const us = _us as Topology;
    const path = d3.geoPath();
    const statesData = topojson.feature(us as Topology, us.objects.states as GeometryObject);

    const zoom = d3.zoom().scaleExtent([1,8]).on("zoom", (event: any) => {
        const {transform} = event;
        d3.select('g')
            .attr('transform', transform)
            .attr('stroke-width', 1 / transform.k);
    });

    const handleStateClick = (event: any, d: any) => {
        const [[x0, y0], [x1, y1]] = path.bounds(d);
        event.stopPropagation();

        d3.selectAll('path').transition().style('fill', null);
        d3.select(`path.${d.properties.name.replace(" ", "-")}`).transition().style('fill', '#64748b');
        d3.select('svg').transition().duration(650).call(
            zoom.transform,
            d3.zoomIdentity
                .translate(width / 2, height / 2)
                .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height)))
                .translate(-(x0 + x1) / 2, -(y0 + y1) / 2)
        );
    }

    const reset = () => {
        d3.selectAll('path').transition().style('fill', null);
        d3.select('svg')
            .transition()
            .duration(650)
            .call(zoom.transform, d3.zoomIdentity);
    }

    useEffect(() => {
        d3.select('g')
            .selectAll('path')
            .data(statesData.features)
            .on("click", handleStateClick);
    });

    return(
            <svg onClick={reset} viewBox={`0 0 ${width} ${height}`} className="h-full w-full">
                <g>
                    <g fill='#FFFF' stroke='#4444' cursor={'pointer'}>
                        {
                            statesData.features.map((feature: any, index: number) => {
                                return <path className={`${feature.properties.name.replace(" ", "-")} hover:fill-slate-500 hover:stroke-slate-900`} key={index} d={path(feature)}><title>{feature.properties.name}</title></path>
                            })
                        }
                    </g>
                </g>
            </svg>
    )
}

export default Map;