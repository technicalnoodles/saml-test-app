const ActiveEvents = () => {
    return (
        <div className='container flex flex-middle flex-column'>
            <div class="panel panel--bordered base-margin-bottom" style={{width:'40%'}}>
                <div className='flex flex-between flex-row flex-middle'>
                    <div>Ate free food</div>
                    <div>
                        <button class="btn btn--success">Resolve</button>
                        <button class="btn btn--danger">Remove</button>
                    </div>
                </div>
            </div>
            <div class="panel panel--bordered base-margin-bottom" style={{width:'40%'}}>
                <div className='flex flex-between flex-row flex-middle'>
                    <div>Got plenty of sleep</div>
                    <div>
                        <button class="btn btn--success">Resolve</button>
                        <button class="btn btn--danger">Remove</button>
                    </div>
                </div>
            </div>
            <div class="panel panel--bordered base-margin-bottom" style={{width:'40%'}}>
                <div className='flex flex-between flex-row flex-middle'>
                    <div>Go to Customer Appreciation Party</div>
                    <div>
                        <button class="btn btn--success">Resolve</button>
                        <button class="btn btn--danger">Remove</button>
                    </div>
                </div>
            </div>
            
        </div>
            
        
        
    )
}

export default ActiveEvents;