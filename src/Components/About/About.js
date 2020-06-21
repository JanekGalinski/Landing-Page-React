import React from 'react';
import './About.css';
import AboutEmployee from './AboutEmployee/AboutEmployee';
import { v1 as uuidv1 } from 'uuid';

const specialists = [
    {
        firstName: "Jan",
        lastName: "Kowalski",
        job: "Frontdev",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel risus commodo, convallis dolor tincidunt, ultrices nunc. Mauris a iaculis turpis. Sed ullamcorper commodo nisi, vitae congue augue luctus convallis. Vivamus faucibus commodo nunc, non cursus ligula eleifend ac. ",
        id: uuidv1(),
    },
    {
        firstName: "Adam",
        lastName: "Nowak",
        job: "Frontdev",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel risus commodo, convallis dolor tincidunt, ultrices nunc. Mauris a iaculis turpis. Sed ullamcorper commodo nisi, vitae congue augue luctus convallis. Vivamus faucibus commodo nunc, non cursus ligula eleifend ac. ",
        id: uuidv1(),
    },
];

function About() {
  return (
    <section class="about" id="about">
        <div class="container">
            <h1>Nasi specjaliści</h1>
            <div>
                {
                    specialists.map(spec => {
                        return <AboutEmployee
                                    firstName={spec.firstName}
                                    lastName={spec.lastName}
                                    job={spec.job}
                                    desc={spec.desc}
                                    key={spec.id}
                                >
                                </AboutEmployee>
                    })
                }
            </div>
        </div>
    </section>
  );
}

export default About;
