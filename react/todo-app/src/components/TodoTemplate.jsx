import React from "react";
import './TodoTemplate.scss'

const TodoTemplate = ({children}) => {
    return (
        <div className="Todo">
         <div className="app=title">일정관리</div>
         <div className="content"></div>
        </div>
    )
}

export default TodoTemplate;
