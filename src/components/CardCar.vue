<!-- src/components/CarCard.vue -->
<template>
    
        <template v-if="viewMode === 'single'">
          <v-row style="box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);" class="mt-3">
              <template v-for="car in cars" :key="car.id">
                <v-col cols="12" class="mt-3">
                  <v-card style="box-shadow: none" >
                      <v-row no-gutters >
                        <!-- Coluna para a imagem -->
                        <v-col  :cols="isMobile ? '12' : '4'"   :offset="isMobile ? '0' : '2'">
                            <div class="custom-div card-center" >
                              <img :src="car.fotos.foto[0]" class="custom-img-single" />
                            </div>
                        </v-col>
                        <!-- Coluna para o conteúdo do card -->
                        <v-col :cols="isMobile ? '12' : '4'"  class="info-card" >
                            <!-- Conteúdo do card -->
                            <h2 class="info-modelo">{{ car.modelo }}</h2>

                            <h3 class="info-marca">{{ car.marca }}</h3>
                            <p>
                              <!-- Outras informações do carro -->
                              <span class="inf-ano">{{ car.anoFabricacao }}<br></span>
                              {{ car.versao }}<br>
                              <span class="inf-preco">{{ car.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</span>
                            </p>
                            <button  @click="detaheCar(car.modelo,car.id)" class="botao-detalhes mt-1">Ver Detalhes</button>
                            <span class="mdi mdi-whatsapp whatsapp-card-single"></span>
                        </v-col>
                      </v-row>
                  </v-card>
                </v-col>
              </template>
          </v-row>
        </template>
        <!--Grid 2-->
        <template v-if="viewMode === 'grid-2'">
            <v-row style="box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);" class="mt-3">
                <template v-for="car in cars" :key="car.id">
                    <v-col  :cols="isMobile ? '12' : '6'" class="mt-3" xs="12" sm="6" md="6" lg="6">
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
                                    <button  class="botao-detalhes mt-1">Ver Detalhes</button>
                                    <span class="mdi mdi-whatsapp whatsapp-card"></span>
                                </div>
                         </v-card>
                      </v-col>
                </template>
             </v-row>
       </template>
      <!--Grid 3-->
      <template v-if="viewMode === 'grid-3'">
            <v-row style="box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);" >
                <template v-for="car in cars" :key="car.id">
                    <v-col :cols="isMobile ? '12' : '4'"  xs="12" sm="6" md="4" lg="4" class="mt-3">
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
                                    <button  class="botao-detalhes mt-1">Ver Detalhes</button>
                                    <span class="mdi mdi-whatsapp whatsapp-card"></span>
                                </div>
                         </v-card>
                      </v-col>
                </template>
             </v-row>
       </template>
 
  <!--Grid 4-->
   <v-container fluid>
    <template v-if="viewMode === 'grid-4'">
            <v-row style="box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);">
                <template v-for="car in cars" :key="car.id">
                    <v-col :cols="isMobile ? '12' : '3'" xs="12" sm="6" md="4" lg="3">
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
                                      <button  @click="detaheCar(car.modelo,car.id)" class="botao-detalhes mt-1">Ver Detalhes</button>
                                      <span class="mdi mdi-whatsapp whatsapp-card"></span>
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
    substituirEspacosPorHifens(texto) {
       return texto.split(' ').join('-');
   },
    detaheCar(marca,id){
      //alert(marca)
      const textoFormatado = this.substituirEspacosPorHifens(marca);
      console.log(textoFormatado,'textoFormatado')
      this.$router.push({ name: 'carro', params: { modelo: textoFormatado , id:id} });
    },
  },
  mounted() {
    this.isMobile = this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize); // Ouve o evento resize
    this.checkScreenSize()
    //console.log(this.cars,'teste')

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
/*card single*/
.custom-div {
    width: 80%;
    height: 300px; 
    /*border: 2px solid yellow;*/
    position: relative; 
}
.custom-div-2{
    width: 60%;
    height: 300px;
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
    border-radius: 10px 10px 0px 0px;
}
.custom-img-single {
    width: 100%;
   /* border: 2px solid red;*/
    object-fit: cover !important;
    height: 100%;
    position: absolute;
    border-radius: 10px;
}
.info-card{
  display: flex;
  flex-direction: column;
  justify-content: center ;
  align-items:center ;
  text-align:center;
  background: rgba(64, 64, 64, 0.8);
  border-radius: 10px;
 /* border-radius: 10px 0 4px 0!important;
  /*-webkit-clip-path: polygon(0px 0,100% 0,100% 100%,0 100%)!important;
  clip-path: polygon(30px 0,100% 0,100% 100%,0 100%)!important;*/
  color: #ffff;
}
.info-card-2{
  height: 210px;
  background: rgba(64, 64, 64, 0.8);
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center ;
  align-items:center ;
  text-align:center;
  color: #ffff;
  position: relative;
  border-radius: 0px 0px 10px 10px;
}
.info-card-3{
  height: 212px;
  background: rgba(64, 64, 64, 0.8);
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center ;
  align-items:center ;
  text-align:center;
  color: #ffff;
  position: relative;
  border-radius: 0px 0px 10px 10px;
}
.info-card-4{
  height: 212px;
  background: rgba(64, 64, 64, 0.8);
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center ;
  align-items:center ;
  text-align:center;
  color: #ffff;
  position: relative;
  border-radius: 0px 0px 10px 10px;
}
.inf-preco{
  font-size: 22px ;
  font-weight: 700 ;
  color: #FFFF;
}
.botao-detalhes {
  background-color: #FF4225; /* Cor de fundo */
  border: none; /* Sem borda */
  color: white; /* Cor do texto */
  padding: 10px 20px; /* Espaçamento interno */
  text-align: center; /* Alinhamento de texto */
  text-decoration: none; /* Sem decoração de texto */
  display: inline-block; /* Exibir como bloco */
  font-size: 16px; /* Tamanho da fonte */
  border-radius: 8px; /* Borda arredondada */
  transition: background-color 0.3s; /* Transição suave de cor de fundo */
}

.botao-detalhes:hover {
  background-color: #FF4219; /* Mudança de cor de fundo ao passar o mouse */
}
.whatsapp-card{
  font-size: 2em;
  position: absolute;
  bottom: 0px;
  right: 10px;
}
.whatsapp-card-single{
  font-size: 2em;
}


/*celulares*/
@media screen and (max-width: 767px) {
  /*configurações do card*/
   /* .custom-card{
      width: 100%;
      padding: 10px;
   }*/
   .custom-img {
    border-radius: 0px 0px 0px 0px;
  }
   .custom-div{
       width: 100% ;
       height: 50vh; 
    }
   .custom-div-2{
    width: 100% ;
   }
   .info-card{
     padding: 20px !important;
   }
   .whatsapp-card-single{
    margin-top: 10px;
  }
  .botao-detalhes{
    margin-top: 10px;
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
 
  .custom-div {
    width: 60%;
  }
  .custom-div-2 {
    width: 40%;
  }
  .info-card-2{
    width: 40%;
  }
  .custom-div-3{
    width: 55%;
  }
  .info-card-3{
    width: 55%;
  }
  .custom-div-4{
    width: 70%;
  }
  .info-card-4{
    width: 70%;
  }
  
  
}



</style>
