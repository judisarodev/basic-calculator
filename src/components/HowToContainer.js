import React from "react";
import { Title } from "./Title"; 
import { HowToCard } from "./HowToCard";
import * as cards from '../managers/cardsManager';

const HowToContainer = () => {

    return(
        <div className="container">
            <Title /> 
            <div className="row d-flex justify-content-center">

                <div className="col-12 d-flex justify-content-center">
                    <HowToCard arr={cards.splitArray(cards.getMemoryCards())}/>
                </div>

                <div className="col-12 d-flex justify-content-center">
                    <HowToCard arr={cards.splitArray(cards.getDelCards())}/>
                </div>

                <div className="col-12 d-flex justify-content-center">
                    <HowToCard arr={cards.splitArray(cards.getSingOperatorsCards())}/>
                </div>

            </div>
        </div>
    );
}

export { HowToContainer }