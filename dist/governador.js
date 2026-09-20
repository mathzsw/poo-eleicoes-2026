"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const politico_1 = require("./politico");
class Governador extends politico_1.Politico {
    quantidadeSecretarios;
    nomeEstado;
    constructor(nome, partido, nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao, projetos, quantidadeSecretarios, nomeEstado) {
        super(nome, partido, "estadual", "executivo", nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao, projetos);
        this.quantidadeSecretarios = quantidadeSecretarios;
        this.nomeEstado = nomeEstado;
    }
    exercerMandato() {
        console.log('Mandato do Governador(${this.nomeEstado}):Sanciona e veta leis estaduais,decreta estado de calamidade e envia PEC à Assembleia Legislativa.');
    }
    gerirPoliciaMilitar() {
        return "Gerir a polícia militar.";
    }
    administrarRodoviasEstaduais() {
        return "Administrar rodovias estaduais.";
    }
    coordenarEducacaoSaudeEstado() {
        return "Coordenar a educaçao e saúde do estado.";
    }
    elaborarEnviarPPSLFOALocalEstadual() {
        return "Elaborar e enviar à Assembleia Legislativa o PPA,a LDO e a LOA estaduais.";
    }
}
exports.default = Governador;
//# sourceMappingURL=governador.js.map