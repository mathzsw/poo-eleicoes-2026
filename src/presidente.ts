import {Politico} from "./politico";

export default class Presidente extends Politico{
    private quantidadeMinistros: number;

        constructor(
            nome:string,
            partido:string,
            nomeLocalTrabalho:string,
            enderecoLocalTrabalho:string,
            remuneracao:number,
            projetos:string[],
            quantidadeMinistros:number
        ){
        super(nome,partido,"federal","executivo",nomeLocalTrabalho,enderecoLocalTrabalho,remuneracao,projetos);
        this.quantidadeMinistros = quantidadeMinistros;
}
 
public exercerMandato():void{
    console.log("Mandato do Presidente : Propõe,sanciona e veta leis e edita medidas provisórias. ");
}
public nomearExonerarMinistros():string{
    return "Nomear e exonerar Ministros de Estado.";
}
public comandarForcasArmadas():string{
    return "Comandar as Forças Armadas." ;
}
public representarPaisEventosInternacionais():string{
    return "Representar o país em eventos internacionais";
}
public elaborarEnviarPPALDOALocalNacional():string{
    return "Elaborar e enviar ao congresso o PPA,a LDO e a LOA nacionais.";
}
}