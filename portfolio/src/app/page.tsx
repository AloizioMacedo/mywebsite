"use client";

import styles from "./page.module.css";
import { Bio } from "./components/Bio";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Plot = dynamic(() => import("react-plotly.js"), {
    loading: () => <div style={{ height: "400px", width: "400px" }}></div>,
    ssr: false,
});

type IterationData = {
    x: number[];
    y: number[];
};

export default function Home() {
    return (
        <main className={styles.main}>
            <div>
                <div className={styles.presentation}>
                    <div className={styles.nameAndImage}>
                        <div className={styles.mainDescription}>
                            <Name />
                            <Job />
                        </div>
                        <Image
                            className={styles.aloizioImage}
                            src="/aloizio.jpg"
                            alt="Aloizio"
                            width={350}
                            height={350}
                        />
                    </div>
                    <TspPlot />
                </div>
                <div className={styles.tspPlot}></div>
                <Bio />
            </div>
        </main>
    );
}

function Name() {
    return (
        <p className={styles.name}>
            Aloizio
            <br /> Macedo
        </p>
    );
}

function Job() {
    return <p className={styles.job}>Senior Software Engineer, PhD</p>;
}

function TspPlot() {
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
        fetch("http://localhost:3000/api/iterations").then((response) =>
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
