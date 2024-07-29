import { Container, Spinner } from "react-bootstrap";

export const Loading = () => (
<Container 
    fluid
    className="d-flex justify-content-center align-items-center min-vh-100">
    <Spinner animation="border" role="status">
        <span className="visually-hidden">Carregando informações ...</span>
    </Spinner>
</Container>
)

export default Loading