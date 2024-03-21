<template>
  <v-app-bar app
  :class="{ 'menu-inicial': !isScrolled, 'menu-rolagem': isScrolled }"
  
  >
  <v-container fluid>
          <v-row style="margin-top: -15px;">
            <div :class="{ 'inf-top': !isScrolled, 'inf-top-2': isScrolled }">
              <p class="localizacao"><span class="mdi mdi-map-marker icone-fonte"></span> Scia Qd.15 Conj.3 Lote:7 Cidade do Automóvel, BRASÍLIA - DF</p>
              <p  class="horario"><span class="mdi mdi-clock-time-four-outline icone-fonte"></span> Horário de atendimento: Seg a sex - 8h às 18h | Sáb - 8h às 13h</p>
            </div>
          </v-row>
          <v-row align="center">
            <!-- Botão para abrir/fechar o drawer, apenas em telas menores -->
            <v-col class="d-lg-none">
              <v-btn icon @click="toggleDrawer">
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </v-col>
            <!-- Título do App -->
            <v-col :cols="3" >
                <img  align="left" src="../assets/img/logo.png" alt="Logo" class="logo" />
            </v-col>
            <!-- Ícone à direita, oculto em telas menores -->
            <!-- Opções de menu, inline do lado esquerdo (apenas em telas maiores) -->
            <v-col class="d-lg-block " :cols="9" style="display: none;"> 
                <div class="menu-grid">
                  <v-btn class="mr-2"  color="#FFFFFF"  style="background-color: rgba(64, 64, 64, 0.8);" text @click="navigateTo('/')" v-show="!isSmallScreen">
                    <span  :class="{ 'active': activeMenu === '/' }">HOME</span>
                  </v-btn>
                 
                  <v-btn class="ml-2" color="#FFFFFF" style="background-color: rgba(64, 64, 64, 0.8)" text @click="navigateTo('/sobre-empresa')" v-show="!isSmallScreen">
                    <span  :class="{ 'active': activeMenu === '/empresa' }"> SOBRE A EMPRESA</span>
                  </v-btn>
                  <div class="itens-menu">
                      <p><span class="mdi mdi-whatsapp"></span> (61) 98298-2755</p>
                    </div>
                </div>
                <!-- Adicione mais opções conforme necessário -->
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar>
      <!-- Drawer, apenas em telas menores -->
      <v-navigation-drawer app v-model="drawer" class="d-lg-none mt-3" id="drawer" >
        <v-list style="margin-top: 10vh" >
            <v-list-item @click="navigateTo('/')">
              <v-list-item-content >
                <v-list-item-title><span  :class="{ 'active': activeMenu === '/' }">HOME</span></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click="navigateTo('/carros')">
              <v-list-item-content>
                <v-list-item-title> SOBRE A EMPRESA </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item >
              <v-list-item-content>
                  <p><span class="mdi mdi-whatsapp"></span> (61) 98298-2755</p>
              </v-list-item-content>
            </v-list-item>
          </v-list>
            <div class="inf-cel">
              <p class="localizacao"><span class="mdi mdi-map-marker icone-fonte"></span> Scia Qd.15 Conj.3 Lote:7 Cidade do Automóvel, BRASÍLIA - DF</p>
              <p  class="horario"> <span class="mdi mdi-clock-time-four-outline icone-fonte"></span> Horário de atendimento: Seg a sex - 8h às 18h | Sáb - 8h às 13h</p>
            </div>
      </v-navigation-drawer>
  </template>
  <script>
 
  export default {

    data() {

      return {
        drawer: false, // Iniciar visível em telas maiores
        isSmallScreen: false,
        isScrolled: '',
        activeMenu: '' // Inicialize como vazio
      };

    },

    methods: {
        toggleDrawer() {
          this.drawer = !this.drawer;
        },
        navigateTo(route) {
          this.activeMenu = route;
          this.$router.push(route);
          this.drawer = false;
        //  this.$emit('navigate-to', '#estoque');
        },
        handleScroll() {
          this.isScrolled = window.scrollY > 0;
       },
    },

    mounted() {
      // Verificar o tamanho da tela durante a montagem do componente
      this.isSmallScreen = window.innerWidth <= 992; // Defina o valor do limite conforme necessário
      // Adicionar um ouvinte de redimensionamento para atualizar isSmallScreen
      window.addEventListener('resize', () => {
        this.isSmallScreen = window.innerWidth <= 992; // Atualize o valor do limite conforme necessário
      });
      window.addEventListener('scroll', this.handleScroll);
    },

    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
  };
  </script>

  <style scoped>
  .menu-inicial{
    background-color: rgba(0, 0, 0, 0) !important;
    box-shadow: none !important;
  }
  .menu-inicial .logo{
    max-width: 100%; /* A imagem não será maior que 100% da largura do contêiner pai */
    max-height: 90px; /* Altura máxima da imagem */
    object-fit: contain;   
  }

  .menu-inicial ::v-deep .v-toolbar__content {
      height: auto !important;
  }

  /************************Menu rolagem ***********************/
  .menu-rolagem{
    background-color: rgba(64, 64, 64, 1) !important;
    box-shadow: none !important;
    
  }
  .menu-rolagem .logo{
    max-width: 100%; 
    max-height: 90px;
    object-fit: contain; 
  }
  .menu-rolagem ::v-deep .v-toolbar__content {
    height: auto !important;
  }
  .div-center{
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .menu-grid{
    display: flex; 
    justify-content: right;
  }
  .itens-menu{
    padding-left: 2%;
    padding-right:2%;
    padding-top: 5px;
    padding-bottom: 5px;
    color: #FFFFFF;
    margin-left: 15px;
    background-color: rgba(64, 64, 64, 1) !important;
  }
  .active {
    border-bottom: 2px solid #FF4225 !important ;
  }

  #drawer{
    background-color: rgba(64, 64, 64, 1) !important;
    color: #FFFFFF;
  }
  .inf-top{
    background-color: #FF4225;
    width: 100%;
    color:#FFFFFF;
    display: flex;
    justify-content: space-between;
    padding: 15px;
  }

  .inf-top-2{
    display: none;
  }

  .inf-cel{
    bottom: 30px;
    position: absolute;
    padding: 10px;
  }

  .inf-cel p{
    border-left: 2px solid #FF4225;
    padding-left: 10px;
  }
 
  /*telas intermediarias*/
  @media only screen and (min-width: 250px) and (max-width: 1280px) {
      .menu-inicial .v-icon{
        color: #FFFFFF
      }
      .menu-rolagem .v-icon{
        color: #FFFFFF
      }
      .inf-top{
        display: none;
      }
  }
  
  /*celular*/
  @media only screen and (max-width: 767px) {
    .logo {
        max-height: 60px !important;
    }
    .menu-rolagem{
      border-bottom: 1px solid #fff
    }
    #menu-drawer{
        margin-top: 25px !important;
    }
    .inf-top{
        display: none;
    }
  }
  /* Estilos específicos para o componente Menu */
     @media (min-width: 600px) {   
      /*  ::v-deep .v-toolbar__content {
             height: 20vh !important;
             margin-top: 20px
         }*/
    }

  </style>
  