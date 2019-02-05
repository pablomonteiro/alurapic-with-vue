<template>

    <button :type="tipo" class="botao" :class="defineClass" @click="aplicaAcao()">{{ rotulo }}</button>

</template>

<script>

    export default {
        props: {
            tipo: {
                required: true,
                type: String
            }, 
            rotulo: {
                required: true,
                type: String
            },
            confirmacao: {
                type: Boolean
            },
            classe: {
                type: String
            }
        },

        methods: {
            aplicaAcao() {
                if(this.confirmacao) {
                    if(confirm('Deseja remover essa imagem?')) {
                        this.$emit('acao');
                    }
                    return;
                }
                this.$emit('acao');
            }
        },

        computed: {
            defineClass() {
                let classePadrao = 'botao-padrao';
                if(this.classe == 'perigo') return 'botao-perigo';
                if(this.classe == 'confirmacao') return 'botao-confirmacao';
                return classePadrao;
            }
        }
    }

</script>

<style>
    .botao {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
    }

    .botao-confirmacao {
        background: blue;
        color: white;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }
</style>