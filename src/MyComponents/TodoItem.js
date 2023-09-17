import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div className='container py-3' style={{ backgroundColor:'white', }}>
           <h4>{todo.title}</h4>
           <p>{todo.desc}</p>
           <button className="btn btn-sm btn-danger my-4" onClick={()=>{onDelete(todo)}}>Remove</button> 
        </div>
        <hr/> 
        </>
    )
}
