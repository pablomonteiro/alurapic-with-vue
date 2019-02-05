<template>

    <div class="painel">
        <h2 class="painel-titulo" @dblclick="visivel = !visivel" >{{ titulo }}</h2>
        <transition name="painel-image">
            <div class="painel-conteudo" v-show="visivel">
                <slot class="painel-conteudo"></slot>
            </div>
        </transition>
    </div>

</template>

<script>

    export default {
        props: ['titulo'],

        data() {
            return {
                visivel: true
            }
        }
    }

</script>

<style scoped>
    .painel {
        padding: 0 auto;
        border: solid 2px grey;
        display: inline-block;
        margin: 5px;
        box-shadow: 5px 5px 10px grey;
        width: 200px;
        height: 100%;
        vertical-align: top;
        text-align: center;
    }

    .painel .painel-titulo {
        text-align: center;
        border: solid 2px;
        background: lightblue;
        margin: 0 0 15px 0;
        padding: 10px;
        text-transform: uppercase;
    }

    * {
        box-shadow: 5px 5px 5px gray;
    }

    .painel-image-enter-active, .pagina-image-leave-active {
        transition: opacity .3s
    }
    .painel-image-enter, .pagina-image-leave-active {
        opacity: 0
    }
</style>