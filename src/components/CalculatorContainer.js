import React from "react";
import { FragmentProvider } from '../context/FragmentContext';
import { Display } from './Display';
import { ConsoleProvider } from '../context/ConsoleContext';
import { ButtonsContainer } from './ButtonsContainer';
import { ShowHistory } from './ShowHistory';
import '../styles/calculatorContainer.css';

const CalculatorContainer = () => {
    return(
        <div className="big-container">
            <div className="cal-container">
            <FragmentProvider>
                <ShowHistory />
                <ConsoleProvider>
                    <Display/>
                    <ButtonsContainer/>
                </ConsoleProvider>
            </FragmentProvider>
            </div>
        </div>
    );
}

export { CalculatorContainer };