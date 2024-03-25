<template>
    <v-section   class="background" padding-y="5">
      <v-container fluid="">
        <v-row>
          <v-col cols="12" md="6" class="center-div">
            <!-- Substitua a div abaixo com o mapa da sua localização -->
            <div id="map" class="map">
               <iframe class="mapa-iframe" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7678.505660895761!2d-47.9752891!3d-15.7906171!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1709822706132!5m2!1spt-BR!2sbr"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="info">
              <v-row >
                <v-col cols="12" class="text-center mb-4">
                  <!-- Insira o logo da sua empresa -->
                  <a href="/"><img align="left" src="../assets/img/logo.png" alt="Logo da Empresa" class="logo"></a>
                </v-col>
                <v-col cols="12">
                  <p class="address"> <span class="mdi mdi-map-marker icone-fonte"></span> Scia Qd.15 Conj.3 Lote:7 Cidade do Automóvel, BRASÍLIA - DF</p>
                  <p class="phone"><span class="mdi mdi-whatsapp icone-fonte"></span>Telefone: (00) 1234-5678</p>
                  <p class="horario"><span class="mdi mdi-clock-time-four-outline icone-fonte"></span> Horário de atendimento: Seg a sex - 8h às 18h | Sáb - 8h às 13h</p>
                  <div class="social-icons">
                    <!-- Ícones de redes sociais -->
                    <v-icon class="mr-2">mdi-facebook</v-icon>
                    <v-icon class="mr-2">mdi-twitter</v-icon>
                    <v-icon>mdi-instagram</v-icon>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <div class="footer">
        <p>Copyright © {{ data }}<span id="currentYear"></span> AutoCerto. Todos os direitos reservados.</p>
      </div>
    </v-section>
  </template>
  
  <script>
  export default {
    name: 'Rodape',
    data() {
        return {
          data: '', // Iniciar visível em telas maiores
        };
      },
      mounted() {
          const currentYear = new Date().getFullYear();
          this.data = currentYear
          
      },
  }
  //const currentYear = new Date().getFullYear();
  //document.getElementById('currentYear').textContent = currentYear;
  </script>
  
  <style scoped>
  /* Estilos específicos para o rodape */
  .background {
    position: relative;
    width: 100%;
    z-index: 1; /* Garante que a sessão esteja acima do plano de fundo */
     background-color: rgba(64, 64, 64, 1) !important;;
  }

  .map {
    width: 100%;
    height: 60vh; /* Ajuste conforme necessário */
  }
  .center-div{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .mapa-iframe{
    width: 100%;
    object-fit: cover !important;
    height: 100%;
    box-shadow: 0 .5rem 1rem rgba(172, 165, 165, 0.15);
  }
  
  .logo {
    max-width: 200px;
    height: auto;
    margin-bottom: 20px;
  }
  
  .address,
  .horario,
  .phone {
    color: #fff; /* Cor dos ícones */
    display: flex;
    align-items: center;
    width: 100%;
  }

  .icone-fonte{
    font-size: 2em;
    padding-right: 5px;
    color: #FF4225; /* Cor dos ícones */
  }
  
  .social-icons {
    display: flex;
    align-items: center;
    color: #FF4225; /* Cor dos ícones */
    /* margin-top: 10px */
    font-size: 1.5em;
  }

  .footer {
    text-align: center;
    border-top: 1px solid #ccc;
    padding: 10px 0;
    padding: 15px;
    color:#fff
  }

  </style>
  