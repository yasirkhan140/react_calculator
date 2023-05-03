function Answer(props){
    const {result} = props
    return(
        <div className="answer-div">
            <input value ={result} className="result-show"/>
        </div>

    )
}
export default Answer;
        