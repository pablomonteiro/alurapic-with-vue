<template>
  <div>
    <h1>{{ titulo }}</h1>
    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre pelo título da foto">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
        <meu-painel :titulo="foto.titulo">
            <imagem-responsiva :url="foto.url" :titulo="foto.titulo" />
            <botao tipo="button" rotulo="Remover" @acao="removeImagem(foto)" :confirmacao="true" classe="confirmacao"/>
        </meu-painel>
      </li>
    </ul>

  </div>
</template>

<script>

import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';

export default {

  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'botao': Botao
  },

  data() {
    return {
      titulo: 'Alurapic', 
      fotos: [],
      filtro: ''
    }
  },

  created() {
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, 
            err => console.log(err)); 
  },

  computed: {
    fotosComFiltro() {
      if(this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },

  methods: {
    removeImagem(foto) {
      alert('remove imagem ' + foto.titulo);
    }
  }

}

</script>

<style>

  .centralizado {
      text-align: center;
  }

  .corpo {
      font-family: Helvetica, sans-serif;
      margin: 0 auto;
      width: 96%;
  }

  .lista-fotos {
      list-style: none;
  }

  .lista-fotos .lista-fotos-item {
      display: inline-block;
  }

  .filtro {
    width: 100%
  }

</style>
