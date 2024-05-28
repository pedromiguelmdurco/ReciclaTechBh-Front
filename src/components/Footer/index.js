import { Col, Row, Container } from "react-bootstrap";
import './footer.css';

function Footer(){
    return(
        <Row id='footer'>
            <Col><span>teste</span></Col>
            <Col id="footerimg"><img src={require('../../assets/teste-removebg-preview.png')} alt=""/></Col>
        </Row>
    );
}

export default Footer;