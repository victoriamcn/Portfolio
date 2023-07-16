import React from 'react'

import Headshot from '../../assets/photos/headshot.jpg'
//portfolio/src/assets/photos/headshot.jpg
import MeOne from '../../assets/photos/me 1.png'
import MeTwo from '../../assets/photos/me 2.png'

// alt="A woman wearing a beanie and coat stands smiling with the Cliffs of Moher."

const About = () => {
    return (
        <section id="about" className="content">
            <div className="box">
                <div className="media-content">
                    <p className="title">ABOUT</p>
                    <figure >
                        <img src={Headshot} alt="Victoria: Caucasian woman with short brown hair and blue eyes. Sitting at a table looking directly at the camera." />
                    </figure>
                    <p className="abouttext">I'm a full-stack web developer with a background in graphic design, allowing me to offer unique perspectives on user interaction with websites and software platforms. I recently earned a professional certificate in Full Stack Web Development from the <a href="https://pe.gatech.edu/courses/georgia-tech-coding-boot-camp">Georgia Institute of Technology's Certification program</a>. My strengths lie in creativity, teamwork, and debugging.</p>
                    <p className="abouttext">Beyond my professional life, I enjoy thrifting and upcycling furniture, appreciating art, architecture and interior design, and watching Wes Anderson movies with my lovely calico cat, Birdie. I'm also an avid traveler, having visited Peru, Belize, Italy, Ireland, Sweden, the Czech Republic, the Bahamas, Aruba, and various parts of the United States. Currently, I reside in South Carolina.</p>
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

        </section >
    )

}

export default About