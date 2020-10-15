import React from 'react';
// import LogReg from '../components/LogReg';
import Button from 'react-bootstrap/Button';
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
                            <Button variant="secondary">I already have an account.</Button>{' '} 
                        </div>
                    </div>

                </div>
            </>
        )

    }



}

export default Landing