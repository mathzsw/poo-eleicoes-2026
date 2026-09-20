import {Politico} from "./politico";
import Presidente from "./presidente";
import Governador from "./governador";
import DeputadoEstadual from "./deputadoEstadual";
import DeputadoFederal from "./deputadoFederal";
import Senador from "./senador";


const presidente = new Presidente(
    "Luiz Inácio Lula da Silva",
    "PT",
    "Palácio do Planalto",
    "Praça dos Três Poderes - Brasília/DF",
    46366.19,
    [
        "Novo PAC",
        "Bolsa Família",
        "Minha Casa, Minha Vida"
    ],
    39
);

const governadorPE = new Governador(
    "Raquel Teixeira Lyra Lucena",
    "PSD",
    "Palácio do Campo das Princesas",
    "Praça da República, s/n - Santo Antônio, Recife/PE",
    22000,
    [
        "Juntos pela Segurança",
        "Morar Bem PE",
        "Cuida PE"
    ],
    22,
    "Pernambuco"
);

const governadorSP = new Governador(
    "Tarcísio Gomes de Freitas",
    "Republicanos",
    "Palácio dos Bandeirantes",
    "Av. Morumbi, 4.500 - Morumbi, São Paulo/SP",
    36301.53,
    [
        "Trem Intercidades",
        "Provão Paulista",
        "Desestatização da Sabesp"
    ],
    24,
    "São Paulo"
);

const deputadoFederalPE1 = new DeputadoFederal(
    "André Ferreira",
    "PL",
    "Câmara dos Deputados",
    "Anexo IV, Esplanada dos Ministérios, Brasília/DF",
    46366.19,
    [
        "PL 1039/2023",
        "PL 1342/2023"
    ],
    "Bancada do PL"
);

const deputadoFederalPE2 = new DeputadoFederal(
    "Clarissa Tércio Santos Corrêa de Oliveira",
    "PP",
    "Câmara dos Deputados",
    "Anexo IV, Esplanada dos Ministérios, Brasília/DF",
    46366.19,
    [
        "PL 831/2023",
        "PL 1540/2023"
    ],
    "Bancada do PP"
);

const deputadoFederalPE3 = new DeputadoFederal(
    "Pedro Henrique Campos Arraes de Alencar",
    "PSB",
    "Câmara dos Deputados",
    "Anexo IV, Esplanada dos Ministérios, Brasília/DF",
    46366.19,
    [
        "PL 12/2023",
        "PL 1085/2023"
    ],
    "Bancada do PSB"
);

const deputadoFederalSP1 = new DeputadoFederal(
    "Guilherme Castro Boulos",
    "PSOL",
    "Câmara dos Deputados",
    "Anexo IV, Esplanada dos Ministérios, Brasília/DF",
    46366.19,
    [
        "PL 2720/2023",
        "PL 3110/2023"
    ],
    "Federação PSOL-REDE"
);

const deputadoFederalSP2 = new DeputadoFederal(
    "Carla Zambelli Salgado de Oliveira",
    "PL",
    "Câmara dos Deputados",
    "Anexo IV, Esplanada dos Ministérios, Brasília/DF",
    46366.19,
    [
        "PL 1102/2023",
        "PL 2045/2023"
    ],
    "Bancada do PL"
);

const deputadoEstadualPE1 = new DeputadoEstadual(
    "Manoel Ferreira da Silva Júnior",
    "PP",
    "Assembleia Legislativa de Pernambuco",
    "Rua da União, 397 - Boa Vista, Recife/PE",
    34774.64,
    [
        "Projetos de interesse do estado"
    ],
    "Pernambuco",
    [
        "Comissão de Constituição, Legislação e Justiça"
    ]
);

const deputadoEstadualPE2 = new DeputadoEstadual(
    "Alberto Feitosa Alves",
    "PL",
    "Assembleia Legislativa de Pernambuco",
    "Rua da União, 397 - Boa Vista, Recife/PE",
    34774.64,
    [
        "Projetos relacionados à segurança pública"
    ],
    "Pernambuco",
    [
        "Comissão de Segurança Pública e Defesa Social"
    ]
);

const deputadoEstadualPE3 = new DeputadoEstadual(
    "Gleide Ângelo Eufrásio",
    "PSB",
    "Assembleia Legislativa de Pernambuco",
    "Rua da União, 397 - Boa Vista, Recife/PE",
    34774.64,
    [
        "Projetos relacionados aos direitos das mulheres"
    ],
    "Pernambuco",
    [
        "Comissão de Defesa dos Direitos da Mulher"
    ]
);

const deputadoEstadualSP1 = new DeputadoEstadual(
    "Eduardo Matarazzo Suplicy",
    "PT",
    "Assembleia Legislativa de São Paulo",
    "Av. Pedro Álvares Cabral, 201 - Ibirapuera, São Paulo/SP",
    34774.64,
    [
        "Projetos relacionados aos direitos humanos"
    ],
    "São Paulo",
    [
        "Comissão de Defesa dos Direitos da Pessoa Humana"
    ]
);

const deputadoEstadualSP2 = new DeputadoEstadual(
    "Carlos Alberto Giannazi",
    "PSOL",
    "Assembleia Legislativa de São Paulo",
    "Av. Pedro Álvares Cabral, 201 - Ibirapuera, São Paulo/SP",
    34774.64,
    [
        "Projetos relacionados à educação"
    ],
    "São Paulo",
    [
        "Comissão de Educação e Cultura"
    ]
);

const senadorPE1 = new Senador(
    "Maria Teresa Leitão de Melo",
    "PT",
    "Senado Federal",
    "Praça dos Três Poderes, Brasília/DF",
    46366.19,
    [
        "PL 4403/2024",
        "PL 2614/2024"
    ],
    "Pernambuco",
    2022
);

const senadorPE2 = new Senador(
    "Humberto Sérgio Costa Lima",
    "PT",
    "Senado Federal",
    "Praça dos Três Poderes, Brasília/DF",
    46366.19,
    [
        "PL 14/2024",
        "PL 2338/2023"
    ],
    "Pernambuco",
    2018
);

const senadorSP = new Senador(
    "Marcos Cesar Pontes",
    "PL",
    "Senado Federal",
    "Praça dos Três Poderes, Brasília/DF",
    46366.19,
    [
        "PL 3167/2023",
        "PL 3650/2023",
        "PL 3492/2023"
    ],
    "São Paulo",
    2022
);

const politicos: Politico[] = [
    presidente,
    governadorPE,
    governadorSP,
    deputadoFederalPE1,
    deputadoFederalPE2,
    deputadoFederalPE3,
    deputadoFederalSP1,
    deputadoFederalSP2,
    deputadoEstadualPE1,
    deputadoEstadualPE2,
    deputadoEstadualPE3,
    deputadoEstadualSP1,
    deputadoEstadualSP2,
    senadorPE1,
    senadorPE2,
    senadorSP
];

for (const politico of politicos) {
    politico.exercerMandato();
}

console.log(presidente.nomearExonerarMinistros());
console.log(presidente.comandarForcasArmadas());
console.log(presidente.representarPaisEventosInternacionais());
console.log(presidente.elaborarEnviarPPALDOALocalNacional());

console.log(governadorPE.gerirPoliciaMilitar());
console.log(governadorPE.administrarRodoviasEstaduais());
console.log(governadorPE.coordenarEducacaoSaudeEstado());
console.log(governadorPE.elaborarEnviarPPALDOALocalEstadual());

console.log(deputadoEstadualPE1.votarPPALDOALocalEstadual());
console.log(deputadoEstadualPE1.proporEmendasConstituicaoEstadual());
console.log(deputadoEstadualPE1.criarCPIEstadual());

console.log(deputadoFederalPE1.votarPECs());
console.log(deputadoFederalPE1.criarCPINacional());
console.log(deputadoFederalPE1.votarPPALDOALONacionais());
console.log(deputadoFederalPE1.proporLeisComplementares());

console.log(senadorPE1.aprovarAutoridades());
console.log(senadorPE1.julgarCrimesResponsabilidade());
console.log(senadorPE1.representarInteressesEstado());