export default function Portfolio() {
    return (
        <ul>
            <TrafficControl />
            <WorkforceScheduling />
            <RoutingAlgorithms />
        </ul>
    );
}

function TrafficControl() {
    return (
        <li>
            <p>
                My job in traffic control consisted primarily of the
                implementation of three components:
            </p>

            <ul>
                <li>
                    <p>
                        A heuristic logic for dynamically changing stages
                        durations of traffic light based on flow and saturation
                        of street lanes considering different KPIs that
                        incorporate these metrics.
                    </p>
                </li>
                <li>
                    <p>
                        An intricate MILP optimization model for optimizing
                        traffic light offsets relative to each other to create
                        optimized green waves across traffic grids, which is
                        based on an interpretation of a cycle-consistent
                        attribution of the offsets based on the vanishing of an
                        integral 1-form on the cycles of the grid.
                    </p>
                </li>
                <li>
                    <p>
                        Integrating this as a service to connect with other
                        services, including a front-end that is used by
                        government agents as well as the other services that
                        connect to the physical traffic controllers spread
                        around the city of Vitória - ES.
                    </p>
                </li>
            </ul>
        </li>
    );
}

function WorkforceScheduling() {
    return (
        <li>
            <p>
                Workforce Scheduling: Generating optimized schedules given a
                historic demand timeseries together with its forecasting. The
                solution includes consideration of ASA (Average Speed of
                Answer), SLAs (Service Level Agreements), the possibility to
                postpone demand to future points in time etc. Optimization is
                phrased in terms of a MILP.
            </p>
        </li>
    );
}

function RoutingAlgorithms() {
    return (
        <li>
            <p>
                This included different optimization algorithms such as Ant
                Colony Optimization and simulated annealing for probabilistic
                and heuristic approaches as well as MILP formulations and some
                greedy approaches. The problems were further complications of
                the Traveling Salesman Problem and Vehicle Routing Problem,
                including constraints such as jobs dependencies, different job
                durations, availability windows etc.
            </p>
            <p>
                The Ant Colony Optimization was particularly involved and was
                further improved by a custom low-level implementation of the
                logic, speeding up the runtime by around 40 times compared to a
                naive implementation in Python.
            </p>
        </li>
    );
}
