<!-- src/components/CarCard.vue -->
<template>
    <v-container>
        <template v-if="viewMode === 'single'">
          <v-row >
              <template v-for="car in cars" :key="car.id">
                <v-col cols="12" >
                  <v-card style="box-shadow: none">
                      <v-row no-gutters >
                        <!-- Coluna para a imagem -->
                        <v-col  :cols="isMobile ? '12' : '4'"   :offset="isMobile ? '0' : '2'" >
                            <div class="custom-div card-center" >
                              <img :src="car.fotos.foto[0]" class="custom-img" />
                            </div>
                        </v-col>
                        <!-- Coluna para o conteúdo do card -->
                        <v-col :cols="isMobile ? '12' : '4'"  class="info-card">
                            <!-- Conteúdo do card -->
                            <h2 class="info-modelo">{{ car.modelo }}</h2>

                            <h3 class="info-marca">{{ car.marca }}</h3>
                            <p>
                              <!-- Outras informações do carro -->
                              <span class="inf-ano">Ano: {{ car.anoFabricacao }}<br></span>
                              {{ car.versao }}<br>
                              <span class="inf-preco">{{ car.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</span>
                            </p>
                        </v-col>
                      </v-row>
                  </v-card>
                </v-col>
              </template>
          </v-row>
        </template>
        <!--Grid 2-->
        <template v-if="viewMode === 'grid-2'">
            <v-row>
                <template v-for="car in cars" :key="car.id">
                    <v-col  :cols="isMobile ? '12' : '6'">
                         <v-card class="card-center" style="box-shadow: none">
                              <div class="custom-div-2 card-center" >
                                  <img :src="car.fotos.foto[0]" class="custom-img"/>
                               </div>
                                <div class="info-card-2 card-center">
                                    <h2 class="info-modelo">{{ car.modelo }}</h2>
                                    <h3 class="info-marca">{{ car.marca }}</h3>
                                    <p>
                                      <span class="inf-ano">Ano: {{ car.anoFabricacao }}<br></span>
                                      {{ car.versao }}<br>
                                      <span class="inf-preco">{{ car.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</span>
                                    </p>
                                </div>
                         </v-card>
                      </v-col>
                </template>
             </v-row>
       </template>
      <!--Grid 3-->
      <template v-if="viewMode === 'grid-3'">
            <v-row >
                <template v-for="car in cars" :key="car.id">
                    <v-col :cols="isMobile ? '12' : '4'" :md="6">
                         <v-card class="card-center" style="box-shadow: none">
                              <div class="custom-div-3 card-center" >
                                  <img :src="car.fotos.foto[0]" class="custom-img" />
                               </div>
                                <div class="info-card-3 card-center">
                                    <h2 class="info-modelo">{{ car.modelo }}</h2>
                                    <h3 class="info-marca">{{ car.marca }}</h3>
                                    <p>
                                      <span class="inf-ano">Ano: {{ car.anoFabricacao }}<br></span>
                                      {{ car.versao }}<br>
                                      <span class="inf-preco">{{ car.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</span>
                                    </p>
                                </div>
                         </v-card>
                      </v-col>
                </template>
             </v-row>
       </template>
    </v-container>
  <!--Grid 4-->
   <v-container fluid>
    <template v-if="viewMode === 'grid-4'">
            <v-row >
                <template v-for="car in cars" :key="car.id">
                    <v-col :cols="isMobile ? '12' : '3'" >
                         <v-card class="card-center" style="box-shadow: none">
                              <div class="custom-div-4 card-center" >
                                  <img :src="car.fotos.foto[0]" class="custom-img" />
                               </div>
                                <div class="info-card-4 card-center">
                                    <h2 class="info-modelo">{{ car.modelo }}</h2>
                                    <h3 class="info-marca">{{ car.marca }}</h3>
                                    <p>
                                      <span class="inf-ano">Ano: {{ car.anoFabricacao }}<br></span>
                                      {{ car.versao }}<br>
                                      <span class="inf-preco">{{ car.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</span>
                                    </p>
                                </div>
                         </v-card>
                      </v-col>
                </template>
             </v-row>
       </template>
   </v-container>
</template>

<script>
export default {
  props: {
    cars: {
      type: Array,
      required: true
    },
    viewMode: {
      type: String,
      required: true
    }
  },
  data() {
    return {
    //  viewMode: 'single', // Modo de visualização padrão
    //  viewModes: ['single', 'grid-2', 'grid-3']
      isMobile: false
    };
  },
  computed: {
   
  },
  methods: {
    checkScreenSize() {
        const mobileScreenSize = 600;
        this.isMobile = window.innerWidth < mobileScreenSize;
    },
  },
  mounted() {
    this.isMobile = this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize); // Ouve o evento resize
    this.checkScreenSize()

  },
  beforeDestroy() {
     window.removeEventListener('resize', this.checkScreenSize); // Remove o ouvinte de evento antes de destruir o componente
  },
};
</script>

<style scoped>
/* Estilos específicos para o componente, se necessário */
.card-center{
  display: block;
  margin-left:auto;
  margin-right: auto;
}

.custom-div {
    width: 60%;
    height: 300px; 
    /*border: 2px solid yellow;*/
    position: relative;
    
}
.custom-div-2{
    width: 60%;
    height: 290px; 
    /*border: 2px solid yellow;*/
    position: relative;
}
.custom-div-3{
    width: 80%;
    height: 290px; 
    /*border: 2px solid yellow;*/
    position: relative;
}
.custom-div-4{
    width: 90%;
    height: 290px; 
    /*border: 2px solid yellow;*/
    position: relative;
}
.custom-img {
    width: 100%;
   /* border: 2px solid red;*/
    object-fit: cover !important;
    height: 100%;
    position: absolute;

}
.info-card{
  display: flex;
  flex-direction: column;
  justify-content: center ;
  align-items:center ;
  text-align:center;
  background: rgba(64, 64, 64, 1);
  border-radius: 0 0 4px 0!important;
  /*-webkit-clip-path: polygon(0px 0,100% 0,100% 100%,0 100%)!important;
  clip-path: polygon(30px 0,100% 0,100% 100%,0 100%)!important;*/
  color: #ffff;
  
}
.info-card-2{
  height: 200px;
  background: rgba(64, 64, 64, 1);
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center ;
  align-items:center ;
  text-align:center;
  color: #ffff;
}
.info-card-3{
  height: 200px;
  background: rgba(64, 64, 64, 1);
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center ;
  align-items:center ;
  text-align:center;
  color: #ffff;
}
.info-card-4{
  height: 200px;
  background: rgba(64, 64, 64, 1);
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center ;
  align-items:center ;
  text-align:center;
  color: #ffff;
}
.inf-preco{
  font-size: 19px ;
  font-weight: 700 ;
  color: #d6ac50;
}

/*celulares*/
@media screen and (max-width: 767px) {
  /*configurações do card*/
   /* .custom-card{
      width: 100%;
      padding: 10px;
   }*/
   .custom-div{
       width: 100% ;
       height: 250px; 
    }
   .custom-div-2{
    width: 100% ;
   }
   .info-card{
    padding: 20px !important;
   }
   .info-card-2{
    width: 100%;
   }
    .inf-preco{
      font-size: 16px ;
   }
    .info-modelo{
      font-size: 18px ;
    }
    .info-marca{
      font-size: 16px ;
    }
    .inf-ano{
      font-size: 16px ;
    }
}

/*monitores*/
@media screen and (min-width: 1600px) {
  /*.custom-card{
    width: 50%;
  }*/
  
}



</style>
