import {useState, useEffect} from 'react'
import './App.css';
import {Button,FormControl,Input,InputLabel} from '@material-ui/core'
import Todo from './Todo.js'
import {db} from './firebase'
import {collection,addDoc,Timestamp, query, orderBy, onSnapshot} from "firebase/firestore"



/*import { collection, onSnapshot } from "firebase/firestore"; */
/* {
      id: doc.id,
      data:doc.data()
    } */


function App() {
const [todos,setTodos] =useState([])
const [input,setInput]=useState('')
 
useEffect(() => {
  try {
  const q = query(collection(db, 'todos'))
  onSnapshot(q, (querySnapshot) => {
    setTodos(querySnapshot.docs.map((doc) => ({
      id: doc.id,
      item:doc.data()
    })))
  })} catch (e)  {

    setTodos(['fehler','fehler'])
  }
},[input])

/*try {
const querySnapshot =  getDocs(collection(db, "todos"));

setTodos(querySnapshot.docs.map(doc=>doc.data()))
} catch (e) {
  console.error("Error adding document: ", e);
}*/
 
const addTodo = async (e) => {
  e.preventDefault()
  try {
    await addDoc(collection(db, 'todos'), {
      todo:input,
      timestamp: Timestamp.now()
    })
    setInput('')
  } catch (err) {
    alert(err)
  }
}
/*
const addTodo =e => {
  e.preventDefault()
  db.collection('todos').add(
    {
      todo:input,
      timestamp:serverTimestamp()

    }
  )
  setInput('')
}
*/
  return (
    <div className="app">
      
      <h1>TODO React Firebase</h1>
      <form>
        <FormControl>
          <InputLabel> Write a TODO</InputLabel>
          <Input value={input} onChange={e=>setInput(e.target.value)}/>

        </FormControl>
        <button type="submit" onClick={addTodo} variant="contained"
        color="primary" disabled={!input}>Add Todo</button>
        
      </form>
      <ul>
        {todos.map(it=><Todo key={it.id} arr={it}/>)}
      </ul>

    </div>
  );
}

export default App;
