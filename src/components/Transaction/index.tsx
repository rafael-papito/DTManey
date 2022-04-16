import {useEffect} from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


export function Transaction(){
    useEffect(()=>{
        api.get('transactions')
        .then(response => console.log(response.data))
    }, []);
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="title">desenvolvimento de website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desevolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td className="title">aluguel</td>
                        <td className="withdrow">-R$1.100</td>
                        <td>Casa</td>
                        <td>17/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}