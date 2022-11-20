import { Container } from "./styles";
import PolygonFooter from "../../assets/PolygonFooter.svg"


export function Footer() {
    return(
        <Container>
            <div>
                <img src={PolygonFooter} alt="" />
                <h1>food explorer</h1>
            </div>

            <span>© 2022 - Todos os direitos reservados.</span>
        </Container>
    );
}