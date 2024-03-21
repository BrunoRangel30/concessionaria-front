<template>
    <div class="modal-imagem" v-if="modalOpen">
      <div class="modal-content">
        <img :src="fotos[currentPhotoIndex]" alt="Imagem" class="imagem-modal" />
        <span class="close" @click="closeModal">&times;</span>
        <div class="navegacao">
          <button class="anterior" @click="previousPhoto">&#10094;</button>
          <button class="proximo" @click="nextPhoto">&#10095;</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      fotos: Array,
      modalOpen: Boolean,
      currentPhotoIndex: Number
    },
    methods: {
      closeModal() {
        //alert('ewe')
        this.$emit('update:modalOpen', false);
      },
      previousPhoto() {
        this.$emit('update:currentPhotoIndex', this.currentPhotoIndex - 1);
      },
      nextPhoto() {
        this.$emit('update:currentPhotoIndex', this.currentPhotoIndex + 1);
      }
    }
  }
  </script>
  
  <style scoped>
  .modal-imagem {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  .modal-content {
     position: relative;
  }
  
  .imagem-modal {
    width: 80%;
    height: 80%;
    border: 8px solid white; /* Borda branca ao redor da imagem */
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.7); /* Sombra */
    border-radius: 10px; /* Borda arredondada */
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .close {
    position: absolute;
    top: -15px; /* Distância do topo */
    right: 95px; /* Distância da direita */
    color: #000;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
    width: 30px;
    height: 30px;
    background-color: #FFFF;
    line-height: 30px;
    text-align: center;
    border-radius: 12px; /* Borda circular */
}
.fechar-modal {
    position: absolute;
    top: 10px;
    right: 20px;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
}
.navegacao {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
.anterior,
.proximo {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
}
@media screen and (max-width: 550px) {
    .imagem-modal {
      width: 95% !important;
    }
    .close {
      right: 15px; /* Distância da direita */
    }
  }
</style>
  