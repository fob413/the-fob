import React from "react";
import Typography from "../common/Typography";

import "./index.css";


const projects = [
    {
        id: 1,
        projectName: "TicTacToeApi",
        summary: "Tic-tac-toe (also known as noughts and crosses or Xs and Os) is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.\n" +
            "This API plays the game against the API server. (Don't expect to win 😉 )",
        github: "https://github.com/fob413/TicTacToeApi",
        link: "https://tictactoeapi-funsho.herokuapp.com",
        technologyStack: "This was built with Python, Flask and Flask-RESTful."
    },
    {
        id: 2,
        projectName: "The International Space Station Location (ISS-L)",
        summary: "ISS-L is a simple application that displays the current location of the International Space Station on Google Map. Logged in Users can see Fun Facts about the International Space Station.",
        github: "https://github.com/fob413/ISS-Location",
        link: "https://iss-location-app.herokuapp.com/",
        technologyStack: "This was built with Angular, Node, ExpressJS, MongoDB"
    },
    {
        id: 3,
        projectName: "Airtech",
        summary: "Airtech is a flight booking system that allows users of the platform to book flights and pay for flight tickets.",
        github: "https://github.com/fob413/airtech",
        link: null,
        technologyStack: "This was built with Python, PostgreSQL, Flask, Flask-RESTful, Redis, Celery"
    },
    {
        id: 4,
        projectName: "Flask-Rest-Api-Setup",
        summary: "A quick starter template for building your flask REST API applications",
        github: "https://github.com/fob413/flask-rest-api-setup",
        link: null,
        technologyStack: "This was built with Python, PostgreSQL, Flask, Flask-RESTful"
    },
    {
        id: 5,
        projectName: "My Portfolio site",
        summary: "The beautiful site you're currently looking at.",
        github: "https://github.com/fob413/oluwafunso",
        link: "http://oluwafunso.dev/",
        technologyStack: "This was built with React"
    }
]


export default function Projects () {
    return (
        projects.map(project =>
            <div id="projects">
                <Typography
                    text={project.projectName}
                    textAlign="left"
                    fontWeight="400"
                    fontSize="18px"
                    margin="0 0 10px 0"
                />
                <Typography
                    text={project.summary}
                    textAlign="left"
                    fontWeight="200"
                    fontSize="16px"
                    margin="0 0 10px 0"
                />
                <Typography
                    text={"Technology Used: " +  project.technologyStack}
                    textAlign="left"
                    fontWeight="200"
                    fontSize="16px"
                    margin="0 0 20px 0"
                />

                {project.github ?
                    <p className="links">Github: <a href={project.github}>{project.github}</a> </p> :
                    <div />
                }
                {
                    project.link ?
                    <p className="links">Link: <a href={project.link}>{project.link}</a> </p> :
                    <div />
                }
                <div style={{marginBottom: "40px"}} />
            </div>
        )
    )
}
