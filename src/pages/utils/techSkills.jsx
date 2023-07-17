import React from 'react';

const techSkillsList = [
    "Agile",
    "MERN",
    "OOP",
    "MVC",
    "ORM",
    "UX/UI",
    "JWT",
    "React",
    "GraphQL",
    "Apollo",
    "Node.js",
    "npm",
    "dotenv",
    "MySQL",
    "Sequelize",
    "Express.js",
    "NoSQL",
    "MongoDB",
    "Mongoose",
    "JavaScript",
    "jQuery",
    "DOM",
    "localStorage",
    "Third Party APIs",
    "Handlebars.js",
    "day.js",
    "CSS",
    "Tailwind CSS",
    "DaisyUI",
    "Spectre.css",
    "Bootstrap",
    "Bulma.css",
    "HTML",
];

let TechSkills = () => {
    return <div>
        {techSkillsList.map((skill, i) => (
            <span key={i} data-value={skill} className="tag m-1">
                {skill}
            </span>
        ))}
    </div>;
}

export default TechSkills;
