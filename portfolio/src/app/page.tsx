"use client";

import styles from "./page.module.css";
import Bio from "./components/Bio";
import TspPlot from "./components/TspPlot";
import Image from "next/image";

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
                            priority
                        />
                    </div>
                    <TspPlot loop={false} />
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
