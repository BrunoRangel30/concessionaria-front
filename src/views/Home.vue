<!-- src/components/Carrossel.vue -->

<template>
    <v-app >
        <MenuNav/>
        <Carrossel/>
        <v-container class="search-container mt-5" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="6" md="4" lg="3">
                    <!-- Campo de pesquisa -->
                    <v-text-field
                    v-model="searchQuery"
                    label="Pesquisar por nome"
                    outlined
                    clearable
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="3">
                    <!-- Filtro por marca -->
                    <v-autocomplete
                    v-model="selectedBrand"
                    :items="brands"
                    label="Filtrar por marca"
                    outlined
                    clearable
                    ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="3">
                    <!-- Filtro por modelo -->
                    <v-autocomplete
                    v-model="selectedModel"
                    :items="models"
                    label="Filtrar por modelo"
                    outlined
                    clearable
                    ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="3">
                    <!-- Filtro por preço -->
                    <v-select
                    v-model="selectedPrice"
                    :items="prices"
                    label="Filtrar por preço"
                    outlined
                    clearable
                    ></v-select>
                </v-col>
            </v-row>
        </v-container>
        <v-container >
            <v-row justify="center">
                <v-row justify="end">
                    <v-btn @click="setViewMode('single')" icon>
                    <v-icon>mdi-view-dashboard</v-icon>
                    </v-btn>
                    <v-btn @click="setViewMode('grid-4')" icon>
                    <v-icon>mdi-view-grid</v-icon>
                    </v-btn>
                    <v-btn @click="setViewMode('grid-3')" icon>
                    <v-icon>mdi-view-module</v-icon>
                    </v-btn>
                    <v-btn @click="setViewMode('grid-2')" icon>
                    <v-icon>mdi-view-quilt</v-icon>
                    </v-btn>
                </v-row>
            </v-row>
        </v-container  >
        <CarCard :cars="filteredCars"  :viewMode="viewMode"></CarCard>
    </v-app>
  </template>
  
  <script>
  
  import MenuNav from '@/components/Menu.vue';
  import Carrossel from '@/components/Carrossel.vue';
  import CarCard from '@/components/CardCar.vue';
  
  export default {
        components: {
            MenuNav,
            Carrossel,
            CarCard
        },
        data() {
            return {
                searchQuery: '',
                selectedBrand: null,
                selectedModel: null,
                selectedPrice: null,
                brands: ['Brand 1', 'Brand 2', 'Brand 3'],
                models: ['Model 1', 'Model 2', 'Model 3'],
                prices: ['Low', 'Medium', 'High'],
                cars: [
                    {
                        id: 1,
                        name: 'Carro A',
                        brand: 'Marca 1',
                        year: 2022,
                        version: 'Versão 1',
                        price: 25000,
                        imageUrl: '../src/assets/img/carro4.jpeg'
                    },
                    {
                        id: 2,
                        name: 'Carro B',
                        brand: 'Marca 2',
                        year: 2021,
                        version: 'Versão 2',
                        price: 30000,
                        imageUrl: '../src/assets/img/carro5.jpeg'
                    },
                    {
                        id: 3,
                        name: 'Carro C',
                        brand: 'Marca 1',
                        year: 2020,
                        version: 'Versão 3',
                        price: 20000,
                        imageUrl: '../src/assets/img/carro5.jpeg'
                    },
                    {
                        id: 4,
                        name: 'Carro d',
                        brand: 'Marca 2',
                        year: 2020,
                        version: 'Versão 4',
                        price: 20000,
                        imageUrl: '../src/assets/img/carro4.jpeg'
                    },
                    {
                        id: 5,
                        name: 'Carro e',
                        brand: 'Marca 5',
                        year: 2020,
                        version: 'Versão 4',
                        price: 20000,
                        imageUrl: '../src/assets/img/carro4.jpeg'
                    },
                    {
                        id: 6,
                        name: 'Carro 6',
                        brand: 'Marca 6',
                        year: 2020,
                        version: 'Versão 4',
                        price: 20000,
                        imageUrl: '../src/assets/img/carro4.jpeg'
                    },
                    {
                        id: 7,
                        name: 'Carro 7',
                        brand: 'Marca 7',
                        year: 2020,
                        version: 'Versão 7',
                        price: 20000,
                        imageUrl: '../src/assets/img/carro4.jpeg'
                    },
                 ],
                 viewMode: 'single' // Defina isso com base na visualização do usuário
            };
        },
        computed: {
            filteredCars() {
                // Lógica para filtrar os carros com base nos filtros da pesquisa
                return this.cars;
            },
          /*  isSingleView() {
                return this.viewMode === 'single';
            },
            isGrid4View() {
                return this.viewMode === 'grid-4';
            },
            isGrid3View() {
                return this.viewMode === 'grid-3';
            },
            isGrid2View() {
                return this.viewMode === 'grid-2';
            }*/
        },
        methods: {
            setViewMode(mode) {
                 this.viewMode = mode;
            }
        }
}
  </script>
  
  <style scoped>
  /* Estilos específicos para o componente Carrossel */
   
  </style>
  