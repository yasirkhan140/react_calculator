import React from "react";

function Buttons (props){
        // come from props.
        const {onClickBtn,onClickC,onClickEqual,onClickR,onClickPer}= props;
        return(
            // main conatiner of btn 
            <div className="main-container">
                {/* btn div all btn inside this div */}
                <div className="buttons-div">
                    {/* btn of clear */}
                    < button className="btn-C" onClick={onClickC}>
                        C
                    </button>
                    {/* reverse btn and add onClick */}
                    < button className="btn-reverse" onClick ={onClickR}>
                        +/-
                    </button>
                    {/* percentage btn and add onCLick */}
                    < button className="btn-per" name ="%" onClick={onClickPer} >
                        %
                    </button>
                    {/* divide btn and add onCLick listener*/}
                    < button className="btn-divide orange" name='/' onClick={onClickBtn}>
                        /
                    </button>
                    {/* 7 btn and add onCLick */}
                    < button className="btn-7" name ="7" onClick={onClickBtn}>
                        7
                    </button>
                    {/* 8 btn and add onCLick */}
                    < button className="btn-8" name ="8"onClick={onClickBtn}>
                        8
                    </button>
                    {/* 9 btn and add onCLick */}
                    < button className="btn-9" name ="9"onClick={onClickBtn}>
                        9
                    </button>
                    {/* Multiply btn and add onCLick */}
                    < button className="btn-mul orange" name ="*" onClick={onClickBtn}>
                        *
                    </button>
                    {/* 4 btn and add onCLick */}
                    < button className="btn-4" value ="4"onClick={onClickBtn}>
                        4
                    </button>
                    {/* 5 btn and add onCLick */}
                    < button className="btn-5" name ="5"onClick={onClickBtn}>
                        5
                    </button>
                    {/* 6 btn and add onCLick */}
                    < button className="btn-6" name ="6"onClick={onClickBtn}>
                        6
                    </button>
                    {/* minus btn and add onCLick */}
                    < button className="btn-min orange" name ="-"onClick={onClickBtn} >
                        -
                    </button>
                    {/* 1 btn and add onCLick */}
                    < button className="btn-1" value ="1" name = "1"onClick={onClickBtn}>
                        1
                    </button>
                    {/* 2 btn and add onCLick */}
                    < button className="btn-2" value ="2" name = "2"onClick={onClickBtn}>
                        2
                    </button>
                    {/* 3 btn and add onCLick */}
                    < button className="btn-3" value ="3" name = "3"onClick={onClickBtn}>
                        3
                    </button>
                    {/* plus btn and add onCLick */}
                    < button className="btn-plus orange" name ="+" onClick={onClickBtn}>
                        +
                    </button>
                    {/* 0 btn and add onCLick */}
                    < button className="btn-0" value ="0" name = "0" onClick={onClickBtn}>
                        0
                    </button>
                    {/* point btn and add onCLick */}
                    < button className="btn-deci" name ="." onClick={onClickBtn}>
                        .
                    </button>
                    {/* equal btn and add onCLick */}
                    < button className="btn-equal orange" name ="=" onClick={onClickEqual}>
                        =
                    </button>
                </div>
            </div>
            
        )
    

}
// const style = {
    
// }
export default Buttons;
