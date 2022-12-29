import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap"

import LoginButton from './loginButton';
import LogoutButton from './logoutButton';
import { useAuth0 } from '@auth0/auth0-react';
  
function LoginModal() {
    
    const {
        isAuthenticated
      } = useAuth0();
    
    // Modal open state
    const [modal, setModal] = React.useState(false);
  
    // Toggle for Modal
    const toggle = () => setModal(!modal);
  
    return (
        <div style={{
            display: 'block', width: 700, padding: 30
        }}>
            <h4>QuantaVerse Portal</h4>
            <Button color="gray-dark"
                onClick={toggle}>Sign Up | Log In</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader
                    toggle={toggle}>Did you verify your ID for the airdrop?</ModalHeader>
                <ModalBody>
                One lucky DAO member will also receive an additional 25 DA-FI equivalent to 250 million Roton. 
                </ModalBody>
                <ModalFooter>
                {!isAuthenticated && (
                    <LoginButton />
                )}
                {isAuthenticated && (
                    <LogoutButton />
                )}
                </ModalFooter>
            </Modal>
        </div >
    );
}
  
export default LoginModal;