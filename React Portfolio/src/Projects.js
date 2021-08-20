import Project1 from "../src/imgs/project1.jpg"
const Projects = () => {
    return (
        <div className='container' id='projects'>
            <div className='projects row container'>
                <div data-aos="fade-up">
                    <h1>Projects</h1>   
                </div>
                <div className="project1 col-md-4" data-aos="fade-up">
                    <a href="https://hypertapp.com/">
                        <img src={Project1} alt="" className='imgfuild' width='100%'/>
                        <h2>Hypertapp Studios Website</h2>
                        <p>I build this website for Hypertapp Studios company
                            using HTML CSS BOOTSTRAP JavaScript and Jquery for 
                            animations and the slide when it is scroll ,I used                   
                            BOOTSTRAP for make it responsive on all devicies
                        </p>  
                    </a>
                </div>
                <div className="project2 col-md-4"></div>
                <div className="project3 col-md-4"></div>
            </div>
        </div>

    );
}
 
export default Projects;