import Vue from 'vue'
import App from './App.vue'

// Importanto Dependências no Projeto
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

// import das rotas
// tem que vir entre chaves devido export do arquivo routes não ser default.
import {routes} from './routes.js'

// Habilitando uso das dependências
Vue.use(VueResource);
Vue.use(VueRouter);

// criando instância do VueRouter com as rotas configuradas.
const router = new VueRouter(
    {
      routes: routes,
      mode: 'history'
    }
);

new Vue({
  el: '#app',
  router: router, // passando configuração para a instância do Vue
  render: h => h(App)
})