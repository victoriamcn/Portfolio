import ResumePDF from '../assets/resume/LINKEDINVictoriaMcNorrillResume2023.pdf'
//portfolio/src/images/resume/LINKEDINVictoriaMcNorrillResume2023.pdf
import TechSkills from './utils/techSkills'

const Resume = () => {
    return (
        <section id="resume">
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">RESUME</p>
                        <div className="content">
                            <a href={ResumePDF} target="_blank" rel="noreferrer"><button className="button subtitle">Click to View</button></a>
                        </div>
                    </article>
                </div>
                <div className="tile is-parent is-8">
                    <article className="tile is-child box">
                        <div className="content">
                            <p className="subtitle">Proficiencies</p>
                            <TechSkills/>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Resume;