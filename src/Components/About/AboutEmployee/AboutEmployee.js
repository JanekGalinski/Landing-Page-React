import React from 'react';
import './AboutEmployee.css';

function AboutEmployee({firstName, lastName, job, desc, img}) {
  return (
            <article class="about-employee">
                <div class="about-employee-pic">  
                </div>
                <div class="about-employee-text">
                    <h2>{firstName} {lastName} [{job}]</h2>
                    <p>{desc}</p>
                </div>
            </article>
  );
}

export default AboutEmployee;