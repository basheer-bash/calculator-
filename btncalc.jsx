import React, { Component } from 'react'

class btncalc extends Component {
    
    render() {
        const {val , StringValue , avg} = this.props;
        return (
            <div>
                <input onChange={avg}  value = {val}/>
                <button  onClick={()=>StringValue('C')} className="btn btn-primary waves-light m-1">C</button><br/>

                <button onClick={()=>StringValue('1')} className="btn btn-primary waves-light m-1">1</button>
                <button onClick={()=>StringValue('2')} className="btn btn-primary waves-light m-1">2</button>
                <button onClick={()=>StringValue('3')} className="btn btn-primary waves-light m-1">3</button>
                <button onClick={()=>StringValue('+')} className="btn btn-primary waves-light m-1">+</button><br/>
                <button onClick={()=>StringValue('4')} className="btn btn-primary waves-light m-1">4</button>
                <button onClick={()=>StringValue('5')} className="btn btn-primary waves-light m-1">5</button>
                <button onClick={()=>StringValue('6')} className="btn btn-primary waves-light m-1">6</button>
                <button onClick={()=>StringValue("-")} className="btn btn-primary waves-light m-1">-</button><br/>

                <button onClick={()=>StringValue('7')} className="btn btn-primary waves-light m-1">7</button>
                <button onClick={()=>StringValue('8')} className="btn btn-primary waves-light m-1">8</button>
                <button onClick={()=>StringValue('9')} className="btn btn-primary waves-light m-1">9</button>
                <button onClick={()=>StringValue('x')} className="btn btn-primary waves-light m-1">x</button><br/>

                <button onClick={()=>StringValue('.')} className="btn btn-primary waves-light m-1">.</button>
                <button onClick={()=>StringValue('0')} className="btn btn-primary waves-light m-1">0</button>
                <button onClick={()=>avg(val)} className="btn btn-primary waves-light m-1">=</button>
                <button onClick={()=>StringValue("/")} className="btn btn-primary waves-light m-1">/</button><br/>

            </div>
        )
    }
}
export default btncalc;
