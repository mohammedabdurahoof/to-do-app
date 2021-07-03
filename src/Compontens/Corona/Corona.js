import React from 'react'
import './Corona.css'
import { Badge, Accordion, Card, Row } from 'react-bootstrap'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function Corona() {
    const [world, setWorld] = useState({})
    const [india, setIndia] = useState({})
    const [kerala, setKerala] = useState({})
    useEffect(() => {
        axios.get('https://disease.sh/v3/covid-19/all').then((res) => {
            //console.log('world', res.data);
            setWorld(res.data)
        })
        axios.get('https://corona.lmao.ninja/v2/countries/india').then((res) => {
            //console.log(res.data);
            setIndia(res.data)
        })
        axios.get('https://keralastats.coronasafe.live/summary.json').then((res) => {
            //console.log(res.data);
            setKerala(res.data.summary)
        })
    }, [])
    return (
        <div className="corana">
            <h1>Covid-19 Status</h1>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Badge} variant="link" className="bedg" eventKey="0">
                            World
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Row>
                                <div className="box box1">
                                    <h5>Total</h5>
                                    <p>{world && Math.floor(world.cases / 10000000)+ ' C'}</p>
                                </div>
                                <div className="box box2">
                                    <h5>Active</h5>
                                    <p>{world && Math.floor(world.active / 10000000) + ' C'}</p>
                                </div>
                                <div className="box box3">
                                    <h5  >Recov</h5>
                                    <p>{world && Math.floor(world.recovered / 10000000) + ' C'}</p>

                                </div>
                                <div className="box box4">
                                    <h5>Deaths</h5>
                                    <p>{world && Math.floor(world.deaths / 100000)+ ' L'}</p>

                                </div>
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Badge} variant="link" className="bedg" eventKey="1">
                            India
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Row>
                                <div className="box box1">
                                    <h5>Total</h5>
                                    <p>{india && Math.floor(india.cases / 10000000)  + ' C'}</p>
                                </div>
                                <div className="box box2">
                                    <h5>Active</h5>
                                    <p>{india && Math.floor(india.active / 100000)  + ' L'}</p>
                                </div>
                                <div className="box box3">
                                    <h5>Recov</h5>
                                    <p>{india && Math.floor(india.recovered / 10000000) + ' C'}</p>
                                </div>
                                <div className="box box4">
                                    <h5>Deaths</h5>
                                    <p>{india && Math.floor(india.deaths / 100000)  + ' L'}</p>
                                </div>
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Badge} variant="link" className="bedg" eventKey="2">
                            Kerala
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <Row>
                                <div className="box box1">
                                    <h5>Total</h5>
                                    <p>{kerala && Math.floor(kerala.confirmed / 100000) + ' L'}</p>
                                </div>
                                <div className="box box2">
                                    <h5>Active</h5>
                                    <p>{kerala && Math.floor(kerala.active / 100000)+ ' L'}</p>
                                </div>
                                <div className="box box3">
                                    <h5>Recov</h5>
                                    <p>{kerala && Math.floor(kerala.recovered / 100000)+ ' L'}</p>
                                </div>
                                <div className="box box4">
                                    <h5>Deaths</h5>
                                    <p>{kerala && Math.floor(kerala.deceased / 1000)+ ' K'}</p>
                                </div>
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default Corona
