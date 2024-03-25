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
                            <div class="box-marca-versao mt-1">
                                <div class="box-imagem">
                                    <img v-if="getMarcaSrc(car.marca)" :src="getMarcaSrc(car.marca)" class="custom-img-logo" />
                                </div>
                                {{ car.versao }} 
                            </div>
                            <!-- Outras informações do carro -->
                            <span class="inf-ano mt-1">{{ car.anoFabricacao }}/{{car.anoModelo}} - {{ formatNumberWithDots(car.km) }} KM<br></span>
                            <span class="inf-preco mt-1">{{ car.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</span>
                            <button  @click="detaheCar(car.modelo,car.id)" class="botao-detalhes mt-1">Ver Detalhes</button>
                            <span class="mdi mdi-whatsapp whatsapp-card-single mt-1"></span>
                        </v-col>
                      </v-row>
                  </v-card>
                </v-col>
              </template>
          </v-row>
        </template>
        <!--Grid 2-->
      <!--  <template v-if="viewMode === 'grid-2'">
            <v-row style="box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);" class="mt-3">
                <template v-for="car in cars" :key="car.id">
                    <v-col  :cols="isMobile ? '12' : '6'" class="mt-3" xs="12" sm="6" md="6" lg="6">
                         <v-card class="card-center" style="box-shadow: none">
                              <div class="custom-div-2 card-center" >
                                  <img :src="car.fotos.foto[0]" class="custom-img"/>
                               </div>
                                <div class="info-card-2 card-center">
                                    <h2 class="info-modelo">{{ car.modelo }}</h2>
                                    <div class="box-marca-versao">
                                          <div class="box-imagem">
                                              <img v-if="getMarcaSrc(car.marca)" :src="getMarcaSrc(car.marca)" class="custom-img-logo" />
                                          </div>
                                          {{ car.versao }} 
                                    </div>
                                    <p>
                                      <span class="inf-ano">{{ car.anoFabricacao }}/{{car.anoModelo}} - {{ formatNumberWithDots(car.km) }} KM<br></span>
                                      <span class="inf-preco">{{ car.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</span>
                                    </p>
                                    <button  class="botao-detalhes mt-1">Ver Detalhes</button>
                                    <span class="mdi mdi-whatsapp whatsapp-card"></span>
                                </div>
                         </v-card>
                      </v-col>
                </template>
             </v-row>
       </template>-->
      <!--Grid 3-->
      <template v-if="viewMode === 'grid-3'">
          <v-container fluid>
            <v-row style="box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);" class="padding-col" >
                <template v-for="car in cars" :key="car.id">
                    <v-col :cols="isMobile ? '12' : '4'"  xs="12" sm="6" md="4" lg="4" class="mt-3">
                          <v-card class="card-center" style="box-shadow: none">
                              <div class="custom-div-3 card-center" >
                                  <img :src="car.fotos.foto[0]" class="custom-img" />
                               </div>
                                <div class="info-card-3 card-center">
                                    <h2 class="info-modelo">{{ car.modelo }}</h2>
                                    <div class="box-marca-versao mt-1">
                                          <div class="box-imagem">
                                              <img v-if="getMarcaSrc(car.marca)" :src="getMarcaSrc(car.marca)" class="custom-img-logo" />
                                          </div>
                                          {{ car.versao }} 
                                    </div>
                                    <span class="inf-ano mt-1">{{ car.anoFabricacao }}/{{car.anoModelo}} - {{ formatNumberWithDots(car.km) }} KM<br></span>
                                    <span class="inf-preco mt-1">{{ car.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</span>
                                    <button  class="botao-detalhes mt-2">Ver Detalhes</button>
                                    <span class="mdi mdi-whatsapp whatsapp-card"></span>
                                </div>
                         </v-card>
                      </v-col>
                </template>
             </v-row>
          </v-container>
       </template>
      <!--Grid 4-->
      <v-container fluid>
        <template v-if="viewMode === 'grid-4'">
                <v-row style="box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);" class="padding-col">
                    <template v-for="car in cars" :key="car.id" >
                        <v-col :cols="isMobile ? '12' : '3'" xs="12" sm="6" md="4" lg="3">
                            <v-card class="card-center" style="box-shadow: none">
                                  <div class="custom-div-4 card-center" >
                                      <img :src="car.fotos.foto[0]" class="custom-img" />
                                  </div>
                                    <div class="info-card-4 card-center">
                                        <h2 class="info-modelo">{{ car.modelo }}</h2>
                                        <div class="box-marca-versao mt-1">
                                            <div class="box-imagem">
                                              <img v-if="getMarcaSrc(car.marca)" :src="getMarcaSrc(car.marca)" class="custom-img-logo" />
                                            </div>
                                            {{ car.versao }} 
                                        </div>
                                       
                                          <span class="inf-ano mt-2">{{ car.anoFabricacao }}/{{car.anoModelo}} - {{ formatNumberWithDots(car.km) }} KM<br></span>
                                          <span class="inf-preco mt-1">{{ car.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</span>
                                       
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
      isMobile: false,
      marcas: [ // Opções de ordenação para o v-autocomplete
          { nome: 'Toyota', src: 'assets/img/iconesMarcas/toyota.png' },
          { nome: 'Fiat', src: 'assets/img/iconesMarcas/fiat.png' },
          { nome: 'Ford', src: 'assets/img/iconesMarcas/ford.png' },
          { nome: 'Jeep', src: 'assets/img/iconesMarcas/jeep.png' },
          { nome: 'Honda', src: 'assets/img/iconesMarcas/honda.png' },
          { nome: 'Nissan', src: 'assets/img/iconesMarcas/nissan.png' },
          { nome: 'Volkswagen', src: 'assets/img/iconesMarcas/volkswagen.png' },
          { nome: 'Hyundai', src: 'assets/img/iconesMarcas/hyundai.png' },
          { nome: 'Renault', src: 'assets/img/iconesMarcas/renault.png' },
          { nome: 'Mitsubishi', src: 'assets/img/iconesMarcas/mitsubishi.png' },
          { nome: 'Gm - Chevrolet', src: 'assets/img/iconesMarcas/chevrolet.png' },
      ],
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
    getMarcaSrc(marca) {
      const marcaEncontrada = this.marcas.find(m => m.nome === marca);
      const host = window.location.host;
      return marcaEncontrada ? marcaEncontrada.src : null;
    },
    formatNumberWithDots(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
.padding-col .v-col-12{
  padding: 5px !important;
}
.padding-col .v-col-4{
  padding: 3px !important;
  
}
.padding-col .v-col-3{
  padding: 3px !important;
  
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
    width: 90%;
    height: 290px; 
    /*border: 2px solid yellow;*/
    position: relative;
}
.custom-div-4{
    width: 95%;
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
  height: 230px;
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
  height: 230px;
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
.info-card-4{
  height: 240px;
  background: rgba(64, 64, 64, 0.8);
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center ;
  align-items:center ;
  text-align:center;
  color: #ffff;
  position: relative;
  border-radius: 0px 0px 10px 10px;
  border:  10px 10px 10px 10px solid #000;
}
.info-modelo{
    font-size: 23px ;
  }
.inf-preco{
  font-size: 22px ;
  font-weight: 700 ;
  color: #FF4219;
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
  bottom: 20px;
  right: 10px;
}
.whatsapp-card-single{
  font-size: 2em;
}
.box-marca-versao{
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px; /* Borda arredondada */
}

.box-imagem{
  width: 40px;
  height: 40px;
  position: relative;
  margin-right: 8px;
}
.custom-img-logo{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top:0;
  right: 0;
  bottom: 0;
  object-fit: contain;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .30);
  border-radius: 2px; /* Borda arredondada */
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
  .custom-div-4{
    width: 100% ;
  }
  .info-card-4{
    width: 100% ;
  }
  .info-card{
     padding: 20px !important;
     border-radius: 0px 0px 10px 10px;
  }
  .whatsapp-card-single{
    margin-top: 10px;
  }
  .whatsapp-card{
    bottom: 15px;
  }
  .botao-detalhes{
    margin-top: 10px;
  }
  .info-card-2{
    width: 100%;
  }
  .inf-preco{
    font-size: 18px;
  }
  .cifrao{
    font-size: 18px ;
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
  .custom-img-single {
    border-radius: 10px 0px 0px 0px;
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
    width: 98%;
    height: 50vh; 
  }
  .info-card-3{
    width: 98%;
    height: 300px; 
  }
  .custom-div-4{
    width: 98%;
    height: 40vh; 
  }
  .info-card-4{
    width: 98%;
    height: 300px; 
  }
  .inf-preco{
    font-size: 25px;
  }
  .info-modelo{
    font-size: 25px ;
  }
  .info-marca{
    font-size: 20px ;
  }
  .inf-ano{
    font-size: 20px ;
  }
  .whatsapp-card{
    bottom: 45px;
    right: 30px;
  }
  
}



</style>
