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
        <Suspense fallback={<FallbackPortfolio />}>
            <InnerPortfolio />
        </Suspense>
    );
}

function FallbackPortfolio() {
    return (
        <ul className={styles.portfolio}>
            <Accordion variant="outlined" className={styles.accordion}>
                <AccordionSummary>
                    <h1>Traffic Control</h1>
                </AccordionSummary>
                <AccordionDetails>
                    <TrafficControl />
                </AccordionDetails>
            </Accordion>
            <Accordion variant="outlined" className={styles.accordion}>
                <AccordionSummary>
                    <h1>Workforce Scheduling</h1>
                </AccordionSummary>
                <AccordionDetails>
                    <WorkforceScheduling />
                </AccordionDetails>
            </Accordion>
            <Accordion variant="outlined" className={styles.accordion}>
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
                My role in traffic control optimization consisted primarily of
                the implementation of three components:
            </p>

            <ul>
                <li className={styles.trafficControlItem}>
                    <p className={styles.trafficControlDescription}>
                        A heuristic logic for dynamically changing the duration
                        of the <strong>stages of traffic lights</strong> based
                        on data concerning the <strong>flow</strong> and{" "}
                        <strong>occupancy</strong> of street lanes and
                        generating different KPIs that incorporate these
                        metrics.
                        <br />
                        <br />
                        This included a judicious treatment of the data quality
                        due to street conditions, camera malfunctions etc.
                        <br />
                        <br />
                        Furthermore, in order to estimate geometric parameters
                        intrinsic to those streets and lanes that help identify
                        saturation profiles (i.e., levels of congestion), we
                        used different forms of <strong>
                            curve-fitting
                        </strong>{" "}
                        based on the historical data, employing different
                        strategies on how/when to update the parameters.
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
                        An intricate <strong>MILP optimization model</strong>{" "}
                        for optimizing traffic light offsets relative to each
                        other to create optimized <strong>green waves </strong>
                        across traffic grids, which is based on an
                        interpretation of a cycle-consistent attribution of the
                        offsets based on the vanishing of an integral 1-form on
                        the 1-cycles of the grid when seen as a CW-complex.
                        <br />
                        <br />
                        The algorithm was a vast generalization over well-known
                        MILP approaches for optimizing a two-way street such as
                        the one seen in{" "}
                        <Link href="https://www.jstor.org/stable/168720">
                            The Synchronization of Traffic Signals by Mixed
                            Linear Programming
                        </Link>
                        , consisting also of transition techniques from one
                        profile to another given the adaptive nature of the
                        system.
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
                        The integration of this as a service to connect with
                        other services, including a{" "}
                        <strong>
                            front-end that is used by government agents
                        </strong>{" "}
                        as well as the other components that connect to the{" "}
                        <strong>physical traffic controllers</strong> spread
                        around the city of Vitória - ES.
                        <br />
                        <br />I also monitored the real-time traffic control
                        operation as a whole, making sure to maintain{" "}
                        <strong>correct behavior</strong> and{" "}
                        <strong>reliability</strong>.
                        <br />
                        <br />
                        The diagram provides an overly-simplified view of the
                        architecture in order to protect the IP of the company.
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
        <div>
            <p>
                Across different sectors of the industry, such as{" "}
                <strong>call centers</strong> and <strong>back-offices</strong>,
                there is a lot of opportunity around correctly allocating people
                to handle incoming demand.
            </p>
            <br />
            <p>
                The general process for scheduling optimization that I was
                involved with consisted of three major steps:
            </p>
            <ul className={styles.schedulingList}>
                <li>
                    <strong>Demand Forecasting</strong>: In order to effectively
                    prepare for the demand of upcoming weeks, it is necessary to
                    have a reasonable expectation of how the demand profile will
                    be. By using a concoction of forecasting tools (such as{" "}
                    <strong>Prophet</strong>, <strong>TBATS</strong> etc) and
                    given that the seasonal behavior of demand is usually rather
                    stable in those business segments, we were able to prepare
                    ahead with a remarkable accuracy.
                </li>
                <li>
                    <strong>Schedules Generation</strong>: Given alignment with
                    the business, we established constraints for the possible
                    schedules that can be assigned headcount by our optimization
                    process. Those constraints include things such as start
                    times, shift lengths, break times, etc. Then, we need to
                    generate the entire combinatoric result of those
                    constraints, making sure they are self-consistent, and
                    generate the possible schedules that can be fed into the
                    optimizer.
                </li>
                <li>
                    <strong>Headcount Optimization</strong>: After setting those
                    basic inputs (the <strong>demand</strong> and the
                    constraints on the <strong>supply</strong>), we proceed to
                    the optimization step to obtain the headcounts, which
                    consists of a{" "}
                    <strong>Mixed-Integer Linear Programming</strong> step that
                    can incorporate several parameters such as SLA (Service
                    Level Agreements), headcount constraints, demand smoothing
                    etc.
                </li>
            </ul>
            <p>
                Ultimately, the process allows us to shuffle and rescale
                headcount for different roles and job types ensuring optimized
                allocation of resources.
            </p>
        </div>
    );
}

function RoutingAlgorithms() {
    return (
        <div>
            <p>
                I developed solutions that optimized{" "}
                <strong>worker dispatching</strong> and{" "}
                <strong>vehicle routing</strong> for different sectors,
                including clients in the Gas & Energy space as well as in the
                Pharma industry.
            </p>
            <br />
            <p>
                The problems were further complications of the{" "}
                <strong>Traveling Salesman Problem</strong> and{" "}
                <strong>Vehicle Routing Problem</strong>, including constraints
                such as jobs dependencies, different job durations, availability
                windows etc.
            </p>
            <br />
            <p>
                They included different optimization algorithms such as{" "}
                <strong>Ant Colony Optimization</strong> and{" "}
                <strong>Simulated Annealing</strong> for probabilistic and
                heuristic approaches as well as{" "}
                <strong>MILP formulations</strong> and some greedy approaches.
            </p>
            <br />
            <p>
                The Ant Colony Optimization implementation was particularly
                involved due to the need of several time-specific and coupled
                constraints, and was further improved by a custom low-level
                implementation of the logic, speeding up the runtime by around
                40 times compared to a naive implementation in Python.
            </p>
            <br />
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
