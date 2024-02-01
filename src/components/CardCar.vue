<!-- src/components/CarCard.vue -->
<template>
  <v-container>
      <template v-if="viewMode === 'single'">
      <v-row v-for="car in cars" :key="car.id">
        <v-col cols="6">
          <!-- Conteúdo da primeira coluna (imagem) -->
          <v-img :src="car.imageUrl" height="200"></v-img>
        </v-col>

        <v-col cols="6">
          <!-- Conteúdo da segunda coluna (descrição) -->
          <v-card-subtitle class="car-title">{{ car.name }}</v-card-subtitle>
          <v-card-subtitle class="car-brand">{{ car.brand }}</v-card-subtitle>
          <v-card-subtitle class="car-year">{{ car.year }}</v-card-subtitle>
          <v-card-subtitle class="car-version">{{ car.version }}</v-card-subtitle>
          <v-card-subtitle class="car-price">${{ car.price }}</v-card-subtitle>
        </v-col>
      </v-row>
    </template>
    <!--Grid 2-->
    <template v-if="viewMode === 'grid-2'">
      <v-row v-for="(car, index) in cars" :key="index">
        <!-- Verifica se é uma linha par -->
        <v-col v-if="index % 2 === 0" cols="12">
          <v-row>
            <!-- Card 1 -->
            <v-col cols="6" v-if="index < cars.length">
              <v-card>
                <v-img :src="cars[index].imageUrl" height="200"></v-img>
                <v-card-subtitle class="car-title">{{ cars[index].name }}</v-card-subtitle>
                <v-card-subtitle class="car-brand">{{ cars[index].brand }}</v-card-subtitle>
                <v-card-subtitle class="car-year">{{ cars[index].year }}</v-card-subtitle>
                <v-card-subtitle class="car-version">{{ cars[index].version }}</v-card-subtitle>
                <v-card-subtitle class="car-price">${{ cars[index].price }}</v-card-subtitle>
              </v-card>
            </v-col>

            <!-- Card 2 -->
            <v-col cols="6" v-if="index + 1 < cars.length">
              <v-card>
                <v-img :src="cars[index + 1].imageUrl" height="200"></v-img>
                <v-card-subtitle class="car-title">{{ cars[index + 1].name }}</v-card-subtitle>
                <v-card-subtitle class="car-brand">{{ cars[index + 1].brand }}</v-card-subtitle>
                <v-card-subtitle class="car-year">{{ cars[index + 1].year }}</v-card-subtitle>
                <v-card-subtitle class="car-version">{{ cars[index + 1].version }}</v-card-subtitle>
                <v-card-subtitle class="car-price">${{ cars[index + 1].price }}</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </template>
    <!--Grid 3-->
    <template v-if="viewMode === 'grid-3'">
      <v-row v-for="(car, index) in cars" :key="index">
        <!-- Verifica se é uma linha múltiplo de 3 -->
        <v-col v-if="index % 3 === 0" cols="12">
          <v-row>
            <!-- Card 1 -->
            <v-col cols="4" v-if="index < cars.length">
              <v-card>
                <v-img :src="cars[index].imageUrl" height="200"></v-img>
                <v-card-subtitle class="car-title">{{ cars[index].name }}</v-card-subtitle>
                <v-card-subtitle class="car-brand">{{ cars[index].brand }}</v-card-subtitle>
                <v-card-subtitle class="car-year">{{ cars[index].year }}</v-card-subtitle>
                <v-card-subtitle class="car-version">{{ cars[index].version }}</v-card-subtitle>
                <v-card-subtitle class="car-price">${{ cars[index].price }}</v-card-subtitle>
              </v-card>
            </v-col>

            <!-- Card 2 -->
            <v-col cols="4" v-if="index + 1 < cars.length">
              <v-card>
                <v-img :src="cars[index + 1].imageUrl" height="200"></v-img>
                <v-card-subtitle class="car-title">{{ cars[index + 1].name }}</v-card-subtitle>
                <v-card-subtitle class="car-brand">{{ cars[index + 1].brand }}</v-card-subtitle>
                <v-card-subtitle class="car-year">{{ cars[index + 1].year }}</v-card-subtitle>
                <v-card-subtitle class="car-version">{{ cars[index + 1].version }}</v-card-subtitle>
                <v-card-subtitle class="car-price">${{ cars[index + 1].price }}</v-card-subtitle>
              </v-card>
            </v-col>

            <!-- Card 3 -->
            <v-col cols="4" v-if="index + 2 < cars.length">
              <v-card>
                <v-img :src="cars[index + 2].imageUrl" height="200"></v-img>
                <v-card-subtitle class="car-title">{{ cars[index + 2].name }}</v-card-subtitle>
                <v-card-subtitle class="car-brand">{{ cars[index + 2].brand }}</v-card-subtitle>
                <v-card-subtitle class="car-year">{{ cars[index + 2].year }}</v-card-subtitle>
                <v-card-subtitle class="car-version">{{ cars[index + 2].version }}</v-card-subtitle>
                <v-card-subtitle class="car-price">${{ cars[index + 2].price }}</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </template>
 <!--Grid 4-->
  </v-container>
   <v-container fluid>
        <template v-if="viewMode === 'grid-4'">
          <v-row v-for="(car, index) in cars" :key="index">
            <!-- Verifica se é uma linha múltiplo de 4 -->
            <v-col v-if="index % 4 === 0" cols="12">
              <v-row>
                <!-- Card 1 -->
                <v-col cols="3" v-if="index < cars.length">
                  <v-card>
                    <v-img :src="cars[index].imageUrl" height="200"></v-img>
                    <v-card-subtitle class="car-title">{{ cars[index].name }}</v-card-subtitle>
                    <v-card-subtitle class="car-brand">{{ cars[index].brand }}</v-card-subtitle>
                    <v-card-subtitle class="car-year">{{ cars[index].year }}</v-card-subtitle>
                    <v-card-subtitle class="car-version">{{ cars[index].version }}</v-card-subtitle>
                    <v-card-subtitle class="car-price">${{ cars[index].price }}</v-card-subtitle>
                  </v-card>
                </v-col>

                <!-- Card 2 -->
                <v-col cols="3" v-if="index + 1 < cars.length">
                  <v-card>
                    <v-img :src="cars[index + 1].imageUrl" height="200"></v-img>
                    <v-card-subtitle class="car-title">{{ cars[index + 1].name }}</v-card-subtitle>
                    <v-card-subtitle class="car-brand">{{ cars[index + 1].brand }}</v-card-subtitle>
                    <v-card-subtitle class="car-year">{{ cars[index + 1].year }}</v-card-subtitle>
                    <v-card-subtitle class="car-version">{{ cars[index + 1].version }}</v-card-subtitle>
                    <v-card-subtitle class="car-price">${{ cars[index + 1].price }}</v-card-subtitle>
                  </v-card>
                </v-col>

                <!-- Card 3 -->
                <v-col cols="3" v-if="index + 2 < cars.length">
                  <v-card>
                    <v-img :src="cars[index + 2].imageUrl" height="200"></v-img>
                    <v-card-subtitle class="car-title">{{ cars[index + 2].name }}</v-card-subtitle>
                    <v-card-subtitle class="car-brand">{{ cars[index + 2].brand }}</v-card-subtitle>
                    <v-card-subtitle class="car-year">{{ cars[index + 2].year }}</v-card-subtitle>
                    <v-card-subtitle class="car-version">{{ cars[index + 2].version }}</v-card-subtitle>
                    <v-card-subtitle class="car-price">${{ cars[index + 2].price }}</v-card-subtitle>
                  </v-card>
                </v-col>

                <!-- Card 4 -->
                <v-col cols="3" v-if="index + 3 < cars.length">
                  <v-card>
                    <v-img :src="cars[index + 3].imageUrl" height="200"></v-img>
                    <v-card-subtitle class="car-title">{{ cars[index + 3].name }}</v-card-subtitle>
                    <v-card-subtitle class="car-brand">{{ cars[index + 3].brand }}</v-card-subtitle>
                    <v-card-subtitle class="car-year">{{ cars[index + 3].year }}</v-card-subtitle>
                    <v-card-subtitle class="car-version">{{ cars[index + 3].version }}</v-card-subtitle>
                    <v-card-subtitle class="car-price">${{ cars[index + 3].price }}</v-card-subtitle>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
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
    };
  },
  computed: {
   
  },
  methods: {
    
    
   
  
   
  }
};
</script>

<style scoped>
/* Estilos específicos para o componente, se necessário */
.car-card {
  width: 100%; /* Ajuste conforme necessário */
  margin: 10px;
}

.car-title,
.car-brand,
.car-year,
.car-version,
.car-price {
  text-align: center;
  font-weight: bold;
}
</style>
