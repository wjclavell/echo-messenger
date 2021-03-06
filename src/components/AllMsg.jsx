import React from 'react'
import { getAllMsg } from '../services/index.js'

class AllMsg extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        // probably have these values equal to the current user's info instead of empty string
        username: '',
        password: '',
        avatar: '',
        error: null,
        isOpen: false,
        messages: []
      }
    }

    componentDidMount = () => {
        this.getMsgs()
    }

    getMsgs = async () => {
        const resp = await getAllMsg();
        this.setState({
            messages: resp.data
        })
    }


    render () {
        // console.log(this.state.messages.results)  
        // get unique combos of convo people
        const receivers = {}
        // const receivers = [
        //         const receiver_id = {
        //             name: "",
        //             avatar: "",
        //             messages: []
        //         }
        // ]
        this.state.messages.results && this.state.messages.results.reverse().forEach(convo =>{
            // console.log('this is unique convos for each loop', convo)
            if(!receivers[convo.receiver]){
                // create obj, and assign the key:value pairs
                receivers[convo.receiver] = {
                    name: convo.receiver_name, 
                    avatar: convo.receiver_avatar, 
                    messages: [convo.message]
                }
            }else{
                // let existingReceiver = receivers.indexOf(convo.receiver)
                receivers[convo.receiver].messages.push(convo.message)
            }

        })
        console.log('this is the unique receivers array: ', receivers)        


        // const allMsgs = receivers && receivers.reverse().map((msg, index) => {
        //     console.log('single message',msg)
        const allMsgs = Object.keys(receivers).length && Object.keys(receivers).map((obj) => {
            // console.log('full obj:', receivers)
            // console.log('specific values?:', receivers[key])
            // console.log('one value?:', receivers[key].name)
            // console.log('key:', key)
            return (
                <div className="message-cont" key={obj}>
                    <div className="av-cont">
                    <img alt="user avatar" src={receivers[obj].avatar} className="receiver-avatar"/>
                    </div>
                    <div className="excerpt">
                    <h3>
                        {receivers[obj].name}
                    </h3>
                    <p className="message-p">
                        {receivers[obj].messages[0].length > 40 ? receivers[obj].messages[0].substring(0,40) + '...' : receivers[obj].messages[0]}
                    </p>
                    </div>
                </div>
            )


        })

        // get messages and filter from most recent to least recent (use timestamps)
        // store most recent in a variable to display in the excerpt view of all messages

        return (
            <div className="all-messages-cont">
                <div>
                    <p>
                        {this.state.messages.length < 1 && (<span>You have no message history.</span>)}

                        {this.state.messages && allMsgs}
                    </p>
                </div>
            </div>
        )
    }


}

export default AllMsg