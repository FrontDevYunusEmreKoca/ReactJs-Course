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
        this.state = {
           items : ["item1","item2","item3"]
        }

    }
    clearItems() {
        console.log("asdsadsads")
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
             <TodoList  items = {this.state.items} clearItems={this.clearItems}/>
            <Action addItems = {this.addItems}/>
        </div>
        );
    };
    
};



class Header extends React.Component {
    render(){
        console.log(this.props)
        return (
           <div>
                 <h1>{this.props.title}</h1>
                 <div>{this.props.description}</div> 
           </div>
        );
    };
};

class TodoList extends React.Component {
    render(){
        return (
            <div>

           
                    <ul>
                    {
                    this.props.items.map((item,index) =>
                        <TodoItem key={index} item={item}/>)
                    }
                    </ul>
                    <p>
                    <button onClick= {this.props.clearItems}>Clear Items</button>
                    </p>


             </div>
           
        );
    };
};
class TodoItem extends React.Component {
    render(){
        return (
            <li >{this.props.item}</li>
        );
    };
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