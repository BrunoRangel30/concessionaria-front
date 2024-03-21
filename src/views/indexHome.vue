<!-- src/components/Carrossel.vue -->

<template>
    <v-app >
        <MenuNav :modoMeu="false"/>
        <Carrossel/>
        <v-container class="search-container mt-5 mb-5" fluid>
            <v-row>
                <v-col cols="12" sm="6" md="4" lg="4" :class="{'d-none d-md-block': isMobile}">
                    <!-- Campo de pesquisa -->
                    <v-text-field
                    v-model="searchQuery"
                    label="Pesquisar por nome"
                    outlined
                    clearable
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="4" :class="{'d-none d-md-block': isMobile}">
                    <!-- Filtro por marca -->
                    <v-autocomplete
                    v-model="selectedBrand"
                    :items="brands"
                    label="Filtrar por marca"
                    outlined
                    clearable
                    ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="4" :class="{'d-none d-md-block': isMobile}">
                    <v-autocomplete
                        v-model="selectedOrder"
                        :items="orderOptions"
                        label="Ordenar por"
                        item-value="value"
                    ></v-autocomplete>
                </v-col>
                <!--mobile-->
                <v-container v-if="isMobile" class="search-containe menu-inicial-cel" id="fixed-menu" fluid>
                    <v-col cols="12" :class="{'ml-auto': isMobile}">
                        <v-row class="conf-col">
                            <v-col cols="10" class="icone-color">
                                <v-autocomplete
                                        v-model="selectedOrder"
                                        :items="orderOptions"
                                        label="Ordenar por"
                                        item-value="value"
                                        outlined
                                        clearable
                                        v-if="isMobile"
                                        class="custom-font-color"
                                >
                                </v-autocomplete>
                            </v-col>
                            <v-col  cols="2" class="d-flex  justify-center align-center" >
                            <!-- Ícone de menu para dispositivos móveis -->
                                <v-icon
                                    v-if="isMobile"
                                    @click="toggleSearchFilters"
                                    color="#FF4225"
                                    size="32"
                                >
                                    {{ showSearchFilters ? 'mdi-close' : 'mdi-filter' }}
                                </v-icon>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-container>
                <!-- Campos de pesquisa e filtro para dispositivos móveis -->
                <v-col v-if="showSearchFilters" cols="12" class="py-3 fixed-menu-aba-inicial" id="fixed-menu-aba" >
                    <v-text-field
                        v-model="searchQuery"
                        label="Pesquisar por nome"
                        outlined
                        clearable>
                    </v-text-field>
                        <!-- Filtro por marca -->
                    <v-autocomplete
                            v-model="selectedBrand"
                            :items="brands"
                            label="Filtrar por marca"
                            outlined
                            clearable
                            witch='50%'>
                    </v-autocomplete>
                </v-col> 
            </v-row>
        </v-container>
        <v-container class="mb-5 mr-5" v-if="viewModeShow" >
            <v-row>
                <v-row justify="end">
                    <v-btn v-if="single" class="mr-3" @click="setViewMode('single')" icon>
                        <span class="mdi mdi-rectangle"></span>
                    </v-btn>
                    <v-btn  v-if="grid2" class="mr-3" @click="setViewMode('grid-2')" icon>
                        <v-icon>mdi-view-grid</v-icon>
                    </v-btn>
                    <v-btn  v-if="grid3" class="mr-3" @click="setViewMode('grid-3')" icon>
                        <v-icon>mdi-view-module</v-icon>
                    </v-btn>
                    <v-btn v-if="grid4" @click="setViewMode('grid-4')" icon>
                        <span class="mdi mdi-view-grid-plus"></span>
                    </v-btn>
                </v-row>
            </v-row>
        </v-container>
        <CarCard :cars="filteredCars"  :viewMode="viewMode"></CarCard>
         <!-- Componente de paginação -->
        <div class="text-center mt-5">
            <v-pagination
                    v-model="currentPage"
                    :length="totalPages"
                    rounded="circle"
                    @input="updatePage"
            >
            </v-pagination>
        </div>
        <Rodape class="margin-section"/>
    </v-app>
  </template>
  <script>
  import MenuNav from '@/components/Menu.vue';
  import Carrossel from '@/components/Carrossel.vue';
  import CarCard from '@/components/CardCar.vue';
  import Rodape from '@/components/Footer.vue';
  import axios from 'axios';
  export default {
        components: {
            MenuNav,
            Carrossel,
            CarCard,
            Rodape,
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
                viewModeShow: '',
                single:true,
                grid2:true,
                grid3:true,
                grid4:true,
                result: '',
                ViewPadrao: 'grid-4',
                viewAux : 'grid-4',
                pageSize: 10, // Tamanho da página
                currentPage: 1, // Página atual
                totalPage: 0,
                isMobile: false,
                showSearchFilters: false,
                isFixed: false,
                initialPosition: 0,
            };
        },
        computed: {
            filteredCars() {
                //console.log('fui chmado')
                let filteredCars = this.cars;
               // this.viewMode = this.viewMode ;
                //paginação
                const pageSize = this.pageSize; // Defina o tamanho da página
                const currentPage = this.currentPage; // Obtenha a página atual
                const start = (currentPage - 1) * pageSize;
                const end = start + pageSize;
               //Pesquisa
               if (this.searchQuery && this.searchQuery.length >= 3) {
                    filteredCars = filteredCars.filter(car => {
                        
                        const brandMatch = car.marca.toLowerCase().includes(this.searchQuery.toLowerCase());
                        const modelMatch = car.modelo.toLowerCase().includes(this.searchQuery.toLowerCase());
                        return brandMatch || modelMatch; 
                    });
                }
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
                //atualiza o total de páginas com ou sem fitro
                this.totalPage = filteredCars.length
                
                const qdtMaxCardRow = 4
                let  paginatedCars
                //determina o modo de visualizaco depedendo da quantidade de cards
                if(filteredCars.length != 0 && filteredCars.length <= qdtMaxCardRow){
                   // this.viewAux =  this.viewMode
                    paginatedCars =  filteredCars
                    this.viewMode = 'single'
                    this.single = false
                    this.grid2= false
                    this.grid3= false
                    this.grid4= false
                }else{
                    paginatedCars = filteredCars.slice(start, end)
                    this.viewMode =  this.viewAux
                   // this.checkScreenSize()
                    this.single = true
                    this.grid2= true
                    this.grid3= true
                    this.grid4= true
                }
                return paginatedCars;
            },
            totalPages() {
                // Calcular o número total de páginas com base no tamanho da página e no número de carros
                return Math.ceil(this.totalPage / this.pageSize);
            },
           
        },
        methods: {
            toggleSearchFilters() {
                this.showSearchFilters = !this.showSearchFilters;
            },
            setViewMode(mode) {
                 this.viewMode = mode;
                 this.viewAux =mode
            },
            scrollToElement(id) {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            },
            checkScreenSize() {
                this.isMobile = window.innerWidth <= 768;
                const mobileScreenSize = 600;
                this.viewMode = window.innerWidth < mobileScreenSize ? 'single' : this.ViewPadrao;
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
            },
            updatePage(page) {
                // Atualizar a página atual quando o usuário clicar em uma página específica na paginação
                this.currentPage = page;
            },
            
            handleScroll() {
                const menu = document.querySelector('#fixed-menu');
                const aba = document.querySelector('#fixed-menu-aba');
                var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollPosition  > menu.offsetTop) {
                    menu.classList.add('fixed-menu');
                    if(aba){
                        aba.classList.add('fixed-menu-aba');
                    }
                } else  {
                    if(aba){
                        aba.classList.remove('fixed-menu-aba');
                    }
                    menu.classList.remove('fixed-menu');
                }
            },
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
            this.checkScreenSize()
            window.addEventListener('resize', this.checkScreenSize); // Ouve o evento resize
             window.addEventListener('scroll', this.handleScroll);
            
           // this.$root.$on('navigate-to', this.scrollToElement);
        },
        beforeDestroy() {
             window.removeEventListener('resize', this.checkScreenSize); // Remove o ouvinte de evento antes de destruir o componente
             this.$root.$off('navigate-to', this.scrollToElement);
             window.removeEventListener('scroll', this.handleScroll);
        },
}
  </script>
  
  <style scoped>
    /* Estilos específicos para o componente Carrossel */
    .margin-section{
        margin-top: 120px;
    }

    .conf-col .v-col{
        padding:0px !important;
    }

    .conf-col ::v-deep .v-text-field .v-input__details{
        display: none ;
    }

    .menu-inicial-cel{
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
        border-radius: 10px 10px 10px 10px;
        background-color: rgba(64, 64, 64, 1) ;
    }
    .fixed-menu {
        position: fixed;
        top: 85px;
        background-color: rgba(64, 64, 64, 1) ;
        right: 0;
        z-index: 1000;
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
        border-radius: 0px 0px 10px 10px;
    }
    .fixed-menu-aba {
        position: fixed;
        top: 170px;
        background-color: #FFFF ;
        right: 0;
        z-index: 1000;
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
        border-radius: 0px 0px 10px 10px;
    }

    .fixed-menu-aba-inicial{
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
        border-radius: 0px 0px 10px 10px;
        background-color: #FFFF ;
    }

    .custom-font-color {
        font-size: 12px; /* Ajuste o tamanho da fonte conforme desejado */
    }

    .custom-font-color ::v-deep .v-label.v-field-label {
        color: #FFFF; 
    }

    .custom-font-color  ::v-deep .v-field__input{
        color: #FFFF !important; 
    }

    .icone-color  ::v-deep .v-autocomplete__menu-icon{
        color: #FFFF !important; 
    }

    .icone-color  ::v-deep .v-icon--clickable{
        color: #FFFF !important; 
    }

    .icone-color  .v-field__outline{
        color: #FFFF !important; 
    }

   /* .menu-inicial-cel   .v-overlay-container .v-listem {
        font-size: 9px 
        border: 2px solid red;
    }*/

 
  </style>
  