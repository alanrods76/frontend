<template>
  
  <cargar-mapa
    :configMapa="configMapa"
    
  >
 
    <template slot-scope="{ google, map }">
      <Marcadores
        v-for="marker in markers"
        :key="marker.id"
        :marker="marker"
        :google="google"
        :map="map"
      />
    </template>
 
  </cargar-mapa>
  
</template>
 
<script>
 
  import CargarMapa from "./CargarMapa";
  import Marcadores from "./MarcadoresMapa";
  import { configMapa } from "../constans/configMapa.js";
  
  export default {
    components: {
      CargarMapa,
      Marcadores
    },
 
    data() {
      return {
        markers: [
          {
            id: "0",
            position: { lat: 4.653117, lng:-74.108930 },
            title: "Empresa"
          },
          
          
        ]
      };
    },
 
    computed: {
      configMapa() {
        return {
          ...configMapa,
          center: this.mapCenter
        };
      },
 
      mapCenter() {
        let position= { lat: 4.653117, lng:-74.108930 };
        return position;
      }
    }
  };
  
</script>