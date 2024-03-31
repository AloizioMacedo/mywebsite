import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), {
    loading: () => <div style={{ height: "400px", width: "400px" }}></div>,
    ssr: false,
});

type IterationData = {
    x: number[];
    y: number[];
};

export default function TspPlot() {
    const initialIterationDatas: IterationData[] = [];
    const [iterationDatas, setIterationDatas] = useState(initialIterationDatas);
    const [counter, setCounter] = useState(0);

    const initialIterationData: IterationData = {
        x: [],
        y: [],
    };
    const [currentData, setCurrentData] = useState(initialIterationData);

    const [_, setTime] = useState(new Date());

    useEffect(() => {
        const selection = Math.round(101 * Math.random());
        fetch(`/data/res${selection}.json`).then((response) =>
            response
                .json()
                .then((data: IterationData[]) => setIterationDatas(data))
        );
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter >= iterationDatas.length) {
                return;
            }

            const data = iterationDatas[counter];
            data.x.push(data.x[0]);
            data.y.push(data.y[0]);

            setCurrentData(data);

            setCounter(counter + 1);
            setTime(new Date());
        }, 20);

        return () => clearInterval(interval);
    }, [counter, iterationDatas]);

    return (
        <Plot
            data={[
                {
                    x: currentData.x,
                    y: currentData.y,
                    type: "scatter",
                    // @ts-ignore
                    mode: "markers+lines",
                },
            ]}
            layout={{
                xaxis: {
                    showgrid: false,
                    zeroline: false,
                    visible: false,
                },
                yaxis: {
                    showgrid: false,
                    zeroline: false,
                    visible: false,
                },
                margin: { t: 20, b: 20, l: 20, r: 20 },
                width: 400,
                height: 400,
                paper_bgcolor: "rgba(255, 255, 255, 0)",
                plot_bgcolor: "rgba(255, 255, 255, 0)",
            }}
            config={{
                displayModeBar: false,
            }}
        />
    );
}