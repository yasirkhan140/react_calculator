import React, { useState } from "react";
import Answer from "./Answer";
import Buttons from "./Buttons";

function Calculator(){
    // using useState (hooks) for saving answer and changing ans.
    const [result, setResult] = useState("");
    // handle all btn click ans set to result.
    const handleBtn=(e)=>{
        setResult(result.concat(e.target.name))
    }
    // handle C btn click and set result to none.
    const backspace =()=>{
        setResult("")
    }
    // handle euqal btn click and set result to ans.
    const handleResult =()=>{
        try{
            setResult(eval(result).toString());
        }catch{
            setResult("Error");
        }
        
    }
    // handle click of plus/minus btn.
    const reverseSign = ()=>{
        // if already no is plus then set to minus no.
        if(result.slice(0,1)!=="-"){
            setResult("-"+result)
            // if no is minus then set to plus no.
        }else{
            setResult(result.slice(1));
            
        }
        
    }
    // handle click the percentage btn .
    const handlePer=()=>{
        // index of equation 
        let index;
        // first no of equation
        let firstNo;
        // second no of eqaution
        let secondNo;
        // temp result of per 
        let tempResult;
        // loop for checking the between  two no.
        for(var i =0;i<result.length;i++){
            // when the sign in come set to index
            if(result[i]==="+"||result[i]==="-"||result[i]==="/"||result[i]==="*"){
                index=i
            }
        }
        firstNo=result.slice(0,index);

        secondNo=result.slice(index+1);
        // if there is no other no only single no then return no/100.
        if(firstNo===secondNo){
            setResult(eval(result+"/"+100).toString())
            // if there is other like (a+b%=result ) b then return/set result.
            // temp result is a percentage b of a (a+b%) .
        }else{
            tempResult=(secondNo/firstNo*100).toString();
            // set to state result.
            setResult(eval(result+"-"+tempResult).toString());
        }
        
        
    }   
    return(
        <div className="calculator-div">
            <Answer
            // pass the props result to show in answer js
            result ={result}/>
            <Buttons
            // pass handle click function to button js
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
