"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const politico_1 = require("./politico");
class DeputadoEstadual extends politico_1.Politico {
    nomeEstado;
    listaComissoes;
    constructor(nome, partido, nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao, projetos, nomeEstado, listaComissoes) {
        super(nome, partido, "estadual", "legislativo", nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao, projetos);
        if (listaComissoes.length === 0) {
            throw new Error("O deputado estadual deve participar de ao menos uma comissão.");
        }
        this.nomeEstado = nomeEstado;
        this.listaComissoes = listaComissoes;
    }
    exercerMandato() {
        console.log(`Mandato do Deputado Estadual (${this.nomeEstado}): Legisla sobre assuntos de interesse do estado e fiscaliza o governador.`);
    }
    votarPPALDOALocalEstadual() {
        return "Votar o PPA, a LOA e a LDO do Estado.";
    }
    proporEmendasConstituicaoEstadual() {
        return "Propor emendas à constituição estadual.";
    }
    criarCPIEstadual() {
        return "Criar CPI estadual.";
    }
}
exports.default = DeputadoEstadual;
//# sourceMappingURL=deputadoEstadual.js.map