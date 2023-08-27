import React from "react";

const Button = ({value, isDark, onClickButton}) =>{
    if(isDark){
        return <div onClick={onClickButton} className="col button operator-button">{value}</div>;
    }else if(isDark === false){
        return <div onClick={onClickButton}  className="col button numeric-button">{value}</div>;
    }else{
        return <div onClick={onClickButton}  className="col button equals-button">{value}</div>;
    }
}

export { Button };