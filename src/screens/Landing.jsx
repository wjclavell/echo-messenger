import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaCloud } from "react-icons/fa";

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
                    <header className="logo-brand-cont">
                        <FaCloud className="logo"/>
                        <p className="brand-name">Echo</p>
                    </header>
                    
                    <div>                    
                        <h3>Connect with artists worldwide.</h3>
                    
                        <div className="landing-btn-cont">
                            {/* <Button variant='secondary' >Save Changes</Button> */}
                            <Button variant="primary">Create an Account</Button>{' '} 
                            <Button variant="secondary">I already have an account.</Button> 
                        </div>
                    </div>

                </div>
            </>
        )

    }



}

export default Landing