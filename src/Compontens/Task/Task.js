import React, { useContext } from 'react'
import './Task.css'
import { Badge, Card, Accordion } from 'react-bootstrap';


function Task(props) {
    console.log(props.toDos);
    return (
        <div className="task">
            <h3>Pending</h3>
            <Accordion>
                {
                    props.toDos.map((item, index) => {
                        console.log(item);
                        return (
                            <Card key={index} >
                                <Card.Header>
                                    <div className="todos">
                                        <div className="left">
                                            {!item.status ? <input type="checkbox" name="" id="" className="align" /> : ''}
                                            <div className="text">
                                                {item.text}
                                            </div>
                                        </div>
                                        <div className="right">
                                            <Accordion.Toggle as={Badge} variant="link" eventKey={index + 1}>
                                                <i class="fas fa-chevron-down down"></i>
                                            </Accordion.Toggle>
                                            {!item.status ? <i className="fas fa-times align" ></i> : ''}
                                        </div>
                                    </div>
                                </Card.Header>
                                <Accordion.Collapse eventKey={index + 1}>
                                    <Card.Body>{item.description}</Card.Body>
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
