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
import { Suspense } from "react";

function getRoute(isActive: { tc: boolean; ws: boolean; ra: boolean }) {
    const tc = isActive.tc ? "tc=true" : "";
    const ws = isActive.ws ? "ws=true" : "";
    const ra = isActive.ra ? "ra=true" : "";

    return `/portfolio?${[tc, ws, ra].filter((i) => !!i).join("&")}`;
}

export default function Portfolio() {
    return (
        <Suspense>
            <InnerPortfolio />
        </Suspense>
    );
}

function InnerPortfolio() {
    const searchParams = useSearchParams();
    const tc = searchParams.get("tc");
    const ws = searchParams.get("ws");
    const ra = searchParams.get("ra");

    const router = useRouter();

    const isActive = {
        tc: !!tc,
        ws: !!ws,
        ra: !!ra,
    };

    return (
        <ul className={styles.portfolio}>
            <Accordion
                variant="outlined"
                defaultExpanded={!!tc}
                onChange={(_, exp) => {
                    isActive.tc = exp;
                    router.push(getRoute(isActive));
                }}
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
                defaultExpanded={!!ws}
                onChange={(_, exp) => {
                    isActive.ws = exp;
                    router.push(getRoute(isActive));
                }}
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
                defaultExpanded={!!ra}
                onChange={(_, exp) => {
                    isActive.ra = exp;
                    router.push(getRoute(isActive));
                }}
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
                            width={424}
                            height={424}
                            unoptimized
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
                            width={424}
                            height={424}
                            unoptimized
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
                            width={521.6}
                            height={424}
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
