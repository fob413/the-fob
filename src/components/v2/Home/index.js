import React from "react";

import Typography from "../common/Typography";

import "./index.css";


export default function Home () {
    return (
        <div id="home">
            <Typography
                text="Hi, I'm Oluwafunso Oluyole-Balogun"
                textAlign="left"
                fontWeight="400"
                fontSize="2rem"
                margin="20px 0"
            />
            <Typography
                text="I'm a full-stack software engineer with 4+ years of hands-on professional experience in software development, process improvement, on-time delivery of projects, with strong front-end and backend development experience. Self-motivated & committed individual who loves challenges, quick to learn, and appreciates feedback."
                textAlign="left"
                fontWeight="200"
                margin="20px 0 0 0"
                fontSize="16px"
                />
            <Typography
                text="I'm currently at TalentUp Africa, leading the backend team that's building a recruitment software to enable a more efficient, objective, easier and faster way of recruiting quality talent."
                textAlign="left"
                fontWeight="200"
                margin="20px 0 0 0"
                fontSize="16px"
            />
            <Typography
                text="I previously worked at Voyage Control, where I owned the end-to-end development of the ports section of the logistics management solution to bring down time spent by a truck at the ports to below 1 hour."
                textAlign="left"
                fontWeight="200"
                margin="20px 0 0 0"
                fontSize="16px"
            />
            <Typography
                text="If you ever want to chat about or play basketball, or discuss an interesting project, please feel free to hit me up."
                textAlign="left"
                fontWeight="200"
                margin="20px 0 0 0"
                fontSize="16px"
            />

            <ul>
                <li><a href="https://github.com/fob413" target="_blank">Github</a></li>
                <li><a href="https://www.linkedin.com/in/oluwafunso-oluyole-balogun-17a1b3b5/" target="_blank">LinkedIn</a></li>
                <li><a href="https://twitter.com/oluwafunso_" target="_blank">Twitter</a></li>
                <li><a href="https://www.instagram.com/oluwafunso_/" target="_blank">Instagram</a></li>
            </ul>
        </div>
    )
}
