import React, { Component } from 'react';
import Btncalc from "./btncalc";
class Calc extends Component 
{
    state = 
    { 
        val:'',
    };//!the defult value
 
    //!A function takes a string and checks if the string is a letter 'c' 
    //!And copies the value to zero
    StringValue = (str) =>
    {       
       if(str === 'C')
        this.setState({val:''});
       else    
        this.setState({val:this.state.val + str}); 
    } 

    avg = (strVal) =>
    {
       var i = 0;
       var first ='';
       var arrAll = [];
       //!A function gets an array that is basically all of the arithmetic 
       //!operations and starts putting it into an array including opratorin
       while(i < strVal.length)
       {
           if(strVal[i] != '+' && strVal[i] != '-' && strVal[i] != 'x' && strVal[i] != '/')
            first += strVal[i++];
            else
            {
                arrAll.push(first);
                first = '';
                arrAll.push(strVal[i++]);
            }
       }
       arrAll.push(first);
       i=0;
       var sum = 0;//!sum is the result
       console.log("string original" ,arrAll);
       //!We hung up on the first quick check and multiplication
       //! and division because they have a priority order
       while(i < arrAll.length)
       {
           while(arrAll[i] == 'x' || arrAll[i] == '/' )
           {
               if(arrAll[i] == 'x')
                {
                    sum = parseInt(arrAll[i-1]) * parseInt(arrAll[i+1]);
                    arrAll[i-1] = String(sum);
                    
                    arrAll.splice(i, 2);
                    console.log(arrAll);
                    i = 0;
                }
               else
                {
                    sum = parseInt(arrAll[i-1]) / parseInt(arrAll[i+1]);
                    arrAll[i-1] = String(sum);
                    arrAll.splice(i, 2);
                    i = 0;
                    console.log(arrAll);
                }
                i++;
           }
            i++;    
       }
       i=0;
       //!Then start making the addition and subtraction
       while(i < arrAll.length)
       {
           while(arrAll[i] == '+' || arrAll[i] == '-' )
           {
               if(arrAll[i] == '+')
                {
                    sum = parseInt(arrAll[i-1]) + parseInt(arrAll[i+1]);
                    arrAll[i-1] = String(sum);
                    
                    arrAll.splice(i, 2);//!The cutting is done on the account holder and another number
                    console.log(arrAll);
                    i = 0;
                }
               else
                {
                    sum = parseInt(arrAll[i-1]) - parseInt(arrAll[i+1]);
                    arrAll[i-1] = String(sum);
                    arrAll.splice(i, 2);
                    i = 0;
                    console.log(arrAll);
                }
                i++;
           }
            i++;    
       }
       this.setState({val: arrAll[0]});
    }
    render() 
    { 
        return ( 
        <React.Fragment>
            
            <div className="button">
                <Btncalc
                val={this.state.val}
                StringValue={this.StringValue}
                avg={this.avg}
                />
            </div>
        </React.Fragment>);
    }
}
export default Calc;