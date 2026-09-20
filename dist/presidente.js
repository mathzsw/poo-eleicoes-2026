"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const politico_1 = require("./politico");
class Presidente extends politico_1.Politico {
    quantidadeMinistros;
    constructor(nome, partido, nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao, projetos, quantidadeMinistros) {
        super(nome, partido, "federal", "executido", nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao, projetos);
        this.quantidadeMinistros = quantidadeMinistros;
    }
    exercerMandato() {
        console.log("Mandato do Presidente : Propõe,sanciona e veta leis e edita medidas provisórias. ");
    }
    nomearExonerarMinistros() {
        return "Nomear e exonerar Ministros de Estado.";
    }
    comandarForcasArmadas() {
        return "Comandar as Forças Armadas.";
    }
    representarPaisEventosInternacionais() {
        return "Representar o país em eventos internacionais";
    }
    elaborarEnviarPPALDOALocalNacional() {
        return "Elaborar e enviar ao congresso o PPA,a LDO e a LOA nacionais.";
    }
}
exports.default = Presidente;
//# sourceMappingURL=presidente.js.map