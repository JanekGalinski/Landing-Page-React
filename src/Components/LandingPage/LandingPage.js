import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <section className="landing-page" id="landingPage">
        <div className="landing-page-shadow">
            <div className="container">
                <div className="landing-page-text">
                    <h1>Nasza firma oferuje najwyzszej jakości produkty</h1>
                    <h2>Nie wierz nam na słowo - sprawdź</h2>
                    <a className="landing-page-btn" href="#offers">
                        oferta
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
}

export default LandingPage;
