import { useState } from "react";
import React from "react";

function Buttons (props){
    
        const {result,onClickBtn,onClickC,onClickEqual,onClickR,onClickPer}= props;
        return(
            <div className="main-container">
                
                <div className="buttons-div">
                    < button className="btn-C" onClick={onClickC}>
                        C
                    </button>
                    < button className="btn-reverse" onClick ={onClickR}>
                        +/-
                    </button>
                    < button className="btn-per" name ="%" onClick={onClickPer} >
                        %
                    </button>
                    < button className="btn-divide orange" name='/' onClick={onClickBtn}>
                        /
                    </button>
                    < button className="btn-7" name ="7" onClick={onClickBtn}>
                        7
                    </button>
                    < button className="btn-8" name ="8"onClick={onClickBtn}>
                        8
                    </button>
                    < button className="btn-9" name ="9"onClick={onClickBtn}>
                        9
                    </button>
                    < button className="btn-mul orange" name ="*" onClick={onClickBtn}>
                        *
                    </button>
                    < button className="btn-4" value ="4"onClick={onClickBtn}>
                        4
                    </button>
                    < button className="btn-5" name ="5"onClick={onClickBtn}>
                        5
                    </button>
                    < button className="btn-6" name ="6"onClick={onClickBtn}>
                        6
                    </button>
                    < button className="btn-min orange" name ="-"onClick={onClickBtn} >
                        -
                    </button>
                    < button className="btn-1" value ="1" name = "1"onClick={onClickBtn}>
                        1
                    </button>
                    < button className="btn-2" value ="2" name = "2"onClick={onClickBtn}>
                        2
                    </button>
                    < button className="btn-3" value ="3" name = "3"onClick={onClickBtn}>
                        3
                    </button>
                    < button className="btn-plus orange" name ="+" onClick={onClickBtn}>
                        +
                    </button>
                    < button className="btn-0" value ="0" name = "0" onClick={onClickBtn}>
                        0
                    </button>
                    < button className="btn-deci" name ="." onClick={onClickBtn}>
                        .
                    </button>
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