import { useState, useEffect } from "react";
import './descarte.css'
import { Col, Row, Container } from "react-bootstrap";
import Linha from "../../components/Linha";


function Descarte() {

    const [linha, setLinha] = useState([]);

    return (
       
        <Container id='descart'>
            <Row id='titulo'><h1>Quero Descartar</h1></Row>
            <Row><Linha /></Row>
            <Row><Linha /></Row>
            <Row><Linha /></Row>
            <Row><Linha /></Row>
        </Container>

    );
}


export default Descarte;