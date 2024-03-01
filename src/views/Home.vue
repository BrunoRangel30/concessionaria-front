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
        <v-container class="mb-5">
            <v-row justify="center">
                <v-row justify="end">
                    <v-btn class="mr-3" @click="setViewMode('single')" icon>
                        <span class="mdi mdi-rectangle"></span>
                    </v-btn>
                    <v-btn class="mr-3" @click="setViewMode('grid-2')" icon>
                        <v-icon>mdi-view-grid</v-icon>
                    </v-btn>
                    <v-btn class="mr-3" @click="setViewMode('grid-3')" icon>
                        <v-icon>mdi-view-module</v-icon>
                    </v-btn>
                    <v-btn @click="setViewMode('grid-4')" icon>
                        <span class="mdi mdi-view-grid-plus"></span>
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
  import axios from 'axios';
  
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
                brands: [],
                models: [],
                prices: ['Low', 'Medium', 'High'],
                cars: [],
                 viewMode: 'single' // Defina isso com base na visualização do usuário
            };
        },
        computed: {
            filteredCars() {

                let filteredCars = this.cars;
                // Filtrar por marca
                if (this.selectedBrand) {
                    filteredCars = filteredCars.filter(car => car.marca === this.selectedBrand);
                }
        
                // Filtrar por modelo
                if (this.selectedModel) {
                    filteredCars = filteredCars.filter(car => car.modelo === this.selectedModel);
                }
        
                return filteredCars;
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
        },
        mounted() {
            axios.get('https://www.gois.inf.br/easycar/feed/estoque_filter.php?loja=8103')
            .then(response => {
                this.cars = response.data;
                this.brands = [...new Set(this.cars.map(car => car.marca))];
                this.models = [...new Set(this.cars.map(car => car.modelo))];
                
            })
            .catch(error => {
                console.error('Erro ao buscar dados do servidor:', error);
            });
  }
}
  </script>
  
  <style scoped>
  /* Estilos específicos para o componente Carrossel */
   
  </style>
  