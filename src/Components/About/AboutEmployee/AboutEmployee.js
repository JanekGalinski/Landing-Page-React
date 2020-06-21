import React from 'react';
import './AboutEmployee.css';

function AboutEmployee({firstName, lastName, job, desc, img}) {
  return (
            <article className="about-employee">
                <div className="about-employee-pic" style={{backgroundImage: `url('${img}')`}}>  
                </div>
                <div className="about-employee-text">
                    <h2>{firstName} {lastName} [{job}]</h2>
                    <p>{desc}</p>
                </div>
            </article>
  );
}

export default AboutEmployee;