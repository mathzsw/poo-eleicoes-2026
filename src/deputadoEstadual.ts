import {Politico} from "./politico";

export default class DeputadoEstadual extends Politico{
    private nomeEstado:string;
    private listaComissoes:string[];

    constructor(
        nome:string,
        partido:string,
        nomeLocalTrabalho:string,
        enderecoLocalTrabalho:string,
        remuneracao:number,
        projetos:string[],
        nomeEstado:string,
        listaComissoes:string[]
    ){
        super(nome,partido,"estadual","legislativo",nomeLocalTrabalho,enderecoLocalTrabalho,remuneracao,projetos);

        if (listaComissoes.length === 0){
            throw new Error("O deputado estadual deve participar de ao menos uma comissão.");
        }

        this.nomeEstado = nomeEstado;
        this.listaComissoes = listaComissoes;
    }

    public exercerMandato(): void {
        console.log(`Mandato do Deputado Estadual (${this.nomeEstado}): Legisla sobre assuntos de interesse do estado e fiscaliza o governador.`);
    }

    public votarPPALDOALocalEstadual():string{
        return "Votar o PPA, a LOA e a LDO do Estado.";
    }

    public proporEmendasConstituicaoEstadual():string{
        return "Propor emendas à constituição estadual.";
    }

    public criarCPIEstadual():string{
        return "Criar CPI estadual.";
    }
}