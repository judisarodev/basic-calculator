import React from "react";
import { HowToCard } from "./HowToCard";
import * as cards from '../managers/cardsManager';
import { Title } from './Title';

const HowToContainer = () => {

    return(
        <div className="container">
            <Title />
            <div className="row d-flex justify-content-center">
                <div className="col-sm-12 col-md-6 d-flex justify-content-end">
                    <HowToCard arr={cards.getMemoryCards()}/>
                </div>
                <div className="col-sm-12 col-md-6 d-flex">
                    <HowToCard arr={cards.getDelCards()}/>
                </div>
            </div>
        </div>
    );
}

export { HowToContainer }