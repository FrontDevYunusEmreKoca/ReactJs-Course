//class , function componennt
//state , lifecycle icin class a  gideriz

// 16.8 dunction component + hook => stataful function componennt


import React, { useEffect, useState } from 'react'

// class StateHook extends React.Component{
//     constructor(props){
//         super(props)
//         this.CountPlus=this.CountPlus.bind(this)
//         this.state={
//             count:0,
//             text:""
//         }
//     }
//     componentDidMount (){
//         console.log("dsadasdsadadsa2")
//     }
//     componentDidUpdate (){
//         console.log("dsadasdsadadsa2asdadad")
//     }


//     CountPlus(){
//         this.setState({
//             count:this.state.count + 1 
//         })
//     }
//     render() {
//         return (
//             <div>
//               <p>Butona {this.state.count} kez tikladiniz</p>
//               {/* <button onClick={() => this.setState({count:this.state.count +1})}>+</button> */}
//               <button onClick={this.CountPlus}>+</button>
//             </div>
//         )
//     }
// }

const StateHook =(props)=> {
    const [count,setCount] = useState(props.count) // string ya da number atayabilirsin
    const [text,setText] =  useState(props.text);



     //count [count]
     useEffect(()=>{
        console.log("text")
    }, [text])

    //count [count]
    useEffect(()=>{
        console.log("count")
        localStorage.setItem("count", count)
    }, [count])

    //componentDidMount , [] 
    useEffect(()=>{
        console.log("componentDidMount")
        const CountData = localStorage.getItem("count");
        if(CountData){
            setCount(Number(CountData))
        }
    }, [])
   // componentDidMount ve componentDidUpdate ikisi bir arada 
    useEffect (() => {
        console.log("useEffect")
    })

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
