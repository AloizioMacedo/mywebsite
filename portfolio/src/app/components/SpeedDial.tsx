import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkIcon from "@mui/icons-material/Link";
import Link from "@mui/material/Link";

const actions = [
    {
        icon: (
            <Link
                href="https://www.linkedin.com/in/aloizio-macedo/"
                style={{ display: "flex" }}
                target="_blank"
            >
                <LinkedInIcon />
            </Link>
        ),
        name: "LinkedIn",
    },
    {
        icon: (
            <Link
                href="https://github.com/AloizioMacedo"
                style={{ display: "flex" }}
                target="_blank"
            >
                <GitHubIcon />
            </Link>
        ),
        name: "GitHub",
    },
    {
        icon: (
            <Link
                href="mailto:aLoiziomacedo@gmail.com"
                style={{ display: "flex" }}
            >
                <EmailIcon />
            </Link>
        ),
        name: "Email",
    },
];

export default function BasicSpeedDial() {
    return (
        <Box
            sx={{
                flexGrow: 1,
            }}
        >
            <SpeedDial
                ariaLabel="SpeedDial"
                sx={{ position: "fixed", bottom: 16, right: 16 }}
                icon={<LinkIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}
