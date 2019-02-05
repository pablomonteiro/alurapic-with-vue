//import dos arquivos que deverão ser chamados quando as rotas abaixo especificadas forem chamadas
import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';

// configuração das rotas
export const routes = [
    {path: '', component: Home, titulo: 'Principal'},
    {path: '/cadastro', component: Cadastro, titulo: 'Cadastro'},
];
