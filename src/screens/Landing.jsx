import React from 'react';
// import Button from 'react-bootstrap/Button';
//TODO: might not need this styling import
import "bootstrap/dist/css/bootstrap.min.css";
import LogRegModal from '../components/LogRegModal';
import {ReactComponent as EchoWhiteLogo} from '../assets/echo_logo_white.svg'
// import Logo from '../components/Logo';
// import { FaCloud } from "react-icons/fa";

//TODO: after login is confirmed and modal is closed, move to conversation page

class Landing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    test = () =>{
        console.log('testing')
    }

    render() {

        return(
            <>
                <div className="landing-container">
                        <EchoWhiteLogo style={{transform:'scale(.5)'}}/>
                    
                    <div>                    
                        <h3>Connect with artists worldwide.</h3>
                    
                        <div className="landing-btn-cont">
                            {/* <Button variant='secondary' >Save Changes</Button> */}
                            {/* <Button variant="primary">Create an Account</Button>{' '} 
                            <Button variant="secondary">I already have an account. </Button>{' '}  */}
                            <LogRegModal modalName={"Create an account"} styling={"primary"} isLogin={false}/>
                            <LogRegModal modalName={"I already have an account"} styling={"secondary"} isLogin={true}/>
                            
                        </div>
                    </div>

                </div>
            </>
        )

    }

}


export default Landing