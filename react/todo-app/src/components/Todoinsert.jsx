import React from "react";
import {MdAdd} from 'react-icon/md';
import './TodoInsert.scss'

const TodoInsert = () => {
    return (
        <form className="TodoInssert" >
        <input placeholder="할 일을 입력하세요"></input>
        <button type="submit"><MdAdd/></button>
        </form>
    );
};

export default TodoInsert;