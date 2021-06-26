import React, { useContext, useState } from 'react'
import './Add.css';
import { PendingContext } from '../../Context/PendingContext';


function Add() {
    const [toDos, setTodos] = useState([])
    const { pendingTodos, setPendingTodos } = useContext(PendingContext)

    return (
        <div>
            <div className="add">
                <form action="" id="form">
                    <div className="input-text">
                        <input id="title" type="text" placeholder="Add item..." />
                        {/* <i onClick={() => setTodos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i> */}
                    </div>
                    <div className="schedule">
                        <div className="date">
                            <input type="date" name="" id="date1" />
                        </div>
                        <div className="time">
                            <input type="time" name="" id="time1" />
                        </div>
                    </div>
                    <div className="input-description">
                        <textarea name="" id="description" cols="30" rows="10" placeholder="Add description..." ></textarea>
                    </div>
                    <div className="submit-button">
                        <button className="btn btn-success" onClick={(e) => {
                            e.preventDefault()
                            setPendingTodos([...pendingTodos, {
                                id: Date.now(),
                                text: document.getElementById('title').value,
                                date: document.getElementById('date1').value,
                                time: document.getElementById('time1').value,
                                description: document.getElementById('description').value,
                                status: false
                            }])
                            let form = document.getElementById('form')
                            form.reset()
                        }
                        } > Add </button>
                    </div>
                </form>
            </div>
            <div className="todos">
                {toDos.map((value) => {
                    return (
                        <div className="todo">
                            <div className="left">
                                <input onChange={(e) => {
                                    console.log(e.target.checked)
                                    console.log(value);
                                    setTodos(toDos.filter(obj2 => {
                                        if (obj2.id === value.id) {
                                            obj2.status = e.target.checked
                                        }
                                        return obj2
                                    }))
                                }} value={value.status} type="checkbox" name="" id="" />
                                <p>{value.text} </p>
                            </div>
                            <div className="right">
                                <i className="fas fa-times"></i>
                            </div>
                        </div>
                    )
                })
                }
                {toDos.map((obj) => {
                    if (obj.status) {
                        return (<h1>{obj.text}</h1>)
                    }
                    return null
                })}
            </div>
        </div>
    )
}

export default Add
