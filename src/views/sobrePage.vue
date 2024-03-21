
<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
     <v-app >
        <MenuNav  @menuNavHeight="handleMenuNavHeight"/>
        <v-container fluid >
            <v-breadcrumbs class="breadcrumbs"  :style="{ marginTop: menuHeight + 'px' }" :items="['HOME', 'Sobre a empresa']"></v-breadcrumbs>
            <v-row>
                <v-col align="center" cols="12" sm="12" md="6" lg="6"  class="box-carrossel" style=" box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15)"  align-self="center">
                    <v-carousel hide-delimiters  v-model="currentIndex" hide-delimiter-background   class="carrossel-principal" >
                        <v-carousel-item >
                            <img  src="../assets/img/fachada_1.jpg" alt="Car" class="mx-auto d-block " height="100%" width="100%" style="object-fit: cover;"/>
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
                <v-col align="center" cols="12" sm="12" md="6" lg="6"  align-self="center">
                    <div class="about-section">
                        <h2 class="about-title">Sobre Nossa Concessionária</h2>
                        <p class="about-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit,
                            vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus,
                            ac blandit elit tincidunt id. Vestibulum ante ipsum primis in faucibus orci luctus
                            et ultrices posuere cubilia Curae.
                        </p>
                    </div>
                </v-col>
            </v-row>
        </v-container> 
      <Rodape class="margin-section"/>
     </v-app>
  </template>
    
    <script>
      import MenuNav from '@/components/MenuPage.vue';
      import ModalCar from '@/components/modalCar.vue';
      import Rodape from '@/components/Footer.vue';
      import axios from 'axios';
      export default {
        components: {
            MenuNav,
            Rodape,  
            ModalCar,
        },
        data() {
          return {
             menuHeight: '', // Inicialmente a altura do menu é 0
             /* currentIndex: 0,
              modalOpen: false,
              carro:'',
              currentPhotoIndex: null,
              thumbnailIndex: 0, // Índice da miniatura selecionada
              statusMenu: true,
              fotos: [],
              opcionais:[],
             
              showMessage:false,*/
        };
      },
        methods: {
        /*  updateMainPhoto(index) {
              this.currentIndex = index;
          },
          openModal(index) {
            this.modalOpen = true;
            this.currentPhotoIndex = index;
            this.$refs.modalImagem.$el.style.zIndex = 9999;
          },
          closeModal() {
            this.modalOpen = false;
          },*/
          handleMenuNavHeight(height) {
              const offest = 200
              this.menuHeight =  offest;
          },
        
        },
        computed: {
        },
        mounted() {
         
          },
      }
     
    </script>
    
    <style scoped>
    .carrossel-principal{
      width: 100%;
      height: 400px !important;
     
    }
    /*.box-carrossel .wrapper{
        padding: 0 35px;
    }*/
   
    .carousel img{
      height: 120px;
      object-fit: cover;
      user-select: none;
      margin-left: 14px;
      width: calc(100% / 3);
    }
    .carousel img:first-child{
      margin-left: 0px;
    }
    .v-breadcrumbs{
        display: block
    }
  .breadcrumbs {
    font-size: 18px;
    text-align: center !important; /* Centralizar horizontalmente */
    background-image: linear-gradient(to left, #ffffff, #f8f9fa); /* Adicionar um degradê */
    padding-bottom: 10px; /* Espaçamento na parte inferior */
    margin-bottom: 30px;
  }
  
  .margin-section{
    margin-top: 120px;
    }
    @media screen and (max-width: 900px) {
      .carousel img{
        width: calc(100% / 2);
        height: 200px;
      }
   
    }
    .about-section {
        background-color: #f8f9fa; /* Cor de fundo */
        width: 70%;
        padding: 20px; /* Espaçamento interno */
        border-radius: 10px; /* Borda arredondada */
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Sombra */
    }

    .about-title {
    color: #FF4225; /* Cor do título */
    font-size: 24px; /* Tamanho da fonte do título */
    margin-bottom: 10px; /* Espaçamento inferior */
    }

    .about-text {
    color: #333; /* Cor do texto */
    font-size: 16px; /* Tamanho da fonte do texto */
    line-height: 1.5; /* Altura da linha */
    }
  
    @media screen and (max-width: 550px) {
      .carousel img{
        width: 100%;
      }
      .wrapper{
        display:none
      }
      .carrossel-principal{
        width: 100%;
      }
      .box-carrossel .wrapper{
        padding: 0px;
      }
    }
    @media screen and (min-width: 1600px) {
      .carrossel-principal{
        width: 80%;
        height: 500px !important;
      }
      .wrapper{
        display: flex;
        position: relative;
        width: 80%;
      }
    }
    </style>
    