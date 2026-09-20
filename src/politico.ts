export abstract class Politico{
    private nome: string;
    private partido: string;
    private esfera: string;
    private poder: string;
    private nomeLocalTrabalho: string;
    private enderecoLocalTrabalho: string;
    private remuneracao:number; 
    projetos: string[];
    

    constructor(
        nome: string,
        partido: string,
        esfera: string,
        poder: string,
        nomeLocalTrabalho: string,
        enderecoLocalTrabalho: string,
        remuneracao:number,
        projetos:string[]
    ){
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.nomeLocalTrabalho = nomeLocalTrabalho;
        this.enderecoLocalTrabalho = enderecoLocalTrabalho;
        this.remuneracao = remuneracao;
        this.projetos = projetos;
    }

    public abstract exercerMandato() : void;

    public getNome():string{
        return this.nome;
    }

    public setNome(nome:string):void{
        this.nome = nome
    }

    public getPartido():string{
        return this.partido;
    }
    public setPartido(partido:string):void{
        this.partido = partido;
    }
    public getRemuneracao():number{
        return this.remuneracao;
    }
    public setRemuneracao(remuneracao:number):void{
        this.remuneracao = remuneracao;
    }
}

