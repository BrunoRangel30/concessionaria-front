
<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
   <v-app >
      <MenuNav  @menuNavHeight="handleMenuNavHeight"/>
      <v-container fluid >
        <v-breadcrumbs class="breadcrumbs"  :style="{ marginTop: menuHeight + 'px' }" :items="['Detalhe Veículo', carro.modelo]"></v-breadcrumbs>
        <v-row>
            <v-col align="center" cols="12" sm="12" md="6" lg="6"  class="box-carrossel" style=" box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15)"  align-self="center">
                 <!-- Carrossel principal -->
                 
                <v-carousel hide-delimiters  v-model="currentIndex" hide-delimiter-background   class="carrossel-principal" >
                  <v-carousel-item v-for="(foto, index) in fotos" :key="index">
                      <img :src="foto" alt="Car" class="mx-auto d-block " height="100%" width="100%" style="object-fit: cover;" @click="openModal(index)"/>
                  </v-carousel-item>
                </v-carousel>
                  <div class="wrapper">
                    <i id="left" class="fa-solid fa-angle-left"></i>
                    <div class="carousel" >
                      <template  v-for="(foto, index) in fotos" :key="index">
                          <img :src="foto" alt="img" draggable="false" class="img-miniatura" @click="updateMainPhoto(index)"/>
                      </template>
                    </div>
                    <i id="right" class="fa-solid fa-angle-right"></i>
                  </div>
            </v-col>
            <v-col align="center" cols="12" sm="12" md="6" lg="6" style="padding: 3%;">
              <v-row>
                <div class="title">
                  <h2>{{carro.modelo}} {{ carro.anoFabricacao }}</h2>
                  <h2 style="margin-left:5%">R$<label class="preco-titulo" >{{ carro.valor }}</label></h2>
                  <a href="#" class="share-link"  @click="copyUrl">
                      <i class="fas fa-share-alt"></i>
                  </a>
                  <div v-if="showMessage" class="success-message">
                          URL copiada para a área de transferência!
                  </div>
                </div>
              </v-row>
              <v-row >
                  <v-col align="center" cols="12" sm="12" md="6" lg="6">
                    <div class="car-info" style=" box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15)" >
                      <h2>Detalhes do Veículo</h2>
                      <div class="car-info-item">
                        <i class="fas fa-car"></i>
                        <p>Marca: {{ carro.marca }}</p>
                      </div>
                      <div class="car-info-item">
                        <i class="fas fa-gas-pump"></i>
                        <p>Combustível: {{ carro.combustivel }}</p>
                      </div>
                      <div class="car-info-item">
                        <i class="fas fa-calendar-alt"></i>
                        <p>Ano/Mod. {{ carro.anoFabricacao }} / {{ carro.anoModelo }}</p>
                      </div>
                      <div class="car-info-item">
                        <i class="fas fa-paint-brush"></i>
                        <p>Cor: {{ carro.cor }}</p>
                      </div>
                      <div class="car-info-item">
                        <i class="fas fa-tachometer-alt"></i>
                        <p>km: {{ carro.km }}</p>
                      </div>
                      <div class="car-info-item">
                        <i class="fas fa-money-bill-wave"></i>
                        <p>Preço {{ carro.preco }}</p>
                      </div>
                    </div>
                  </v-col>
                  <v-col align="center" cols="12" sm="12" md="6" lg="6"  class="car-info-container" >
                    <div class="car-info-list"  style=" box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15)">
                      <h2>Opcionais / Observações</h2>
                      <template  v-for="(op, index) in opcionais" :key="index">
                        <div class="car-info-item">
                          <i class="fa-solid fa-check "></i>
                          <p> {{ op }} </p>
                        </div>
                        </template>
                    </div>
                  </v-col>
              </v-row>
              <v-row class="observacao" v-if="!Array.isArray(carro.observacao)" >
                <!--<p>Obervações: {{carro.observacao}}</p>-->
                <p>CITROEN C3 GLX 1.4 MEC FLEX 2006. CARRO EM ÓTIMO ESTADO DE CONSERVAÇÃO, AR CONDICIONADO, DIREÇÃO HIDRÁULICA, TRIO ELÉTRICO, RETROVISORES ELÉTRICOS, FARÓIS DE NEBLINA E MUITO MAIS! FCAR VEÍCULOS BRASÍLIA, CIDADE DO AUTOMÓVEL, A QUARTA LOJA NA RUA DA ESTAÇÃO FIAT. FERNANDO (61) 3363 8070 98418 8070 (Vivo) WHATSAPP LOJA 99986 2186 (Vivo) ZAP</p>
              </v-row>
            </v-col>
        </v-row>
      </v-container>    
      <ModalCar  
           ref="modalImagem" 
          :fotos="fotos" 
          :modal-open="modalOpen" 
          @update:modalOpen="modalOpen = $event"
          :current-photo-index="currentPhotoIndex"
          @close-modal="closeModal">
    </ModalCar>
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
            currentIndex: 0,
            modalOpen: false,
            carro:'',
            currentPhotoIndex: null,
            thumbnailIndex: 0, // Índice da miniatura selecionada
            statusMenu: true,
            fotos: [],
            opcionais:[],
            menuHeight: '', // Inicialmente a altura do menu é 0
            showMessage:false,
      };
    },
      methods: {
        updateMainPhoto(index) {
            this.currentIndex = index;
        },
        openModal(index) {
          this.modalOpen = true;
          this.currentPhotoIndex = index;
          this.$refs.modalImagem.$el.style.zIndex = 9999;
        },
        closeModal() {
          this.modalOpen = false;
        },
        handleMenuNavHeight(height) {
          console.log(height,'height')
            const offest = 40
            this.menuHeight = height + offest;
        },
        copyUrl() {
          // Cria um elemento de input dinamicamente
          const input = document.createElement('input');
          // Define o valor do input como a URL atual
          input.value = window.location.href;
          // Adiciona o input ao DOM, mas fora da tela visível
          document.body.appendChild(input);
          // Seleciona todo o texto no input
          input.select();
          // Copia o texto selecionado para a área de transferência
          document.execCommand('copy');
          // Remove o input do DOM
          document.body.removeChild(input);
          // Mostra uma mensagem de sucesso (opcional)
          // Mostra a mensagem de sucesso por um curto período de tempo
          this.showMessage = true;
          setTimeout(() => {
            this.showMessage = false;
          }, 2000); // Tempo em milissegundos (2 segundos no exemplo)
        }
      },
      computed: {
      },
      mounted() {
          const carId = this.$route.params.id;
           //Chamada API
          axios.get('https://www.gois.inf.br/easycar/feed/estoque_filter.php?loja=8103')
              .then(response => {
                  window.scrollTo(0, 0); //retorna a topo da página
                  this.cars = response.data;
                  //console.log(this.cars,'this.cars')
                  const indice = this.cars.findIndex(carro => carro.id === carId);
                  if (indice !== -1) {
                      //console.log(`Índice encontrado para a marca ${textoFormatado}: ${indice}`);
                      this.carro = this.cars[indice]
                      console.log(this.carro,'carro')
                      this.fotos = this.cars[indice].fotos.foto
                      this.opcionais = this.cars[indice].opcionais.opcional
                  } else {
                      //console.log(`Marca ${textoFormatado} não encontrada.`);
                  }
                  
              })
              .catch(error => {
                  console.error('Erro ao buscar dados do servidor:', error);
              });

            //Código Mini carrrosssel
            const carousel = document.querySelector(".carousel")
            const arrowIcons = document.querySelectorAll(".wrapper i")
            let firstImg
            //Aguardar as imagens ficarem disponiveis no dom
            const observer = new MutationObserver(() => {
                  firstImg = carousel.querySelectorAll(".wrapper img")[0];
                    this.loading = false;
                  const showHideIcons = () => {
                      // showing and hiding prev/next icon according to carousel scroll left value
                      let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
                      arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
                      arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
                  }
                    if (firstImg) {
                      //clique botoes laterais
                      arrowIcons.forEach(icon => {
                          icon.addEventListener("click", () => {
                              let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
                              carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
                          });
                      });
                      observer.disconnect(); // Pare de observar as mutações depois de encontrar a primeira imagem
                    }
                  
              });
              observer.observe(document.body, { childList: true, subtree: true });
            //Funções para arrastar o carrossel
            let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
            const dragStart = (e) => {
                isDragStart = true
                prevPageX = e.pageX || e.touches[0].pageX
                prevScrollLeft = carousel.scrollLeft
                //prevPageX = e.pageX || e.touches[0].pageX;
                //prevScrollLeft = carousel.scrollLeft;
            }
            const dragging = (e) => {
                if(!isDragStart) return;
                  e.preventDefault();
                  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
                  carousel.scrollLeft = prevScrollLeft - positionDiff
                /* isDragging = true;
                  carousel.classList.add("dragging");
                  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
                  showHideIcons();*/
            }
            const dragStop = () => {
              isDragStart = false;
              
            }
            carousel.addEventListener("mousedown", dragStart);
            carousel.addEventListener("touchstart", dragStart);

            carousel.addEventListener("mousemove", dragging)
            carousel.addEventListener("touchmove", dragging);

            carousel.addEventListener("mouseup", dragStop);
            carousel.addEventListener("touchend", dragStop);
        },
    }
   
  </script>
  
  <style scoped>
  .carrossel-principal{
    width: 60%;
    height: 400px !important;
   
  }
  /*.box-carrossel .wrapper{
      padding: 0 35px;
  }*/
  .wrapper{
    display: flex;
    position: relative;
    width: 60%;
  }
  .wrapper .carousel{
    font-size: 0px;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    scroll-behavior: smooth;
  }
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
  .wrapper i{
    top: 50%;
    height: 44px;
    width: 44px;
    color: #343F4F;
    cursor: pointer;
    font-size: 1.15rem;
    position: absolute;
    text-align: center;
    line-height: 42px;
    background: #fff;
    border-radius: 50%;
    transform: translateY(-50%);
    transition: transform 0.1s linear;
    border: 1px solid  rgba(64, 64, 64, 1)
  }
  .wrapper i:first-child{
    left: 0px;
  }
  .wrapper i:last-child{
    right: 0px;
  }
  .car-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.car-info-container {
  max-height: 70vh; /* Define a altura máxima para o contêiner */
  overflow-y: auto; /* Adiciona uma barra de rolagem vertical quando o conteúdo ultrapassa a altura máxima */
}
.car-info-item{
    text-align: center;
    margin: 5px;
    padding: 5px;
    background-color: #f0f0f0;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
}
.car-info-item i{
    margin-right: 15px;
    font-size: 24px;
    color:#FF4225
}

.title{
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   padding: 10px;
   margin-bottom: 20px
}
.preco-titulo{
   margin-left: 5%;
   color:#FF4225;
   font-weight: 900;
   
}
.margin-section{
    margin-top: 120px;
}
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Garante que o loader esteja acima do conteúdo */
}

.observacao{
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
  padding: 20px
}
.observacao p{
  text-align: center !important;
  width: 100%;
}
.car-info-container::-webkit-scrollbar {
  width: 8px; /* Largura da barra de rolagem */
  
}

.car-info-container::-webkit-scrollbar-thumb {
  background-color: #8c8c8c; /* Cor do puxador da barra de rolagem */
  border-radius: 6px; /* Borda arredondada do puxador */
  
}

.car-info-container::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* Cor de fundo da barra de rolagem */
 
}
.title h2 {
  position: relative; /* Para permitir o posicionamento absoluto da borda */
}

.title h2::after {
  content: ""; /* Adiciona um conteúdo vazio */
  position: absolute; /* Posicionamento absoluto em relação ao h2 */
  left: -10px; /* Alinha à esquerda */
  bottom: 0; /* Alinha na parte inferior */
  width: 100%; /* Largura total */
  height: 2px; /* Altura da borda */
  background-image: linear-gradient(to left, rgba(255, 255, 255, 0), #FF4225); /* Degradê da borda */
}

/* Estilo para o ícone de compartilhamento */
.share-link {
  display: inline-block;
  font-size: 25px;
  color: #FF4225; /* Cor do ícone */
  text-decoration: none;
  margin-left: 3%;
}

/* Ajustes de aparência ao passar o mouse sobre o ícone */
.share-link:hover {
  color:  #FF4205; /* Cor alterada ao passar o mouse */
}

.success-message {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border-radius: 5px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000; /* Para garantir que esteja acima de outros elementos */
}
.v-breadcrumbs{
  display: block
}
.breadcrumbs {
  font-size: 18px;
  text-align: center !important; /* Centralizar horizontalmente */
  background-image: linear-gradient(to left, #ffffff, #f8f9fa); /* Adicionar um degradê */
  padding-bottom: 10px; /* Espaçamento na parte inferior */
}


@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
  @media screen and (max-width: 900px) {
    .carousel img{
      width: calc(100% / 2);
      height: 200px;
    }
 
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
  