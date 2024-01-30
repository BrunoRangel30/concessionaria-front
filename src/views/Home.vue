<!-- concessionaria-front/src/views/Home.vue -->

<template>
    <div>
        <Nav/>
      <h1>Bem-vindo à Concessionária</h1>
      <!-- Conteúdo específico da página inicial -->
    </div>
  </template>
  
  <script>
  import Nav from './componentes/Nav.vue'; // Importando o componente Nav.vue
  export default {
    name: 'Home',
    components: {
        Nav, // Registrando o componente Nav.vue
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para o componente Home */
  </style>
  