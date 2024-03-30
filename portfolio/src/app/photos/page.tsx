import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import styles from "./page.module.css";

export default function Trivia() {
    return (
        <div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <div style={{ flexGrow: 1 }}>
                    <Card className={styles.card}>
                        <CardMedia
                            sx={{
                                width: "100%",
                                height: "26rem",
                                maxWidth: 900,
                                minWidth: 400,
                            }}
                            image="/kingsindian.jpg"
                        />
                        <CardContent sx={{}}>
                            Studying the{" "}
                            <Link href="https://en.wikipedia.org/wiki/King%27s_Indian_Defence">
                                King&apos;s Indian Defense.
                            </Link>
                        </CardContent>
                    </Card>
                    <Card className={styles.card}>
                        <CardMedia
                            sx={{
                                width: "100%",
                                height: "25rem",
                                maxWidth: 900,
                                minWidth: 400,
                            }}
                            image="/alas.jpg"
                        />
                        <CardContent sx={{}}>
                            Restaurant{" "}
                            <Link href="https://www.instagram.com/alasrestaurante">
                                Alas
                            </Link>{" "}
                            in Vitória - ES.
                            <br /> Great Greek food and view of the river at
                            night!
                        </CardContent>
                    </Card>
                </div>
                <div style={{ marginTop: 10, marginRight: 10 }}>
                    <Card
                        sx={{ width: 500, height: "51.65rem", minWidth: 500 }}
                    >
                        <CardMedia
                            sx={{ width: "100%", height: "47rem" }}
                            image="/climbing.jpg"
                        />
                        <CardContent>
                            Climbing a rock in Rio de Janeiro.
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
