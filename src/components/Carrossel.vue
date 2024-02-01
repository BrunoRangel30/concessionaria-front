<template>
        <v-carousel class="heightCarrrossel">
            <v-carousel-item
                src="../assets/img/carro3.jpg"
                cover
            ></v-carousel-item>

            <v-carousel-item
                src="../assets/img/carro2.webp"
                cover
            ></v-carousel-item>
           
        </v-carousel>
  </template>
  
  <script>
 
  export default {
    
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para o componente Carrossel */
  @media (min-width: 600px) {   
      .heightCarrrossel{
        height: 90vh !important;
      }
}
  </style>
  