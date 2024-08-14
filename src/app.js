// const header = function (){
//     return <h1>hello React</h1>
// }
// const template = <header />


// ReactDOM.render(template,document.getElementById('root'))

class TodoApp extends React.Component{  // ana component bu diger header todolist ve action componentleri bunun icine eklenir
    constructor (props) {

        super(props);
        this.clearItems =this.clearItems.bind(this)
        this.addItems =this.addItems.bind(this)
        this.deleteItem=this.deleteItem.bind(this)
        this.state = {
           items : ["item1","item2","item3"]
        }

    }

    componentDidMount(){
        console.log("KOMPONENT OLUSTURULDU")
        const json = localStorage.getItem("items")
       const items =  JSON.parse(json);

       if (items){
        this.setState({
            items:items
        })
       }
    }
    componentDidUpdate(prevProps , prevState){
        if(prevState.items.length != this.state.items.length){
            const  json = JSON.stringify(this.state.items); //Json Stringe ceviri localStroge icin
            localStorage.setItem("items", json)
        }
        alert("KOMPONENT GÜNCELLENDİ");
    }
    componentWillUnmount(){
        alert("KOMPONENT SILINDI");
    }

    deleteItem(item){
        console.log(item)
        this.setState((prevState)=>{
          const arr =  prevState.items.filter((i) => {
                return item != i
            }) // silmek istemedigimiz elemanlari geriye dondurmus olduk
            return {
                items :arr
            }
        })
    }
    clearItems() {
       // console.log("asdsadsads")
      this.setState({
        items : []
      })
        
    }

    addItems (item){
        if(!item){
            return "eklemek istediginiz elemani girin";
        }
        else if(this.state.items.indexOf(item) > -1 ) // 0 ise ayni eleman var demektir
        {
            return "ayni elemani ekleyemezsiniz";
        }
       this.setState((prevState) => {
            return {items: prevState.items.concat(item)} 
      
       })
      
    }


    render() {
        
        const app = {
            title :"To Do APP",
            description: "lorem ipsum dolor",
           
        
        };


        return (
            <div>
            <Header title = {app.title} description = {app.description}/>
             <TodoList  items = {this.state.items} deleteItem={this.deleteItem} clearItems={this.clearItems}/>
            <Action addItems = {this.addItems}/>
        </div>
        );
    };
    
};

// function Header (props){ // aslinda class yerine ayni mantik olarak gecer ES5
//     return (
//         <div>
//               <h1>{props.title}</h1>
//               <div>{props.description}</div> 
//         </div>
//      );
// }


//react hook
const Header = (props) => {  //ES6 function components
    return (
                <div>
                      <h1>{props.title}</h1>
                      <div>{props.description}</div> 
                </div>
             );
};


const TodoList =(props) =>{
    return (
        <div>
                <ul>
                {
                    props.items.map((item,index) =>
                    <TodoItem deleteItem = {props.deleteItem} key={index} item={item}/>)
                }
                </ul>
                <p>
                <button onClick= {props.clearItems}>Clear Items</button>
                </p>
        </div>
    )
};

const TodoItem = (props) => { 
    return (
        <li >{props.item}  <button onClick = {()=>props.deleteItem(props.item)}> X </button></li>
        
    );
};

class Action extends React.Component {
    constructor(props){
        super(props)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.state = {
            error: ""

        }
    }
    onFormSubmit(e){
        e.preventDefault();
        const item = e.target.elements.txtItem.value.trim();
        const error = this.props.addItems(item);
        console.log(error)
        this.setState({
            error:error
        })
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit = {this.onFormSubmit}>
                <input type="text" name = "txtItem"/>
                <button type = "submit">Add Item</button>
                </form>
            </div>
        );
    };
};






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TodoApp />);