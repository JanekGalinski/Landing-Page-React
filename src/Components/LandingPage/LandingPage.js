import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <section class="landing-page" id="landingPage">
        <div class="landing-page-shadow">
            <div class="container">
                <div class="landing-page-text">
                    <h1>Nasza firma oferuje najwyzszej jakości produkty</h1>
                    <h2>Nie wierz nam na słowo - sprawdź</h2>
                    <a class="landing-page-btn" href="#offers">
                        oferta
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
}

export default LandingPage;
