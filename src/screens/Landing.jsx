import React from 'react';
// import Button from 'react-bootstrap/Button';
//TODO: might not need this styling import
import "bootstrap/dist/css/bootstrap.min.css";
import LogRegModal from '../components/LogRegModal';
import {ReactComponent as EchoWhiteLogo} from '../assets/echo_logo_white.svg'
// import Logo from '../components/Logo';
// import { FaCloud } from "react-icons/fa";

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
                            <LogRegModal modalName={"Create an Account"} styling={"primary"} isLogin={false}/>
                            <LogRegModal modalName={"I already have an account."} styling={"secondary"} isLogin={true}/>
                        </div>
                    </div>

                </div>
            </>
        )

    }

}


export default Landing