import { useState } from "react";
const formStyle = {
    margin:'auto',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: 'yellow',
    color:'black',
    width: '220px',
    display: 'block'
};
const Index =()=>{
    const [userInput,setUserInput] = useState("")
    const [todoList,settodoList] = useState([])
    const handleChange=(e)=>{
        e.preventDefault()

        setUserInput(e.target.value)
    
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        settodoList([
            userInput,
            ...todoList
        ])
        setUserInput('')

    }
    const handledelete=(todo)=>{
        const updateArr = todoList.filter(todoItem=>todoList.indexOf(todoItem)!=todoList.indexOf(todo))
        settodoList(updateArr)

    }
    return(
        <div style={{backgroundColor:'yellow',color:'black'}}>             
            <h1 style={{backgroundColor:'pink',color:'black'}}><center>WELCOME TO TODO LIST</center></h1>
            <h4 ><h1><u>Introduction:</u></h1> TODO List are the lists that we generally use to maintain our day to day tasks or list of everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules. We can add more tasks any time and delete a task which is completed. The four major tasks that we can perform in a TODO list are:</h4>
            <form >
                <h4>Add works/List</h4>
                <input type="text" placeholder="Enter a todo list" value={userInput} onChange={handleChange}/><br></br>
                <button onClick={handleSubmit}>Submit</button>
            </form>
            <ul>
                {
                    todoList.length>=1?todoList.map((todo,idx)=>{
                        return <li key={idx}>{todo} <button onClick={(e)=>{
                        e.preventDefault()
                        handledelete(todo)
                        }}>Delete</button></li>
                    })
                    :'Todo list is empty'
                }
            </ul>
            <p style={{backgroundColor:'pink',color:'black'}}>   @Copyright 2022 by BADISA NAVEEN. All Rights Reserved.</p>  
        </div>
    )
}


export default Index