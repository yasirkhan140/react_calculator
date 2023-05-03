// this is for only show a result.
function Answer(props){
    // take result from props.
    const {result} = props

    return(
        <div className="answer-div">
            {/* input set value result */}
            <input value ={result} className="result-show"/>
        </div>

    )
}
export default Answer;
        
