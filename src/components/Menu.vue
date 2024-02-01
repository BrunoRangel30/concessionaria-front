<template>
   
      <v-app-bar app
      style=" background-color: rgba(0, 0, 0, 0); box-shadow: none"
       >
        <v-container class="custom-toolbar-content">
          <v-row align="center">
            <!-- Botão para abrir/fechar o drawer, apenas em telas menores -->
            <v-col class="d-lg-none">
              <v-btn icon @click="toggleDrawer">
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </v-col>
    
            <!-- Título do App -->
            <v-col :cols="6">
                <img align="center" src="../assets/img/logo.png" alt="Logo" class="logo" />
            </v-col>
    
            <!-- Ícone à direita, oculto em telas menores -->
           
            <!-- Opções de menu, inline do lado esquerdo (apenas em telas maiores) -->
            <v-col class="d-lg-block " :cols="6" style="display: none;">
              <v-row>
                <v-btn class="mr-2" color="#FFFFFF"  style="background-color: rgba(64, 64, 64, 0.8);" text @click="navigateTo('/estoque')" v-show="!isSmallScreen">
                  ESTOQUE
                </v-btn>
                <v-btn class="ml-2" color="#FFFFFF" style="background-color: rgba(64, 64, 64, 0.8)" text @click="navigateTo('/loja')" v-show="!isSmallScreen">
                  FOTOS DA LOJA
                </v-btn>
                <v-btn class="ml-2" color="#FFFFFF" style="background-color: rgba(64, 64, 64, 0.8)" text @click="navigateTo('/empresa')" v-show="!isSmallScreen">
                   SOBRE A EMPRESA
                </v-btn>
                <!-- Adicione mais opções conforme necessário -->
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar>
  
      
      
      <!-- Drawer, apenas em telas menores -->
      <v-navigation-drawer app v-model="drawer" class="d-lg-none">
        <v-list>
          <v-list-item @click="navigateTo('/veiculos')">
            <v-list-item-icon>
              <v-icon>mdi-car</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Veículos</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="navigateTo('/carros')">
            <v-list-item-icon>
              <v-icon>mdi-car-sports</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Carros</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- Adicione mais opções conforme necessário -->
        </v-list>
      </v-navigation-drawer>
   
  </template>
  <script>
  export default {
    data() {
      return {
        drawer: true, // Iniciar visível em telas maiores
        isSmallScreen: false,
      };
    },
    
    methods: {
      toggleDrawer() {
        this.drawer = !this.drawer;
      },
      navigateTo(route) {
        this.$router.push(route);
        this.drawer = false;
      },
    },
   
    mounted() {
      // Verificar o tamanho da tela durante a montagem do componente
      this.isSmallScreen = window.innerWidth <= 992; // Defina o valor do limite conforme necessário
      // Adicionar um ouvinte de redimensionamento para atualizar isSmallScreen
      window.addEventListener('resize', () => {
        this.isSmallScreen = window.innerWidth <= 992; // Atualize o valor do limite conforme necessário
      });
    },
  };
  </script>
  
  <style scoped>

  .logo {
        max-width: 100%; /* A imagem não será maior que 100% da largura do contêiner pai */
        max-height: 120px; /* Altura máxima da imagem */
        object-fit: contain;
  }
  
  @media only screen and (max-width: 767px) {
    .logo {
        max-height: 60px;
    }
  }
  /* Estilos específicos para o componente Menu */
     @media (min-width: 600px) {   
        ::v-deep .v-toolbar__content {
             height: 20vh !important;
             margin-top: 20px
         }
    }

  </style>
  