export declare abstract class Politico {
    private nome;
    private partido;
    private esfera;
    private poder;
    private nomeLocalTrabalho;
    private enderecoLocalTrabalho;
    private remuneracao;
    projetos: string[];
    constructor(nome: string, partido: string, esfera: string, poder: string, nomeLocalTrabalho: string, enderecoLocalTrabalho: string, remuneracao: number, projetos: string[]);
    abstract exercerMandato(): void;
    getNome(): string;
    setNome(nome: string): void;
    getPartido(): string;
    setPartido(partido: string): void;
    getRemuneracao(): number;
    setRemuneracao(remuneracao: number): void;
}
//# sourceMappingURL=politico.d.ts.map