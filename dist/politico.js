"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Politico = void 0;
class Politico {
    nome;
    partido;
    esfera;
    poder;
    nomeLocalTrabalho;
    enderecoLocalTrabalho;
    remuneracao;
    projetos;
    constructor(nome, partido, esfera, poder, nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao, projetos) {
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.nomeLocalTrabalho = nomeLocalTrabalho;
        this.enderecoLocalTrabalho = enderecoLocalTrabalho;
        this.remuneracao = remuneracao;
        this.projetos = projetos;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getPartido() {
        return this.partido;
    }
    setPartido(partido) {
        this.partido = partido;
    }
    getRemuneracao() {
        return this.remuneracao;
    }
    setRemuneracao(remuneracao) {
        this.remuneracao = remuneracao;
    }
}
exports.Politico = Politico;
//# sourceMappingURL=politico.js.map