import Map from "./components/Map/Map";
import BarGraph from "./components/BarGraph/BarGraph";
import LineGraph from "./components/LineGraph/LineGraph";
import PieGraph from "./components/PieGraph/PieGraph";

const Analytics = () => {
    return (
        <div className="h-screen flex flex-col gap-4">
            <div className="flex justify-center h-[50%]">
                <Map />
            </div>
            <div className="w-screen h-[55%] flex justify-between">
                <BarGraph />
                <LineGraph />
                <PieGraph />
            </div>
        </div>
    )
}

export default Analytics;