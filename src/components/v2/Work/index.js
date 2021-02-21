import React from "react";

import Typography from "../common/Typography";

import "./index.css";


const workExperience = [
    {
        id: 1,
        companyName: 'TalentUp Africa',
        title: 'Backend Team Lead (Full-time), November 2020 - ongoing',
        summary: 'I work as the team lead of the backend  team that\'s building a recruitment software to enable a more efficient, objective, easier and faster way of recruiting quality talent.',
        technologyUsed: 'Python, Flask, PostgreSQL, Unittest, Docker, Git, Jira, TravisCI, AWS'
    },
    {
        id: 2,
        companyName: 'Andela',
        title: 'FullStack Software Engineer (Contract), October 2020 - ongoing',
        summary: 'I work as a fullstack engineer on a contractor basis to join/work with remote teams to build quickly and cost-effectively.',
        technologyUsed: 'Javascript, Node.JS, Express.JS, React, Redux, Angular, Python, Flask, Django, Git, Jira, Pivotal Tracker, Docker, CircleCI, TravisCI, AWS, PostgreSQL, MongoDB, MySQL'
    },
    {
        id: 3,
        companyName: 'TalentUp Africa',
        title: 'Backend Software Engineer (Contract), June 2020 - November 2020',
        summary: 'I worked as a member of the backend  team that\'s building a recruitment software to enable a more efficient, objective, easier and faster way of recruiting quality talent.',
        technologyUsed: 'Python, Flask, PostgreSQL, Unittest, Docker, Git, Jira, TravisCI, AWS'
    },
    {
        id: 4,
        companyName: 'Voyage Control',
        title: 'FullStack Software Engineer (Contract through Andela), March 2019 - December 2020',
        summary: 'I worked as a full-stack engineer, where I owned the end-to-end development of the ports section of the logistics management solution to bring down time spent by a truck at the ports to below 1 hour.',
        technologyUsed: 'Javascript, Angular, Typescript, Python, Flask, Django, Unittest, Docker, Git, Jira, MYSQL, PostgreSQL, AWS'
    },
    {
        id: 5,
        companyName: '3x3Insights',
        title: 'Backend Engineer (Contract through Andela), October 2018 - February 2019',
        summary: 'I worked as a backend engineer, focused on data extraction from the clients Point of sales machine for data analysis.',
        technologyUsed: 'Python, Git'
    },
    {
        id: 6,
        companyName: 'Andela',
        title: 'FullStack Software Engineer (Full-time), August 2017 - October 2020',
        summary: 'I worked as a fullstack engineer full-time, to join/work with remote teams to build quickly and cost-effectively.',
        technologyUsed: 'Javascript, Node.JS, Express.JS, React, Redux, Angular, Python, Flask, Django, Git, Jira, Pivotal Tracker, Docker, CircleCI, TravisCI, AWS, PostgreSQL, MongoDB, MySQL'
    },
    {
        id: 7,
        companyName: 'Anakle',
        title: 'UI/UX (Intern), February 2017 - July 2017',
        summary: 'I worked with the team as a UI/UX designer, and was responsible for designing creatives for clients, designing web and mobile interfaces for software development, developing front-end web interfaces for products.',
        technologyUsed: 'Javascript, Jquery, Adobe, Photoshop, Adobe, illustrator, Bootstrap, Materializecss, Abode XD, HTML, CSS, Figma'
    },
]


export default function Work () {
    return (
        workExperience.map(experience =>
            <div id="experience">
                <Typography
                    text={experience.companyName}
                    textAlign="left"
                    fontWeight="400"
                    fontSize="18px"
                />
                <Typography
                    text={experience.title}
                    textAlign="left"
                    fontWeight="200"
                    fontSize="12px"
                    margin="0 0 10px 0"
                />
                <Typography
                    text={experience.summary}
                    textAlign="left"
                    fontWeight="200"
                    fontSize="16px"
                    margin="0 0 10px 0"
                />
                <Typography
                    text={"Technology Used: " +  experience.technologyUsed}
                    textAlign="left"
                    fontWeight="200"
                    fontSize="16px"
                    margin="0 0 40px 0"
                />
            </div>
        )
    )
}
