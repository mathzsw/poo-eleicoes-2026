import {Politico} from "./politico";

export default class DeputadoFederal extends Politico{
    private bancada: string;

    constructor(
        nome:string,
        partido:string,
        nomeLocalTrabalho:string,
        enderecoLocalTrabalho:string,
        remuneracao:number,
        projetos:string[],
        bancada:string
    ){
        super(nome, partido, "federal", "legislativo", nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao, projetos);
        this.bancada = bancada;
    }

    public exercerMandato(): void {
        console.log(`Mandato do Deputado Federal (${this.bancada}): Legisla sobre o Código Penal, o Código Tributário e as leis trabalhistas e fiscaliza o presidente.`);
    }

    public votarPECs(): string {
        return "Votar Propostas de Emenda à Constituição (PECs).";
    }

    public criarCPINacional(): string{
        return "Criar Comissão Parlamentar de Inquérito (CPI) de âmbito nacional.";
    }

    public votarPPALDOALONacionais(): string{
        return "Votar o PPA, a LOA e a LDO nacionais.";
    }

    public proporLeisComplementares(): string{
        return "Propor leis complementares.";
    }
}