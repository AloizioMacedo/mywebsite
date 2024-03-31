"use client";

import Accordion from "@mui/material/Accordion";
import Link from "@mui/material/Link";
import styles from "./page.module.css";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Image from "next/image";
import TrafficPlot from "../components/TspPlot";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Suspense, useState } from "react";

export default function Portfolio() {
    return (
        <Suspense>
            <InnerPortfolio />
        </Suspense>
    );
}

function InnerPortfolio() {
    const [expanded, setExpanded] = useState<string | false>(false);

    const router = useRouter();
    const searchParams = useSearchParams();
    let panel = searchParams.get("panel");

    let panelToExpand = panel ? panel : false;

    if (expanded != panelToExpand) {
        setExpanded(panelToExpand);
    }

    const handleChange =
        (panel: string) =>
        (event: React.SyntheticEvent, isExpanded: boolean) => {
            if (isExpanded) {
                router.push(`/portfolio?panel=${panel}`);
            } else {
                router.push(`/portfolio`);
            }
        };

    return (
        <ul className={styles.portfolio}>
            <Accordion
                variant="outlined"
                expanded={expanded == "traffic-control"}
                onChange={handleChange("traffic-control")}
                className={styles.accordion}
            >
                <AccordionSummary>
                    <h1>Traffic Control</h1>
                </AccordionSummary>
                <AccordionDetails>
                    <TrafficControl />
                </AccordionDetails>
            </Accordion>
            <Accordion
                variant="outlined"
                expanded={expanded == "workforce-scheduling"}
                onChange={handleChange("workforce-scheduling")}
                className={styles.accordion}
            >
                <AccordionSummary>
                    <h1>Workforce Scheduling</h1>
                </AccordionSummary>
                <AccordionDetails>
                    <WorkforceScheduling />
                </AccordionDetails>
            </Accordion>
            <Accordion
                variant="outlined"
                expanded={expanded == "routing-algorithms"}
                onChange={handleChange("routing-algorithms")}
                className={styles.accordion}
            >
                <AccordionSummary>
                    <h1>Routing Algorithms</h1>
                </AccordionSummary>
                <AccordionDetails>
                    <RoutingAlgorithms />
                </AccordionDetails>
            </Accordion>
        </ul>
    );
}

function TrafficControl() {
    return (
        <div>
            <p>
                My job in traffic control consisted primarily of the
                implementation of three components:
            </p>

            <ul>
                <li className={styles.trafficControlItem}>
                    <p>
                        A heuristic logic for dynamically changing stages
                        durations of traffic light based on flow and saturation
                        of street lanes considering different KPIs that
                        incorporate these metrics.
                    </p>
                    <div className={styles.image}>
                        <Image
                            src="/isolatedintersection.webp"
                            alt="Traffic Flow Optimization"
                            width={320}
                            height={320}
                            unoptimized
                            priority
                        ></Image>
                    </div>
                </li>
                <li className={styles.trafficControlItem}>
                    <p>
                        An intricate MILP optimization model for optimizing
                        traffic light offsets relative to each other to create
                        optimized green waves across traffic grids, which is
                        based on an interpretation of a cycle-consistent
                        attribution of the offsets based on the vanishing of an
                        integral 1-form on the cycles of the grid.
                    </p>
                    <div className={styles.image}>
                        <Image
                            src="/trafficsim.webp"
                            alt="Offset Optimization"
                            width={320}
                            height={320}
                            unoptimized
                            priority
                        ></Image>
                    </div>
                </li>

                <li className={styles.trafficControlItem}>
                    <p>
                        Integrating this as a service to connect with other
                        services, including a front-end that is used by
                        government agents as well as the other components that
                        connect to the physical traffic controllers spread
                        around the city of Vitória - ES.
                    </p>
                    <div className={styles.image}>
                        <Image
                            src="/diagram.png"
                            alt="System Structure"
                            width={320}
                            height={264}
                            unoptimized
                        ></Image>
                    </div>
                </li>
            </ul>
        </div>
    );
}

function WorkforceScheduling() {
    return (
        <p>
            Workforce Scheduling: Generating optimized schedules given a
            historic demand timeseries together with its forecasting. The
            solution includes consideration of ASA (Average Speed of Answer),
            SLAs (Service Level Agreements), the possibility to postpone demand
            to future points in time etc. Optimization is phrased in terms of a
            MILP.
        </p>
    );
}

function RoutingAlgorithms() {
    return (
        <div>
            <p>
                This included different optimization algorithms such as Ant
                Colony Optimization and simulated annealing for probabilistic
                and heuristic approaches as well as MILP formulations and some
                greedy approaches. The problems were further complications of
                the Traveling Salesman Problem and Vehicle Routing Problem,
                including constraints such as jobs dependencies, different job
                durations, availability windows etc. The Ant Colony Optimization
                was particularly involved and was further improved by a custom
                low-level implementation of the logic, speeding up the runtime
                by around 40 times compared to a naive implementation in Python.
            </p>
            <p>
                The plot below (which can also be seen in the homepage) is a
                visualization of iterations towards a solution of the classical
                Traveling Salesman Problem via a simulated annealing algorithm
                written in Rust and plotted with Plotly, where the state machine
                transitions of the procedure correspond to{" "}
                <Link
                    href="https://en.wikipedia.org/wiki/2-opt"
                    target="_blank"
                >
                    2-opts
                </Link>
                . The source code is in{" "}
                <Link
                    href="https://github.com/AloizioMacedo/simulated-annealing"
                    target="_blank"
                >
                    this repository
                </Link>
                .
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <TrafficPlot loop={true} />
            </div>
        </div>
    );
}
