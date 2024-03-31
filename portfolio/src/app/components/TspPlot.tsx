"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

function getPlotSize() {
    if (typeof window === "undefined") {
        return 400;
    }

    const isMobile = window.innerWidth >= 700;
    return isMobile ? 400 : 300;
}

const Plot = dynamic(() => import("react-plotly.js"), {
    loading: () => (
        <div style={{ height: getPlotSize(), width: getPlotSize() }}></div>
    ),
    ssr: false,
});

type IterationData = {
    x: number[];
    y: number[];
};

export default function TspPlot({ loop }: { loop: boolean }) {
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
            if (iterationDatas.length == 0) {
                return;
            }

            if (counter >= iterationDatas.length) {
                if (loop) {
                    const sleep = new Promise((r) => setTimeout(r, 2000));
                    sleep.then(() => setCounter(0));
                }

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
    }, [counter, iterationDatas, loop]);

    const size = getPlotSize();

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
                width: size,
                height: size,
                paper_bgcolor: "rgba(255, 255, 255, 0)",
                plot_bgcolor: "rgba(255, 255, 255, 0)",
                autosize: true,
            }}
            config={{
                displayModeBar: false,
            }}
        />
    );
}
