import htmlicon from '../src/imgs/html.png'
import cssicon from '../src/imgs/css.png'
import jsicon from '../src/imgs/js.png'
import bootstrapicon from '../src/imgs/bootstrap.png'
import reacticon from '../src/imgs/react.png'
import figmaicon from '../src/imgs/figma.png'
const Skills = () => {
    return ( 
        <div className="skills container" id='skills'>
            <div className="container">
                <div data-aos="fade-up">
                    <h1>Skills</h1>
                </div>
                <div className="b1 row">
                    <div className="fes col-lg-6" data-aos="fade-up">
                        <h2>Front-end</h2>
                        <div className="fes2 row">
                            <div className="s1 col-4">
                                <img src={htmlicon} alt="" className='img-fuild'/>
                                <h5>HTML</h5>
                            </div>
                            <div className="s1 col-4">
                                <img src={cssicon} alt="" className='img-fuild'/>
                                <h5>CSS</h5>    
                            </div>
                            <div className="s1 col-4">
                                <img src={jsicon} alt="" className='img-fuild'/>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="s1 col-4">
                                <img src={bootstrapicon} alt="" className='img-fuild'/>
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="s1 col-4">
                                <img src={reacticon} alt="" className='img-fuild'/>
                                <h5>React</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="b2 row">
                    <div className="uiuxs col-lg-6" data-aos="fade-up">
                        <h2>UI UX</h2>
                        <div className="fes2 row">
                            <div className="s1 col-4">
                                <img src={figmaicon} alt="" className='img-fuild'/>
                                <h5>Figama</h5>
                            </div>
                            <div className="col-4"></div>
                            <div className="col-4"></div>
                            <div className="col-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;