import {Politico} from "./politico";

export default class Governador extends Politico{
    private quantidadeSecretarios: number;
    private nomeEstado: string;

    constructor(
        nome:string,
        partido:string,
        nomeLocalTrabalho:string,
        enderecoLocalTrabalho:string,
        remuneracao:number,
        projetos:string[],
        quantidadeSecretarios:number,
        nomeEstado:string
    ){
      super(nome,partido,"estadual","executivo",nomeLocalTrabalho,enderecoLocalTrabalho,remuneracao,projetos);
      this.quantidadeSecretarios = quantidadeSecretarios;
      this.nomeEstado = nomeEstado; 
    }

    public exercerMandato():void{
        console.log(`Mandato do Governador (${this.nomeEstado}): Sanciona e veta leis estaduais, decreta estado de calamidade e envia PEC à Assembleia Legislativa.`)    }
    public gerirPoliciaMilitar():string{
        return "Gerir a polícia militar.";
    }
    public administrarRodoviasEstaduais():string{
        return "Administrar rodovias estaduais.";
    }
    public coordenarEducacaoSaudeEstado():string{
        return "Coordenar a educaçao e saúde do estado.";
    }
    public elaborarEnviarPPALDOALocalEstadual():string{
        return "Elaborar e enviar à Assembleia Legislativa o PPA, a LDO e a LOA estaduais.";
    }
}