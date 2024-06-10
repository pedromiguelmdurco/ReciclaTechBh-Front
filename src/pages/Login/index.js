
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";



function Login() {


    return (
        <Container>
            <Row><h2>Login</h2></Row>
            <Row id='botao'> Email:
                <input type="email" name="email" /><br />
                Senha:
                <input type="password" name="senha" /> <br />
                <Col xs={6}> <Link to="/descarte">Logar</Link></Col>
                <Col xs={6}><Link to='*'>Cadastrar</Link></Col>
               
            </Row>
        </Container>


    );
}


export default Login;