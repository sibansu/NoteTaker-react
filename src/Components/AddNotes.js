import { useState } from "react";

const AddNotes=({handleanote})=> {
    const [noteText, setNoteText] = useState("")

    const charLimit=200;

    const handleOnChange =(event)=>{
        if(charLimit-event.target.value.length>=0)
        setNoteText(event.target.value);
    }

    const handleOnSave=()=>{
        if(noteText.trim().length>0){
            handleanote(noteText);
            setNoteText('')
        }
        else{
            alert("You cannot save a blank note")
            setNoteText('')
        }
    }

    return (
        // the note new class means we are copying the same note class but with some changes
        <div className='note new'>
            <textarea placeholder='want to remember something?...' cols="10" rows="8" value={noteText} onChange={handleOnChange}>
            </textarea>
            <div className="footer">
                <small>{charLimit- noteText.length} remaining</small>
                <button className='save' onClick={handleOnSave}>Save</button>
            </div>
        </div>
    );
};

export default AddNotes;