import React, {useState} from 'react';
import { Form, FormGroup,Input, Card, CardBody } from 'reactstrap';
import TodoList  from './components/TodoList';


const App = () => {
  const [todo, setTodos] = useState("");
  const [items, setItems] = useState([]);
 
  const onSubmit = (e) => {
    e.preventDefault();
    setItems((oldItems) => {
        return [...oldItems, todo]
    });

    setTodos("");
      
  }

  const inputHandler = (e) => {
      setTodos(e.target.value);
  }

  const deleteTodo =((id) => {
      setItems((oldItems)=>{
        return oldItems.filter((item, index)=>{
          return index !== id;
    });
});
  });
  
  return (  
    <div>
      <div className="container mx-auto mainLayout m-5">
          <div className="title">
              <h2>Todo List</h2>
          </div>      
          <div className="inputDesign">
            <Form>
                <FormGroup>
                  <Input type="text" name="name" 
                    value={todo}
                    onChange={(e)=>inputHandler(e)}
                    placeholder="Add a Items" />
                  
                  <button className="iconDesign" onClick={(e)=>onSubmit(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </button>
                </FormGroup>
                
            </Form>
          </div>

      
      </div>
      <div className="cardDesign mx-auto">
        <Card >
            <CardBody>
                <ul className="list-style-type-none">
                {items.map((item, index)=>{
                    return <TodoList items = {item}
                      key={index}
                      id={index}
                      onSelect= {deleteTodo} />;

              })}
                   
                </ul>
                  
              </CardBody>
        </Card>
      </div>
    </div>
  )
}


export default App;
