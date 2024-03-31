import Chip from "@mui/material/Chip";
import styles from "./bio.module.css";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";

export default function Bio() {
    return (
        <div className={styles.bioText}>
            <Description />
            <Technologies />
        </div>
    );
}

function Description() {
    return (
        <div className={styles.description}>
            <p>
                Senior SWE at{" "}
                <Link href="https://www.quantumblack.com/">QuantumBlack</Link>{" "}
                currently leading asset teams that develop Data Science
                solutions.
            </p>
            <Divider color="grey" variant="middle" style={{ margin: "1rem" }} />
            <p>
                My background as a PhD in Mathematics enables me to quickly
                adapt to different problems and contexts.
                <br /> Here are some specific examples of business use cases
                that I&apos;ve been directly involved with:
            </p>
            <ul className={styles.useCases}>
                <li>
                    <Button
                        variant="outlined"
                        href="/portfolio?panel=traffic-control"
                    >
                        Traffic Control
                    </Button>
                </li>
                <li>
                    <Button
                        variant="outlined"
                        href="/portfolio?panel=workforce-scheduling"
                    >
                        Workforce Scheduling
                    </Button>
                </li>
                <li>
                    <Button
                        variant="outlined"
                        href="/portfolio?panel=routing-algorithms"
                    >
                        Routing Algorithms
                    </Button>
                </li>
            </ul>
            <p>
                I lead by doing and am not very fond of contributing in a
                hands-off management style. As such, I am inextricably involved
                in the development process, and I firmly believe that this helps
                to build a team that trusts the solution, the development
                process and the leadership.
            </p>
            <Divider color="grey" variant="middle" style={{ margin: "1rem" }} />
            <p>
                The teams I&apos;ve led consist of very different archetypes,
                including Software Engineers, Data Scientists, Data Engineers,
                Machine Learning Engineers, Mathematicians, Data Analysts etc.
            </p>
            <p>
                These days, most often I contribute with Data Scientists in
                assetizing different implementations developed in specific
                client contexts, making sure to create reusable, efficient and
                easy-to-use solutions.
            </p>
        </div>
    );
}

function OldDescription() {
    return (
        <div className={styles.description}>
            <p>
                Senior SWE currently leading asset teams that develop Data
                Science solutions.
            </p>
            <p>
                My background as a PhD in Mathematics enables me to quickly
                adapt to different problems and contexts.Here are some specific
                examples of business use cases that I&apos;ve been directly
                involved with:
            </p>
            <ul>
                <li>
                    Traffic Control: Adjusting the splits of traffic lights
                    timings and their offsets in order to optimize traffic flow
                    and alleviate congestion, including high-saturation
                    environments. The system involved full integration with
                    multiple components (the traffic controllers, the front-end
                    of the solution, etc.) and was ultimately delivered as a
                    SaaS to government agents.
                </li>
                <li>
                    Workforce Scheduling: Generating optimized schedules given a
                    historic demand timeseries together with its forecasting.
                    The solution includes consideration of ASA (Average Speed of
                    Answer), SLAs (Service Level Agreements), the possibility to
                    postpone demand to future points in time etc. Optimization
                    is phrased in terms of a MILP.
                </li>
                <li>
                    Routing algorithms: Implementation of routing mechanisms
                    that contemplate routing workers or vehicles between jobs
                    that are geographically positioned. Includes different
                    optimization strategies, ranging from greedy optimization,
                    to heuristic ones such as Ant Colony Optimization,
                    leveraging also crew-formation algorithms on hypergraphs.
                </li>
            </ul>
            <p>
                I lead by doing and am not very fond of contributing in a
                hands-off management style. As such, I am inextricably involved
                in the development process, and I firmly believe that this helps
                to build a team that trusts the solution, the development
                process and the leadership. I am familiar with a plethora of
                technologies, including:
            </p>

            <p>
                Furthermore, the teams I&apos;ve led consist of very different
                archetypes, including
            </p>
            <ul>
                <li>Software Engineers</li>
                <li>Data Scientists</li>
                <li>Data Engineers</li>
                <li>Machine Learning Engineers</li>
                <li>Mathematicians</li>
                <li>Data Analysts</li>
            </ul>
            <p>
                These days, most often I contribute with Data Scientists in
                assetizing different implementations developed in specific
                client contexts, making sure to create reusable, efficient and
                easy-to-use solutions. You can take a look at some of my
                side-projects at my GitHub: https://github.com/AloizioMacedo.
            </p>
        </div>
    );
}

function Technologies() {
    return (
        <div>
            <p className={styles.techTitle}>Technologies:</p>
            <ul className={styles.technologies}>
                <li>
                    <Chip label="Python" variant="outlined"></Chip>
                </li>
                <li>
                    <Chip label="Rust" variant="outlined"></Chip>
                </li>
                <li>
                    <Chip label="Git" variant="outlined"></Chip>
                </li>
                <li>
                    <Chip label="Docker" variant="outlined"></Chip>
                </li>
                <li>
                    <Chip label="Go" variant="outlined"></Chip>
                </li>
                <li>
                    <Chip label="Typescript" variant="outlined"></Chip>
                </li>
                <li>
                    <Chip label="SQL/NoSQL databases" variant="outlined"></Chip>
                </li>
                <li>
                    <Chip label="AWS" variant="outlined"></Chip>
                </li>
                <li>
                    <Chip label="Azure" variant="outlined"></Chip>
                </li>
            </ul>
        </div>
    );
}
