<template>
  <!-- Material form login -->
  <div class="container login">
    <div class="card" style="width: 500px">
      <h5 class="card-header info-color white-text text-center py-4">
        <strong>Ingresar</strong>
      </h5>

      <!--Card content-->
      <div class="card-body px-lg-5 pt-0">
        <!-- Form -->
        <form class="text-center" style="color: #757575" action="#!">
          <!-- Email -->
          <div class="md-form">
            <input
              type="email"
              id="materialLoginFormEmail"
              class="form-control"
              v-model="login.email"
            />
            <label for="materialLoginFormEmail">E-mail</label>
          </div>

          <!-- Password -->
          <div class="md-form">
            <input
              type="password"
              id="materialLoginFormPassword"
              class="form-control"
              v-model="login.password"
            />
            <label for="materialLoginFormPassword">Password</label>
          </div>

          <div class="d-flex justify-content-around">
            <div>
              <!-- Remember me -->
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="materialLoginFormRemember"
                />
                <label class="form-check-label" for="materialLoginFormRemember"
                  >Recordar</label
                >
              </div>
            </div>
            <div>
              <!-- Forgot password -->
              <a href="">olvido su password?</a>
            </div>
          </div>

          <!-- Sign in button -->
          <button
            class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
            type="submit"
            @click.prevent="loginUser"
          >
            Ingresar
          </button>

          <!-- Register -->
          <p>
            No esta registrado?
            <router-link to="/registro">Registrese</router-link>
          </p>

          <!-- Social login -->
          <p>Ingresar con:</p>
          <a type="button" class="btn-floating btn-fb btn-sm">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a type="button" class="btn-floating btn-tw btn-sm">
            <i class="fab fa-twitter"></i>
          </a>
          <a type="button" class="btn-floating btn-li btn-sm">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a type="button" class="btn-floating btn-git btn-sm">
            <i class="fab fa-github"></i>
          </a>
        </form>
        <!-- Form -->
      </div>
    </div>
    <!-- Material form login -->
  </div>
</template>
<script>
import swal from "sweetalert";
export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  
  methods: {
    async loginUser() {
      try {
        let response = await this.peticion.post("/api/usuario/login", this.login);
        let token = response.data.accessToken;
        localStorage.setItem("jwt", token);
        if (token) {
          swal("Exitoso", "login exitoso", "success");
          this.$router.push("/");
          location.reload();
        }
      } catch (err) {
        swal("Error", 'datos incorrectos', "error");
        console.log(err.response);
      }
    },
  },
};
</script>