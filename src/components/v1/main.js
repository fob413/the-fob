import React from "react";

import Intro from './intro';
import About from "./about";
import Resume from "./resume";
import Contact from './contact';


export default function Main() {
    return (
        <div>
            <Intro/>
            <About/>
            <Resume/>
            <Contact/>
        </div>
    )
}
