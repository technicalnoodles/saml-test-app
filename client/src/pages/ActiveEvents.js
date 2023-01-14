import Event from '../components/Event'
import {useEffect, useState} from 'react'
import axios from 'axios'
// import { event } from '../../../models/Event'

const ActiveEvents = () => {

    const [eventList, setEventList] = useState(false)

    useEffect(() => {
        fetch('/api/event').then(response => {
            return  response.json()
        }).then(data => {
            setEventList(data.reverse())
        })
    }, [])

    const resolveEvent = async ( title, id) => {
        console.log(id)
        const res = await axios.delete('/api/event', { data: { '_id':id } });
        if(res.data.deletedCount >= 1){
            setEventList(eventList => eventList.filter(singleEvent => singleEvent._id !== id))
        }
        else {
            console.log(res.data)
        }
    }
    
    return (
        <div className='container flex flex-middle flex-column'>
            {eventList && eventList.map((singleEvent)=> {
                return(<Event title={singleEvent.title} key={singleEvent._id} id={singleEvent._id} resolveEvent={resolveEvent}/>)
            })}
        </div>
    )
}

export default ActiveEvents;