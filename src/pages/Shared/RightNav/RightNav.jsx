import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

import { Button, ListGroup } from 'react-bootstrap';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg1.png';
const RightNav = () => {
    return (
        <div>
            <h2 className='mt-4'>Login With</h2>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login With Google</Button>
            <Button variant="outline-primary"><FaGithub /> Login With Github</Button>
            <div>
                <h4 className='mt-4'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook />facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter />twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram />instagram</ListGroup.Item>
                    
                </ListGroup>

            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;