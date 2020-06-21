import React from 'react';
import './Offer.css';
import { v1 as uuidv1 } from 'uuid';

const offers = [
    {
        id: uuidv1(),
        offerName: "Warzywa",
        isNew: false,
    },
    {
        id: uuidv1(),
        offerName: "Chleb",
        isNew: true,
    },
    {
        id: uuidv1(),
        offerName: "Owoce",
        isNew: false,
    },
    {
        id: uuidv1(),
        offerName: "Nabiał",
        isNew: true,
    },
    {
        id: uuidv1(),
        offerName: "Mięso",
        isNew: false,
    },
    {
        id: uuidv1(),
        offerName: "Sery",
        isNew: false,
    },
];

function OfferBox({offerName, isNew}) {
    return(
        <div className="offers-box-1">
                <h2>{offerName}</h2>
                {isNew && <p>(nowość)</p>}
                {isNew && <div className="offers-boxes-dot">{isNew}</div>}
        </div>
    )
};

function Offer() {
  return (
    <section className="offers" id="offers">       
        <div className="container">
            <h1>Czym zajmuje się nasza firma?</h1>
            <div className="offers-boxes">
                {offers.map(offer => <OfferBox key={offer.id} offerName={offer.offerName} isNew={offer.isNew}/>)}
            </div>
        </div>
    </section>
  );
}

export default Offer;
