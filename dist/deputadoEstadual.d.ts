import { Politico } from "./politico";
export default class DeputadoEstadual extends Politico {
    private nomeEstado;
    private listaComissoes;
    constructor(nome: string, partido: string, nomeLocalTrabalho: string, enderecoLocalTrabalho: string, remuneracao: number, projetos: string[], nomeEstado: string, listaComissoes: string[]);
    exercerMandato(): void;
    votarPPALDOALocalEstadual(): string;
    proporEmendasConstitucaoEstadual(): string;
    criarCPIEstadual(): string;
}
//# sourceMappingURL=deputadoEstadual.d.ts.map