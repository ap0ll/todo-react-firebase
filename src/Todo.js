import {List,ListItem, ListItemAvatar, ListItemText} from '@material-ui/core'
import React from 'react'
import { doc, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import './Todo.css'

const Todo= ({arr})=> {

    return (
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar/>
                <ListItemText 
                primary={arr.item.todo} 
                secondary={arr.item.todo} 
                />
            </ListItem>
            <DeleteForeverIcon fontSize='large'
                onClick={()=>{
                        const taskDocRef = doc(db, 'todos', arr.id)                        
                           deleteDoc(taskDocRef)     
                        }   
                
                }
            />

        </List>
    )
}
export default Todo