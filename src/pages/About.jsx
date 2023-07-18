/* eslint-disable react/no-unescaped-entities */
import Headshot from '../assets/photos/headshot.jpg';
import MeOne from '../assets/photos/me 1.png';
import MeTwo from '../assets/photos/me 2.png';


const About = () => {
    return (
        <section id="about">
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <img src={Headshot} className="me" alt="Victoria: Caucasian woman with short brown hair and blue eyes. Sitting at a table looking directly at the camera." />
                    </article>
                </div>
                <div className="tile is-parent">
                    <div className="tile is-child box">
                        <p className="title">ABOUT</p>
                        <p className="abouttext">I am a full-stack web developer with a background in communications, graphic design and layout design, allowing me to offer unique perspectives on UI/UX. I earned a professional certificate in Full Stack Web Development from the <a href="https://pe.gatech.edu/courses/georgia-tech-coding-boot-camp">Georgia Institute of Technology's Certification program</a>. My strengths lie in website flow, creativity, teamwork, and debugging.</p>
                        <p className="abouttext">Beyond my professional life, I enjoy thrifting and upcycling furniture, appreciating art, architecture and interior design, and watching Wes Anderson movies with my lovely calico cat, Birdie. I'm also an avid traveler, having visited Peru, Belize, Italy, Ireland, Sweden, the Czech Republic, the Bahamas, Aruba, and various parts of the United States. Currently, I reside in South Carolina.</p>
                    </div>
                </div>
            </div >
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <figure className="image">
                            <img src={MeOne} className="me" alt="Cliffs of Moher, Ireland. Victoria is wearing a red beanie and bulky coat stands smiling contentedly with the cliffs behind her." />
                        </figure>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <figure className="image ">
                            <img src={MeTwo} className="me" alt="Great Sand Dunes National Park, Colorado, US. Victoria is  standing among the golden dunes wearing a ball cap, shots and tank top. Looking stoically off in the distance." />
                        </figure>
                    </article>
                </div>
            </div>
            <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <p className="subtitle">Q: Why are you making a career change?</p>
                            <p className="abouttext">A: Through my career and life experiences job experiences, I discovered my strengths are in problem-solving, creativity, communication and critical thinking. Software engineering was the perfect fit for me, so I pursued it.</p>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <p className="subtitle">Q: What kind of company do you want to work for?</p>
                            <p className="abouttext">A: I want to work for a company that prioritizes accountability, work-life balance, and a collaborative environment.</p>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <p className="subtitle">Q: What skills are you focusing on right now?</p>
                            <p className="abouttext">A: I am deepening my knowledge about the full-stack with JavaScript, MongoDB/mongoose, Express, React.js with Vite, Node, and Apollo/GraphQL. I plan to teach myself Python.</p>
                        </div>
                    </div>
                </div>

        </section >
    )

}

export default About