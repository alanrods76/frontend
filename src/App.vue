
<template>
  <div>
    <section id="menu">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#"
            ><img
              src="../public/images/icono.jpg"
              alt=""
              srcset=""
              style="width: 100px"
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <router-link to="/" class="nav-link"
                  >Home<span class="sr-only">(current)</span></router-link
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#services">Servicios</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#news">news</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#team">Team</a>
              </li>
              <template v-if="!this.condicionLogin">
              <li class="nav-item">
                <router-link
                  to="/carpooling"
                  class="nav-link"
                  >Carpooling
                </router-link>
              </li>
              </template>
            </ul>
            <div id="div-signin">
              <template v-if="this.condicionLogin">
                <router-link
                  to="/login"
                  id="navbar-static-signin"
                  alt="Sign In"
                  class="text-info align-self-center ml-2 auth-modal-toggle"
                  >Ingresar
                </router-link>

                <router-link
                  to="/registro"
                  id="navbar-static-login"
                  alt="Sign Up"
                  class="btn btn-info btn-rounded btn-sm waves-effect waves-light auth-modal-toggle"
                  >Registrarse
                </router-link>
              </template>
              <template v-if="!this.condicionLogin">
                <strong id="saludoUsuario"
                  >Hola {{ this.nombreLogin }}</strong
                >
                <button
                  class="btn btn-info btn-rounded btn-sm waves-effect waves-light auth-modal-toggle"
                  type="submit"
                  @click.prevent="loginOut"
                >
                  Salir
                </button>
              </template>
            </div>
          </div>
        </div>
      </nav>
    </section>
    <router-view />
  </div>
</template>
<script>

import VueJwtDecode from 'vue-jwt-decode';
export default {
  data() {
    return {
      condicionLogin: true,
      nombreLogin: ''
    };
  },
  methods: {
    loginOut() {
      localStorage.clear();
      this.$router.push("/");
      location.reload();
    },
    getUserData(){
            let token = localStorage.getItem('jwt');
            // let user = localStorage.getItem('user'); Se cambio por la informacion que entrega el token
            let user = VueJwtDecode.decode(token);
            //console.log(user)
            this.condicionLogin = token?false:true;
            this.nombreLogin = user["name"];
            
        }
   
  },
created() {

        this.getUserData();

    }    

}
</script>