import { Politico } from "./politico";
export default class Governador extends Politico {
    private quantidadeSecretarios;
    private nomeEstado;
    constructor(nome: string, partido: string, nomeLocalTrabalho: string, enderecoLocalTrabalho: string, remuneracao: number, projetos: string[], quantidadeSecretarios: number, nomeEstado: string);
    exercerMandato(): void;
    gerirPoliciaMilitar(): string;
    administrarRodoviasEstaduais(): string;
    coordenarEducacaoSaudeEstado(): string;
    elaborarEnviarPPALDOALocalEstadual(): string;
}
//# sourceMappingURL=governador.d.ts.map