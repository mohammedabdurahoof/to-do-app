import React, { useContext } from 'react'
import './Task.css'
import { Badge, Card, Accordion } from 'react-bootstrap';
import { DoneContext } from '../../Context/DoneContext';
import { DeletedContext } from '../../Context/DeletedContext';


function Task(props) {
    const { doneTodos, setDoneTodos } = useContext(DoneContext)
    const { deletedTodos, setDeletedTodos } = useContext(DeletedContext)
    return (
        <div className="task">
            <h3>{props.title}</h3>
            <Accordion>
                {
                    props.toDos.map((item, index) => {
                        return (
                            <Card key={index} >
                                <Card.Header style={{ height: "45px" }}>
                                    <div className="todos">
                                        <div className="left">
                                            {!item.status ? <input type="checkbox" checked={false} name="" id="" className="align" onClick={
                                                (e) => {
                                                    item.status = e.target.checked
                                                    setDoneTodos([...doneTodos, props.toDos[index]])
                                                    let done = props.toDos.splice(index, 1)
                                                    console.log(done);
                                                    //console.log(props.toDos);
                                                    console.log(doneTodos);
                                                }
                                            } /> : ''}
                                            <div className="text">
                                                {item.text}
                                            </div>
                                        </div>
                                        <div className="right">
                                            <Accordion.Toggle as={Badge} variant="link" eventKey={index + 1}>
                                                <i className="fas fa-chevron-down down"></i>
                                            </Accordion.Toggle>
                                            {!item.status ? <i className="fas fa-times align" onClick={(e) => {
                                                item.status = true
                                                setDeletedTodos([...deletedTodos, props.toDos[index]])
                                                let done = props.toDos.splice(index, 1)
                                                console.log(done);
                                                //console.log(props.toDos);
                                                console.log(deletedTodos);
                                            }} ></i> : ''}
                                        </div>
                                    </div>
                                </Card.Header>
                                <Accordion.Collapse eventKey={index + 1}>
                                    <Card.Body>
                                        <div className="time-desplay float-right">
                                        deadline: {item.time}
                                        </div><br />
                                        <div className="date-desplay">
                                            {item.date}
                                        </div><br />
                                        <hr/>
                                        <div className="description-desplay">
                                            {item.description}
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        )
                    })
                }
            </Accordion>
        </div>
    )
}

export default Task
