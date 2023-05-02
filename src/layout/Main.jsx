// import React from 'react';

import { Col, Container, Row } from "react-bootstrap";
import Header from "../pages/Shared/Header/Header";
import Navbar from "../pages/Shared/Navbar/Navbar";
import LefttNav from "../pages/Shared/LefttNav/LefttNav";
import RightNav from "../pages/Shared/RightNav/RightNav";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LefttNav></LefttNav>
                    </Col>
                    <Col lg={6}>
                        <h2>main content coming</h2>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Navbar></Navbar>
        </div>
    );
};

export default Main;