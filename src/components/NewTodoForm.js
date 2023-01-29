import React, { useState } from "react"




const NewTodoForm = (props) => {

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    // const descriptionChange = (event) =>{
    //     console.log('description',event.target.value);
    //    setDescription(event.target.value)
    // }

    // const assignedChange =(event)=>{
    //     console.log(event.target.value)
    //     setAssigned(event.tagret.value)
    // }

    const submitTodo = () => {
        if (description !== '' && assigned !== '') {
            props.addTodo(description, assigned);
            setDescription("");
            setAssigned("")

        }
    }
    return (
        <>
            <div className='mt-5'>
                <form>
                    <div className='mb-3'>
                        <label className='form-label'>Assigned</label>
                        <input type='text' className='form-control' onChange={e => setAssigned(e.target.value)} value={assigned} required></input>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Description</label>
                        <textarea className='form-control' rows={3} onChange={e => setDescription(e.target.value)} value={description} required></textarea>
                    </div>
                    <button type='button' className='btn btn-primary mt-3' onClick={submitTodo}>Add ToDo</button>
                </form>
            </div>
        </>
    )
}

export default NewTodoForm