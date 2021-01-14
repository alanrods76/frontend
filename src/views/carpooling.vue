<template>
  <div class="formatMapa">
    <div class="col-md-3">
    <!-- Material outline input with prefix-->
    <div  class="bordeRuta" v-if="mostrarHacerRuta()">
      <div>
        <div class="md-form md-outline input-with-post-icon">
        <i class="fas fa-user fa-envelope  input-prefix"></i>
        <input type="text" id="suffixInside2" class="form-control" v-model="ruta.cupo">
        <label for="suffixInside2">Cupo Pasajeros</label>
        </div>
      </div>
      <button
            class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
            type="submit"
            @click.prevent="crearRuta"
          >
            Crear ruta
      </button>
    </div>
    <div class="bordeRuta">
      <div>
        <div class="md-form md-outline input-with-post-icon">
        <i class="fas fa-user fa-envelope  input-prefix"></i>
        <input type="text" id="suffixInside2" class="form-control" v-model="ruta.cupo">
        <label for="suffixInside2">selecciona una Ruta</label>
        </div>
      </div>
      <button
            class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
            type="submit"
            @click.prevent="crearRuta"
          >
            Reservar Ruta
      </button>
    </div>
    </div>
    <!-- Material input -->

    <mapa-empresa class="mapa col-md-9"></mapa-empresa>
  </div>
</template>
 
<script>
import MapaEmpresa from "../components/MapaEmpresa";
import VueJwtDecode from 'vue-jwt-decode';
import axios from 'axios';
export default {
  //name: "App",
  components: {
    MapaEmpresa,
  },
  data() {
    return {
      ruta: {
        cupo: null,
        idUser: null,
      },
    };
  },
  methods: {
    
    async crearRuta() {
        this.ruta.cupo = parseInt(this.ruta.cupo);
        await axios.post("http://localhost:3000/api/mapa/ruta", this.ruta).then(Response => {
        location.reload();
        })
    },
     mostrarHacerRuta(){
      let token = localStorage.getItem("jwt");
      var datos = VueJwtDecode.decode(token);
      this.ruta.idUser = datos.id;
      let car = datos['car'];
      return car;
    }
  },
  
};
</script>
 
<style lang="css">
.mapa {
  height: 425px;
}
</style>