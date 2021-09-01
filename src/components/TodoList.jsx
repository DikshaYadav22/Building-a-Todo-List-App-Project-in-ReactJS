import React from 'react';
import {Button} from 'reactstrap';

const TodoList = ({items, id, onSelect}) => {
       
        return(
                <div>
                    <Button  color="danger" onClick={()=>{
                        onSelect(id);
                    }}>Delete</Button>
                    <li>{items}</li> 
                </div>
                )

}

export default TodoList;
