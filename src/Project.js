function Project({ index }){
    let projects = [<div className='project'>
                        <header className='subHeader'>Project 1</header>
                        <h2><a style={{color:'black'}}href='https://github.com/rdawson46/Python-trader'>Automatic Stock Trader</a></h2>
                        <ul>
                            <li>Written in Python using Alpacas API</li>
                            <li>Includes multiple risk analysis algorithms to manage a stock portfolio</li>
                        </ul>
                    </div>,
                    <div className='project'>
                        <header className='subHeader'>Project 2</header>
                        <h2><a style={{color:'black'}} href='https://github.com/rdawson46/CourseSchedular'>Course Schedular</a></h2>
                        <ul>
                            <li>Written in Java and MySQL</li>
                            <li>Allows for administrion and students to enroll in and manage classes</li>
                        </ul>
                    </div>,
                        <div className='project'>
                        <header className='subHeader'>Project 3</header>
                        <h2><a style={{color:'black'}} href='/'>Portfolio Website</a></h2>
                        <ul>
                            <li>Written in JavaScript and CSS</li>
                            <li>React app to demonstrate knowledge of React, JSX, and CSS</li>
                        </ul>
                    </div>]
    return(
        <div className='group'>
            {projects[index]}
        </div>
    );
}

export default Project;
