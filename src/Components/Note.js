import React from 'react'
// import {MdDeleteForever} from 'react-icons/md'

function Note({text,id,date, handleDeleteNotes}) {
    return (
        <div className="note">
            <span>{text}</span>
            <div className="footer">
                <small>{date}</small>
                <i className="fa fa-trash" onClick={()=> handleDeleteNotes(id)}></i>
            </div>
        </div>
    )
}

export default Note