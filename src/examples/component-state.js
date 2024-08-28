class Car extends React.Component {

    constructor (props){
        super(props);

        this.changeColor = this.changeColor.bind(this)

        this.state = {
            brand: "Opel",
            model: "Astra",
            color: "black",
            year : 2020

        }
    }
    changeColor () {
           this.setState({
            color:"blue",
            model: "Corsa"
             // setState derken aslinda render cagirmadan degisiklikleri yapmis oluyoruz.
           })
    }
    render() {      
        return (
            <div>
                <h1>{this.state.brand} - {this.state.model}</h1>
                <p>selected color: <b>{this.state.color}</b></p>
                <button onClick = {this.changeColor}>Change Color</button>
            </div>
        ) 
       
    };

}
ReactDOM.render(<Car />, document.getElementById("root"))