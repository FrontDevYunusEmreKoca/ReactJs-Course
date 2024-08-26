//class , function componennt
//state , lifecycle icin class a  gideriz

// 16.8 dunction component + hook => stataful function componennt


import React, { useState } from 'react'

// class StateHook extends React.Component{
//     constructor(props){
//         super(props)
//         this.CountPlus=this.CountPlus.bind(this)
//         this.state={
//             count:0,
//             text:""
//         }
//     }
//     CountPlus(){
//         this.setState({
//             count:this.state.count + 1 
//         })
//     }
//     render() {
//         return (
//             <div>
//               <p>{this.state.count} kez tikladiniz</p>
//               {/* <button onClick={() => this.setState({count:this.state.count +1})}>+</button> */}
//               <button onClick={this.CountPlus}>+</button>
//             </div>
//         )
//     }
// }

const StateHook =(props)=> {
    const [count,setCount] = useState(props.count) // string ya da number atayabilirsin
    const [text,setText] =  useState(props.text);
    return(
        <div>
            <p>Butona {count} kez tikladiniz</p>
            <p>Girilen Text : {text}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(props.count)}>Resetle</button>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
    )
}
StateHook.defaultProps = {
    count:6,
    text:"UseState Ogreniyorum"
  
}


// function StateHook(props) {
//     return (
//         <div>
//             Function Component
//         </div>
//     )
// }

export default StateHook;
