const mongoose = require('mongoose');
const Event = mongoose.model('event')

module.exports = (app) => {
    app.get('/api/event', async (req,res) => {
        const events = await Event.find({})
        if(events){
            console.log(events)
            res.json(events)
        }
        
    })

    app.post('/api/event', async (req, res) => {
        const title = req.body.title;
        console.log(title)
        const response = await new Event({title, active:true}).save()
        if (response) {
            res.send('event created')
        } else {
            res.send('not created')
        }
        
    })

    app.put('/api/event', async (req,res) => {
        const {_id, status} = req.body;
        if(status === 'resolve'){
            const resolveEvent = await Event.findByIdAndUpdate(_id, {active:'false'})
            res.send(resolveEvent)
        }
    })

    app.delete('/api/event', async (req,res) => {
        const id = req.body._id;
        const removeEvent = await Event.deleteOne({_id:id})
        res.send(removeEvent)
    })
}