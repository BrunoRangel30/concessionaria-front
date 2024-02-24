<!-- src/components/CarCard.vue -->
<template>
  <v-container>
    <template v-if="viewMode === 'single'">
        <v-row v-for="car in cars" :key="car.id" >
          <v-col cols="6">
            <!-- Conteúdo da primeira coluna (imagem) -->
            <v-img class="img-single" :src="car.fotos.foto[0]" contain  height="auto"></v-img>
          </v-col>
          <v-col cols="6" class="row-single" >
            <v-row style="background-color:rgba(150, 150, 150, 0.8);">
              <v-col cols="6"  class="inf-esq" >
                <v-card-title>{{ car.modelo }}</v-card-title>
                <v-card-subtitle>{{ car.marca }}</v-card-subtitle>
              </v-col>
              <!-- Segunda coluna com ano, versão e preço -->
              <v-col cols="6" class="inf-dir-single">
                 <v-card-subtitle><span class="label-ano">Ano :</span> {{ car.anoFabricacao }}</v-card-subtitle>
                <v-card-subtitle>{{ car.versao }}</v-card-subtitle>
                <v-card-subtitle class="inf-dir-preco">{{ car.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</v-card-subtitle>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
    </template>
    <!--Grid 2-->
    <template v-if="viewMode === 'grid-2'">
      <v-row >
          <v-col cols="6" v-for="(car, index) in cars" :key="index" >
            <v-card class="custom-card">
              <v-img :src="car.fotos.foto[0]" contain width="100%" class="custom-image"></v-img>
              <v-row class="info-car">
                <!-- Primeira coluna com nome e marca -->
                <v-col cols="6" class="inf-esq">
                  <v-card-title>{{ car.modelo }}</v-card-title>
                  <v-card-subtitle>{{ car.marca }}</v-card-subtitle>
                </v-col>
                <!-- Segunda coluna com ano, versão e preço -->
                <v-col cols="6" class="inf-dir">
                  <v-card-subtitle><span class="label-ano">Ano :</span> {{ car.anoFabricacao }}</v-card-subtitle>
                  <v-card-subtitle>{{ car.versao }}</v-card-subtitle>
                  <v-card-subtitle class="inf-dir-preco">{{ car.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</v-card-subtitle>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
  </v-row>
  </template>
    <!--Grid 3-->
  <template v-if="viewMode === 'grid-3'">
      <v-row >
          <v-col cols="4" v-for="(car, index) in cars" :key="index">
              <v-card >
                <v-img :src="car.fotos.foto[0]" contain width="100%" height="100%"></v-img>
                <v-row  class="info-car">
                    <!-- Primeira coluna com nome e marca -->
                    <v-col cols="6" class="inf-esq">
                      <v-card-title>{{ car.modelo }}</v-card-title>
                      <v-card-subtitle>{{ car.marca }}</v-card-subtitle>
                    </v-col>
                    <!-- Segunda coluna com ano, versão e preço -->
                    <v-col cols="6"  class="inf-dir">
                       <v-card-subtitle><span class="label-ano">Ano :</span> {{ car.anoFabricacao }}</v-card-subtitle>
                      <v-card-subtitle>{{ car.versao }}</v-card-subtitle>
                      <v-card-subtitle class="inf-dir-preco">{{ car.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</v-card-subtitle>
                    </v-col>
                  </v-row>
              </v-card>
            </v-col>
      </v-row>
  </template>
 <!--Grid 4-->
  </v-container>
   <v-container fluid>
        <template v-if="viewMode === 'grid-4'">
          <v-row>
                <v-col cols="3"  v-for="(car, index) in cars" :key="index">
                  <v-card>
                    <v-img :src="car.fotos.foto[0]" contain width="100%" height="auto"></v-img>
                    <v-row class="info-car">
                      <!-- Primeira coluna com nome e marca -->
                      <v-col cols="6" class="inf-esq">
                        <v-card-title>{{ car.modelo }}</v-card-title>
                        <v-card-subtitle>{{ car.modelo }}</v-card-subtitle>
                      </v-col>
                      <!-- Segunda coluna com ano, versão e preço -->
                      <v-col cols="6"  class="inf-dir">
                         <v-card-subtitle><span class="label-ano">Ano :</span> {{ car.anoFabricacao }}</v-card-subtitle>
                        <v-card-subtitle>{{ car.versao }}</v-card-subtitle>
                        <v-card-subtitle class="inf-dir-preco">{{ car.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</v-card-subtitle>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
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
    };
  },
  computed: {
   
  },
  methods: {
    
    
   
  
   
  }
};
</script>

<style scoped>
/* Estilos específicos para o componente, se necessário */
.car-card {
    width: 100%; /* Ajuste conforme necessário */
    margin: 10px;
}

.car-title,
.car-brand,
.car-year,
.car-version,
.car-price {
  text-align: center;
  font-weight: bold;
}
.row-single{
  display: flex; 
  flex-direction: row; 
  justify-content: center;
  align-items: center;
}
.img-single{
  width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.custom-card{
  width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.info-car{
  height: 160px;
}
.inf-dir-single{
    background: #000!important;
    border-radius: 0 0 4px 0!important;
    -webkit-clip-path: polygon(30px 0,100% 0,100% 100%,0 100%)!important;
    clip-path: polygon(30px 0,100% 0,100% 100%,0 100%)!important;
    color: #ffff;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 200px;
}
.inf-dir-single .v-card-subtitle{
    display: block;
    flex: none;
    font-size: 16px;
    font-weight: 300;
     opacity: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: none;
    white-space: nowrap;
    padding-top: 5px;
}

.inf-dir {
    background: #000!important;
    border-radius: 0 0 4px 0!important;
    -webkit-clip-path: polygon(30px 0,100% 0,100% 100%,0 100%)!important;
    clip-path: polygon(30px 0,100% 0,100% 100%,0 100%)!important;
    color: #ffff;
    margin-top: 10px ;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.inf-dir .v-card-subtitle{
    display: block;
    flex: none;
    font-size: 16px;
    font-weight: 300;
     opacity: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: none;
    white-space: nowrap;
    padding-top: 5px;
}
.inf-dir-preco{
  font-size: 18px !important;
  font-weight: 500 !important;
}
.inf-esq{
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.inf-esq  .v-card-subtitle{
  display: block;
    flex: none;
    font-size: 16px;
    font-weight: 500;
     opacity: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: none;
    white-space: nowrap;
}



/*celulares*/
@media screen and (max-width: 767px) {
  .custom-card{
    width: 100%;
  }
}

/*monitores*/
@media screen and (min-width: 1600px) {
  .custom-card{
    width: 50%;
   
}
}



</style>
