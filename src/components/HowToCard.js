import React, { useState } from "react";

const HowToCard = ({arr}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const onSetTab = (e) => {
        e.preventDefault();
        const tabValue = e.target.textContent; 
        setCurrentIndex(arr.tabs.indexOf(arr.tabs.find(item => item === tabValue)));
    }

    const getItemStatus = (item) => {
        if(arr.tabs.indexOf(item) === currentIndex){
            return true; 
        }else{
            return false; 
        }
    }

    return(
        <>
            <div class="card text-center" style={{width: '400px', margin: '10px'}}>
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs row">
                        {arr.tabs.map((item) => {
                            return(<HowToCardTabItem tabName={item} onSetTab={onSetTab} isActive={getItemStatus(item)} />)
                        })}
                    </ul>
                </div>
                <div class="card-body">
                    <HowToCardDescriptionItem description={arr.descriptions[currentIndex]}/>
                </div>
            </div>
        </>
    );
}

const HowToCardTabItem = ({onSetTab, tabName, isActive}) => {
    return(
        <>
        {
            isActive &&
            <li class="nav-item col" key={tabName}>
                <a class="nav-link active" href="#" onClick={onSetTab}>{tabName}</a>
            </li>
        }
            
        {
            !isActive &&
            <li class="nav-item col" key={tabName}>
                <a class="nav-link" style={{color: 'black'}} href="#" onClick={onSetTab}>{tabName}</a>
            </li>
        }
        </>
    );
}

const HowToCardDescriptionItem = ({description}) => {
    return(
        <div className="d-flex align-items-center" style={{height: '60px'}}>
            <p style={{color: 'black', textAlign: 'left'}}>{description}</p>
        </div>
    );
}

export { HowToCard }; 