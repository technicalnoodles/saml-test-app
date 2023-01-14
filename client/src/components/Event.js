// import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from '../features/events/eventSlice'
const Event = ({title, id, resolveEvent}) => {
    
    console.log(id)
    return(
        <div className="panel panel--bordered base-margin-bottom" style={{width:'40%'}}>
                <div className='flex flex-between flex-row flex-middle'>
                    <div>{title}</div>
                    <div>
                        <button className="btn btn--success" onClick={() => resolveEvent(title, id)}>Resolve</button>
                        <button className="btn btn--danger" onClick={() => resolveEvent(title, id)}>Remove</button>
                    </div>
                </div>
            </div>
    )
}

export default Event;