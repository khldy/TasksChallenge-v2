import React from 'react';
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ToDo = ({ text, completed, updateMode, deleteToDo, completeToDo }) => {
    return (
        <div className={`todo ${completed ? 'completed' : ''}`}>
            <div className="text" onClick={completeToDo} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                {text}
            </div>
            <div className="icons">
                <BiEdit className='icon' onClick={updateMode} />
                <AiFillDelete className='icon' onClick={deleteToDo} />
            </div>
        </div>
    );
}

export default ToDo;
