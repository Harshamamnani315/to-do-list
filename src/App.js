import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import { Todo } from './MyComponents/Todo';
import { AddTodo } from './MyComponents/AddTodo';
import React, { useState } from 'react';


function App() {
  const onDelete = (todo) => {
    console.log("I am ondelete of todo",todo);
   // let index = todos.indexOf(todo);
   // todos.splice(index, 1);
   setTodos(todos.filter((e)=>{
     return e!==todo;
   }));
  }

  const addTodo = (title,desc)=>{
   console.log("i am adding this todo",title,desc)
   let sno =todos[todos.length-1].sno +1;
   const myTodo = {
     sno: sno,
     title: title,
     desc: desc,
   }
   setTodos([...todos, myTodo]);
   console.log(myTodo);
  }

  const  [todos,setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "you need to go to the market to get this job"
    },
    {
        sno: 2,
        title: "Go to the temple",
        desc: "you need to go to the temple to get this job"
    },
    {
      sno: 3,
      title: "Go to the scholl",
      desc: "you need to go to the school to get this job"
    },
  ]);
  return (

    <>
      <Header title="My Todos List" searchBar={false}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>

    </>
  );
}

export default App;
