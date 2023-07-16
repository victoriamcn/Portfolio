import React from 'react';

// import softSkillsList from "../utils/softSkillList";

export default function softSkills({softSkillsList}, i) {
    return (
          softSkillsList.map((soft) => (
            <a className="list-item" href="#/" key={i}>
                {soft}
            </a>
            ))
    );
};
