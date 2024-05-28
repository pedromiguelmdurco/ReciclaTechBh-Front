import { Col, Row, Container } from "react-bootstrap";
import "./linha.css"

function Linha(){
    return(
        <Container id='linha'>
            <Row>
                <Col xl={true} id='desc'>
                    <h1>Titulo</h1> <br/>
                    <span>tsteteteda dsad sata sdad safasf asdasf as</span>
                </Col>
                <Col id='imagem' xl={true}><img src={require('../../assets/teste-removebg-preview.png')} alt=""/></Col>
            </Row>
        </Container>
    );
}

export default Linha;