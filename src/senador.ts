import {Politico} from "./politico";

export default class Senador extends Politico{
    private nomeEstado:string;
    private anoEleito:number;

    constructor(
    nome:string,
    partido:string,
    nomeLocalTrabalho:string,
    enderecoLocalTrabalho:string,
    remuneracao:number,
    projetos:string[],
    nomeEstado:string,
    anoEleito:number
    ){
        super(nome,partido,"federal","legislativo",nomeLocalTrabalho,enderecoLocalTrabalho,remuneracao,projetos);
        this.nomeEstado = nomeEstado;
        this.anoEleito = anoEleito;
    }

    public exercerMandato(): void {
        console.log(`Mandato do Senador (${this.nomeEstado}): Sabatina e aprova ministros do STF, o Procurador-Geral da República e presidentes do Banco Central, legisla sobre leis federais e autoriza operações financeiras externas.`);
    }
    
    public aprovarAutoridades(): string {
        return "Aprovar autoridades de alto escalão.";
    }

    public julgarCrimesResponsabilidade(): string {
        return "Julgar crimes de responsabilidade.";
    }

    public representarInteressesEstado(): string {
        return "Representar os interesses do Estado.";
    }
}