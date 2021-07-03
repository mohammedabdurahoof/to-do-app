import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Quotes.css'

function Quotes() {
    return (
        <div className='quotes-app'>
            <Carousel>
                <Carousel.Item>
                    <h6><b>“He who every morning plans the transactions of that day and follows that plan carries a thread that will guide him through the labyrinth of the most busy life.”</b></h6>
                    <h4>-Victor Hugo</h4>
                </Carousel.Item>
                <Carousel.Item>
                    <h6><b>“Don’t be fooled by the calendar. There are only as many days in the year as you make use of. One man gets only a week’s value out of a year while another man gets a full year’s value out of a week.”</b></h6>
                    <h4>-Charles Richards</h4>
                </Carousel.Item>
                <Carousel.Item>
                    <h6><b>“Don’t make the same decision twice. Spend time and thought to make a solid decision the first time so that you don’t revisit the issue unnecessarily.”</b></h6>
                    <h4>-Bill Gates</h4>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Quotes
