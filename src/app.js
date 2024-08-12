// const header = function (){
//     return <h1>hello React</h1>
// }
// const template = <header />

// ReactDOM.render(template,document.getElementById('root'))

class TodoApp extends React.Component{  // ana component bu diger header todolist ve action componentleri bunun icine eklenir
    render() {
        const app = {
            title :"To Do APP",
            description: "lorem ipsum dolor",
            items : 
            [
             "item1",
             "item2",
             "item3"
            ]
        
        };


        return (
            <div>
            <Header title = {app.title} description = {app.description}/>
             <TodoList  items = {app.items}/>
            <Action />
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
            <ul>
               {
               this.props.items.map((item,index) =>
                 <TodoItem index={index} item={item}/>)
               }
            </ul>
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
    render(){
        return (
            <div>
                <p>
                <button >Clear Items</button>
                </p>
               
                <form>
                <input type="text" name = "txtItem"/>
                <button type = "submit">Add Item</button>
                </form>
            </div>
        );
    };
};





ReactDOM.render(<TodoApp />,document.getElementById("root"))