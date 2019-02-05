<template>
  <div class="corpo">
    <nav>
      <ul>
          <li v-for="rota in routes">
            <router-link :to="(rota.path ? rota.path : '/')">{{ rota.titulo }}</router-link>
          </li>
      </ul>
    </nav>
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

  import {routes} from './routes.js';

  export default {

    data() {
      return {
        routes: routes
      }
    }

  }

</script>

<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }
  .pagina-enter-active, .pagina-leave-active {
    transition: opacity .3s
  }
  .pagina-enter, .pagina-leave-active {
    opacity: 0
  }

</style>
