<template>
  <div>
    <div class="mapa" ref="mapa"></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot :google="google" :map="map" />
    </template>
  </div>
</template>

<script>
import GoogleMaps from "google-maps-api-loader"
import axios from "axios";
export default {
    props: {
        configMapa: Object,
        //apiKey: String
    },

    data(){
        return{
            google: null,
            map: null,
        };
    },

    async mounted(){
        const googleMapApi = await GoogleMaps({
            apiKey: "AIzaSyAaUWjKLcEmhg-dLnGMeFGDZffqfpg3M7c"
        });
        this.google = googleMapApi;
        this.initializeMap();
    },

    methods: {
        async initializeMap(){
            var arregloRutasService=[];
            var arregloRutasRenderer = [];
            var tamano = 0;
            var objRutas = [];
            await axios.get("http://localhost:3000/api/mapa/cargarRutas").then(Response => {
                 tamano = Response.data.length;
                 objRutas = Object.entries(Response.data);
            });
            for(var i=0; i<tamano; i++){
                arregloRutasService.push(new google.maps.DirectionsService());
                arregloRutasRenderer.push(new google.maps.DirectionsRenderer());
            }
            const mapContainer = this.$refs.mapa;
            this.map = new this.google.maps.Map(mapContainer, this.configMapa);
            for (var i=0; i<tamano; i++){
                arregloRutasRenderer[i].setMap(this.map)
            }
            function calculateAndDisplayRoute(directionsService, directionsRenderer, start, destination) {
                directionsService.route({
                    origin: start,
                    destination: destination,
                    travelMode: 'DRIVING'
                }, 
                function(response, status) {
                    if (status === 'OK') {
                        directionsRenderer.setDirections(response);
                        console.log(response);
                    } else {
                        window.alert('Directions request failed due to ' + status);
                    }
                });
            }
            
            for (var i=0; i<tamano; i++){
                
                calculateAndDisplayRoute(arregloRutasService[i], arregloRutasRenderer[i], objRutas[i][1].user, { lat: 4.653117, lng:-74.108930 });
            }
        }
        
    }
    
};
</script>


