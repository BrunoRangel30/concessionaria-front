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
                    <v-autocomplete
                        v-model="selectedOrder"
                         :items="orderOptions"
                        label="Ordenar por"
                        item-value="value"
                        outlined
                        clearable
                        
                    ></v-autocomplete>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="mb-5" v-if="viewModeShow">
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
                selectedOrder: null, // Opção de ordenação selecionada pelo usuário
                //selectedPrice: null,
                brands: [],
                cars: [],
                orderOptions: [
                   'Preço (Menor para Maior)',
                    'Preço (Maior para Menor)',
                    'Alfabética (A-Z)',
                    'Alfabética (Z-A)',
                    'Ano (Mais Recente para Mais Antigo)',
                    'Ano (Mais Antigo para Mais Recente)',
                    'Data de Publicação (Mais Recente para Mais Antiga)',
                    'Data de Publicação (Mais Antiga para Mais Recente)',
                    
                ],
                orderOptionsAux: [ // Opções de ordenação para o v-autocomplete
                    { text: 'Preço (Menor para Maior)', value: 'priceAsc' },
                    { text: 'Preço (Maior para Menor)', value: 'priceDesc' },
                    { text: 'Alfabética (A-Z)', value: 'alphaAsc' },
                    { text: 'Alfabética (Z-A)', value: 'alphaDesc' },
                    { text: 'Ano (Mais Antigo para Mais Recente)', value: 'yearAsc' },
                    { text: 'Ano (Mais Recente para Mais Antigo)', value: 'yearDesc' },
                    { text: 'Data de Publicação (Mais Antiga para Mais Recente)', value: 'dateAsc' },
                    { text: 'Data de Publicação (Mais Recente para Mais Antiga)', value: 'dateDesc' },
                ],
                viewMode: '' ,
                viewModeShow: '' // Defina isso com base na visualização do usuário
            };
        },
        computed: {
      
           
            filteredCars() {
                let filteredCars = this.cars;
                // Filtrar por marca
                if (this.selectedBrand) {
                    filteredCars = filteredCars.filter(car => car.marca === this.selectedBrand);
                }
                if (this.selectedBrand) {
                    filteredCars = filteredCars.filter(car => car.marca === this.selectedBrand);
                }
                if(this.selectedOrder){
                    const selectedLabel = this.selectedOrder
                    const selectedOption = this.orderOptionsAux.find(option => option.text === selectedLabel)
                    switch (selectedOption.value) {
                        case 'priceAsc':
                            console.log('priceAsc')
                           filteredCars = this.sortByPriceAsc(filteredCars);
                           break
                        case 'priceDesc':
                            console.log('priceDesc')
                            filteredCars = this.sortByPriceDesc(filteredCars);
                           break
                        case 'alphaAsc':
                            console.log('alphaAsc')
                            filteredCars = this.sortByAlphabeticalAscending(filteredCars);
                           break
                        case 'alphaDesc':
                            console.log('alphaDesc')
                            filteredCars = this.sortByAlphabeticalDesc(filteredCars);
                        break 
                        case 'yearAsc':
                            console.log('yearAsc')
                            filteredCars = this.yearAsc(filteredCars);
                        break
                        case 'yearDesc':
                            console.log('yearDesc')
                            filteredCars = this.yearDesc(filteredCars);
                        break
                        case 'dateDesc':
                            console.log('dateDesc')
                            filteredCars = this.dateDesc(filteredCars);
                        break
                        case 'dateAsc':
                            console.log('dateAsc')
                            filteredCars = this.dateAsc(filteredCars);
                        break
                        default:
                           // return this.cars;
                    }
                }
                return filteredCars;
            },
           
        },
        methods: {
            setViewMode(mode) {
                 this.viewMode = mode;
            },
            checkScreenSize() {
                const mobileScreenSize = 600;
                this.viewMode = window.innerWidth < mobileScreenSize ? 'single' : 'grid-4';
                this.viewModeShow = window.innerWidth < mobileScreenSize ? false : true;

            },
            //Ordenacao
            sortByPriceAsc(filteredCars) {
                const newArray = [...filteredCars];
                for (let i = 0; i < newArray.length - 1; i++) {
                    for (let j = 0; j < newArray.length - i - 1; j++) {
                        const valueA = parseFloat(newArray[j].valor);
                        const valueB = parseFloat(newArray[j + 1].valor);
                         // Compara os valores e troca de posição se necessário
                        if (valueA > valueB) {
                            const temp = newArray[j];
                            newArray[j] = newArray[j + 1];
                            newArray[j + 1] = temp;
                        }
                    }
                }
               return newArray
            },
            sortByPriceDesc(filteredCars) {
                const newArray = [...filteredCars];
                for (let i = 0; i < newArray.length - 1; i++) {
                    for (let j = 0; j < newArray.length - i - 1; j++) {
                        const valueA = parseFloat(newArray[j].valor);
                        const valueB = parseFloat(newArray[j + 1].valor);
                         // Compara os valores e troca de posição se necessário
                        if (valueB > valueA) {
                            const temp = newArray[j];
                            newArray[j] = newArray[j + 1];
                            newArray[j + 1] = temp;
                        }
                    }
                }
               return newArray
            },
            sortByAlphabeticalAscending(filteredCars) {
                const newArray = [...filteredCars];
                for (let i = 0; i < newArray.length - 1; i++) {
                    for (let j = i + 1; j < newArray.length; j++) {
                        const valueA = newArray[i].modelo.toLowerCase();
                        const valueB = newArray[j].modelo.toLowerCase();
                        if (valueA > valueB) {
                            const temp = newArray[i];
                            newArray[i] = newArray[j];
                            newArray[j] = temp;
                        }
                    }
                }
                return newArray;
            },
            sortByAlphabeticalDesc(filteredCars) {
                const newArray = [...filteredCars];
                for (let i = 0; i < newArray.length - 1; i++) {
                    for (let j = i + 1; j < newArray.length; j++) {
                        const valueA = newArray[i].modelo.toLowerCase();
                        const valueB = newArray[j].modelo.toLowerCase();
                        if (valueB > valueA) {
                            const temp = newArray[i];
                            newArray[i] = newArray[j];
                            newArray[j] = temp;
                        }
                    }
                }
                return newArray;
            },
            yearAsc(filteredCars){
                const newArray = [...filteredCars];
                for (let i = 0; i < newArray.length - 1; i++) {
                    for (let j = i + 1; j < newArray.length; j++) {
                        const valueA = newArray[i].anoFabricacao.toLowerCase();
                        const valueB = newArray[j].anoFabricacao.toLowerCase();
                        if (valueA > valueB) {
                            const temp = newArray[i];
                            newArray[i] = newArray[j];
                            newArray[j] = temp;
                        }
                    }
                }
                return newArray;
            },
            yearDesc(filteredCars){
                const newArray = [...filteredCars];
                for (let i = 0; i < newArray.length - 1; i++) {
                    for (let j = i + 1; j < newArray.length; j++) {
                        const valueA = newArray[i].anoFabricacao.toLowerCase();
                        const valueB = newArray[j].anoFabricacao.toLowerCase();
                        if (valueB > valueA) {
                            const temp = newArray[i];
                            newArray[i] = newArray[j];
                            newArray[j] = temp;
                        }
                    }
                }
                return newArray;
            },
            dateDesc(filteredCars){
                const newArray = [...filteredCars];
                const sortedArray = [];
                while (newArray.length > 0) {
                    // Encontra o índice do objeto com a data de última alteração mais recente
                    let latestIndex = 0;
                    for (let i = 1; i < newArray.length; i++) {
                        const dateA = new Date(newArray[i].dataUltimaAlteracao);
                        const dateLatest = new Date(newArray[latestIndex].dataUltimaAlteracao);
                        if (dateA > dateLatest) {
                            latestIndex = i;
                        }
                    }

                    // Remove o objeto com a data de última alteração mais recente do array original e adiciona ao array ordenado
                    const latestObject = newArray.splice(latestIndex, 1)[0];
                    sortedArray.push(latestObject);
                }

                // Retorna o array ordenado
                return sortedArray;
            },
            dateAsc(filteredCars){
                const newArray = [...filteredCars];
                const sortedArray = [];
                while (newArray.length > 0) {
                    // Encontra o índice do objeto com a data de última alteração mais recente
                    let oldestIndex  = 0;
                    for (let i = 1; i < newArray.length; i++) {
                        const dateA = new Date(newArray[i].dataUltimaAlteracao);
                        const dateOldest  = new Date(newArray[oldestIndex].dataUltimaAlteracao);
                        if (dateA  > dateOldest) {
                            oldestIndex  = i;
                        }
                    }

                    // Remove o objeto com a data de última alteração mais recente do array original e adiciona ao array ordenado
                    const oldestObject  = newArray.splice(oldestIndex, 1)[0];
                    sortedArray.push(oldestObject);
                }

                // Retorna o array ordenado
                return sortedArray;
            }
        },
        mounted() {
            axios.get('https://www.gois.inf.br/easycar/feed/estoque_filter.php?loja=8103')
            .then(response => {
                this.cars = response.data;
                this.brands = [...new Set(this.cars.map(car => car.marca))];
               // this.models = [...new Set(this.cars.map(car => car.modelo))];
                
            })
            .catch(error => {
                console.error('Erro ao buscar dados do servidor:', error);
            });
            this.checkScreenSize()
            window.addEventListener('resize', this.checkScreenSize); // Ouve o evento resize
        },
        beforeDestroy() {
             window.removeEventListener('resize', this.checkScreenSize); // Remove o ouvinte de evento antes de destruir o componente
        },
}
  </script>
  
  <style scoped>
  /* Estilos específicos para o componente Carrossel */
   
  </style>
  