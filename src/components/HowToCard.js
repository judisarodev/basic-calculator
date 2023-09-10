import React, { useState } from "react";

const HowToCard = ({arr}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const onSetTab = (e) => {
        e.preventDefault();
        const tabValue = e.target.textContent; 
        setCurrentIndex(arr.indexOf(arr.find(item => item.tab === tabValue)));
    }

    const getItemStatus = (item) => {
        if(arr.indexOf(item) === currentIndex){
            return true; 
        }else{
            return false; 
        }
    }

    return(
        <>
            <div className="card text-center" style={{width: '400px', margin: '10px'}}>
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs row">
                        {arr.map((item) =><HowToCardTabItem 
                                tabName={item.tab} key={item.key} onSetTab={onSetTab} isActive={getItemStatus(item)} />)
                        }
                    </ul>
                </div>
                <div className="card-body">
                    <HowToCardDescriptionItem description={arr[currentIndex].description}/>
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
            <li className="nav-item col">
                <a className="nav-link active" onClick={onSetTab}>{tabName}</a>
            </li>
        }
            
        {
            !isActive &&
            <li className="nav-item col">
                <a className="nav-link" style={{color: 'black'}} onClick={onSetTab}>{tabName}</a>
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