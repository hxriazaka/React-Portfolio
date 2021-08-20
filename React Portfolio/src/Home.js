import Particles from 'react-particles-js';
import Navbar from './Navbar';
import Typed from "react-typed";
import Githubicon from '../src/imgs/github3.png'
import Inicon from '../src/imgs/in2.png'
import Instaicon from '../src/imgs/insta2.png'
const Home = () => {
    return (
        <div className='home' id='home'>
            < Navbar />
                  <Particles      
                    params={{
                        particles: {
                            number: {
                                value: 30,
                                    density: {
                                        enable:true,
                                        value_area: 900
                                    }
                            }
                        }
                    }}
                    height="80%"
                />                      
            <div className="A1 container">              
                <h1>Hello</h1>
                <h1>My name is Zakaria</h1>
                <Typed
                    className="typed-text"
                    strings={['Front End Developer', 'Freelancer', 'Self-Learner']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <div className="imgicon">
                    <a href="https://github.com/riazakaDev">
                        <img src={Githubicon} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/zakaria-belamri-485977212/">
                        <img src={Inicon} alt="" />
                    </a>
                    <a href="https://www.instagram.com/riazakadev_/">
                        <img src={Instaicon} alt="" />
                    </a>
                </div>                                      
            </div>
        </div>
     );
}
 
export default Home;