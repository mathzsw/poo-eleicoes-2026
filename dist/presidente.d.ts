import { Politico } from "./politico";
export default class Presidente extends Politico {
    private quantidadeMinistros;
    constructor(nome: string, partido: string, nomeLocalTrabalho: string, enderecoLocalTrabalho: string, remuneracao: number, projetos: string[], quantidadeMinistros: number);
    exercerMandato(): void;
    nomearExonerarMinistros(): string;
    comandarForcasArmadas(): string;
    representarPaisEventosInternacionais(): string;
    elaborarEnviarPPALDOALocalNacional(): string;
}
//# sourceMappingURL=presidente.d.ts.map