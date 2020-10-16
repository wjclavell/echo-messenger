import React from 'react';
// import LogReg from '../components/LogReg';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";

import LogRegModal from '../components/LogRegModal';
// import Logo from '../components/Logo';


class Landing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const Logo = this.props.logo;

        return(
            <>
                {/* <Header /> */}
                <div className="landing-container">
                    <header>
                        <Logo height="2em"/>
                        <p class="brand-name">Echo</p>
                    </header>
                    
                    <div>                    
                        <h3>Connect with artists worldwide.</h3>
                    
                        <div className="landing-btn-cont">
                            <Button variant="primary">Create an Account</Button>{' '} 
                            <Button variant="secondary">I already have an account. </Button>{' '} 
                            <LogRegModal modalName={"Create an Account"} styling={"primary"} />
                            <LogRegModal modalName={"I already have an account."} styling={"secondary"} />
                            
                        </div>
                    </div>

                </div>
            </>
        )

    }

}


export default Landing