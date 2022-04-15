import { Summary } from "../Summary";
import { Transaction } from "../Transaction";
import { Container } from "./styles";


export function Deshboard(){
    return(
        <Container>
            <Summary/>
            <Transaction/>
        </Container>
    );
}