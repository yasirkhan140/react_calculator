import React, { useState } from "react";
import Answer from "./Answer";
import Buttons from "./Buttons";

function Calculator(){
    const [result, setResult] = useState("");
    const handleBtn=(e)=>{
        setResult(result.concat(e.target.name))
    }
    const backspace =()=>{
        setResult("")
    }
    const handleResult =()=>{
        try{
            setResult(eval(result).toString());
        }catch{
            setResult("Error");
        }
        
    }
    const reverseSign = ()=>{
        if(result.slice(0,1)!="-"){
            setResult("-"+result)
        }else{
            setResult(result.slice(1));
            
        }
        
    }
    const handlePer=()=>{
        let index;
        let firstNo;
        let secondNo;
        let tempResult;
        for(var i =0;i<result.length;i++){
            if(result[i]=="+"||result[i]=="-"||result[i]=="/"||result[i]=="*"){
                index=i
            }
        }
        firstNo=result.slice(0,index);

        secondNo=result.slice(index+1);
        if(firstNo==secondNo){
            setResult(eval(result+"/"+100).toString())
        }else{
            tempResult=(secondNo/firstNo*100).toString();
            
            setResult(eval(result+"-"+tempResult).toString());
        }
        
        
    }   
    return(
        <div className="calculator-div">
            <Answer/>
            <Buttons
                result={result}
                onClickBtn ={handleBtn}
                onClickC = {backspace}
                onClickEqual = {handleResult}
                onClickR= {reverseSign}
                onClickPer={handlePer}
            />
        </div>
    )
    

}

export default Calculator;