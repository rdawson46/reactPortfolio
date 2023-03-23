import './Body.css';
import c from './images/C.png';
import css3 from './images/css3.svg';
import html5 from './images/html5.svg';
import java from './images/java.svg';
import js from './images/javascript.svg';
import python from './images/python.svg';
import scss from './images/scss.png';

import Project from "./Project"

import { useState } from "react";

function Body(){
    /*
    1. make button
    2. change projects to jsx array
    3. implement state
    4. make each button change to corresponding state
    */
    const [index, setIndex] = useState(0);
    return(
        <div>
            <header className='subTitle'>About Me</header>
            <p id='bio'>Third-year computer science student at Penn State University.</p>

            <header className='subTitle'>Skills</header>

            <div className='group'>
                <div className='skills'>
                    <header className='subHeader'>Languages</header>

                    <ul>
                        <li>Python<img src={python} alt='Python'/></li>
                        <li>Java<img src={java} alt='Java'/></li>
                        <li>C<img src={c} alt="C"/></li>
                        <li>JavaScript<img src={js} alt='Javascript'/></li>
                        <li>CSS<img src={css3} alt='CSS'/></li>
                        <li>SCSS<img src={scss} alt='SCSS'/></li>
                        <li>HTML<img src={html5} alt='HTML5'/></li>
                    </ul>
                </div>

                <div className='skills'>
                    <header className='subHeader'>Tools and Practices</header>
                    <ul>
                        <li>Git</li>
                        <li>Vs Code</li>
                        <li>OOP</li>
                        <li>Procdural Programming</li>
                        <li>Functional Programming</li>
                    </ul>
                </div>
            </div>

            <header className='subTitle'>Project List</header>
            <div className='buttonGroup'>
                <button onClick={()=>{setIndex(0)}}>Project 1</button>
                <button onClick={()=>{setIndex(1)}}>Project 2</button>
                <button onClick={()=>{setIndex(2)}}>Project 3</button>
            </div>
            <Project index={index}/>
        </div>
    );
}

export default Body;