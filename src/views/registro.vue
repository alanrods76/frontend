<template>
    <div class="container login">
        <!-- Material form register -->
<div class="card">

    <h5 class="card-header info-color white-text text-center py-4">
        <strong>Registrarse</strong>
    </h5>

    <!--Card content-->
    <div class="card-body px-lg-5 pt-0">

        <!-- Form -->
        <form class="text-center" style="color: #757575;" action="#!">

            <div class="form-row">
                <div class="col">
                    <!-- First name -->
                    <div class="md-form">
                        <input type="text" id="materialRegisterFormFirstName" class="form-control" v-model="registro.nombre">
                        <label for="materialRegisterFormFirstName">Nombres</label>
                    </div>
                </div>
                <div class="col">
                    <!-- Last name -->
                    <div class="md-form">
                        <input type="email" id="materialRegisterFormLastName" class="form-control" v-model="registro.apellidos">
                        <label for="materialRegisterFormLastName">Apellidos</label>
                    </div>
                </div>
            </div>

            <!-- E-mail -->
            <div class="md-form mt-0">
                <input type="email" id="materialRegisterFormEmail" class="form-control" v-model="registro.email">
                <label for="materialRegisterFormEmail">E-mail</label>
            </div>

            <!-- Password -->
            <div class="md-form">
                <input type="password" id="materialRegisterFormPassword" class="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" v-model="registro.password">
                <label for="materialRegisterFormPassword">Password</label>
                <small id="materialRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                    Digite minimo 8 caracteres, incluya numeros, letras mayusculas y mininusculas.
                </small>
            </div>

            <!-- Phone number -->
            <div class="md-form">
                <input type="password" id="materialRegisterFormPhone" class="form-control" aria-describedby="materialRegisterFormPhoneHelpBlock" v-model="registro.direccion">
                <label for="materialRegisterFormPhone">Direccion</label>
                <small id="materialRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
                    Ej: calle 6 34a 13 buenaventura valle
                </small>
            </div>

            <!-- Newsletter -->
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="materialRegisterFormNewsletter" v-model="registro.vehiculo">
                <label class="form-check-label" for="materialRegisterFormNewsletter">Seleccione si tiene automovil</label>
            </div>

            <!-- Sign up button -->
            <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Registrarse</button>

            <!-- Social register -->
            <p>Registrarse con:</p>

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

            <hr>

            <!-- Terms of service -->
            <p>By clicking
                <em>Sign up</em> you agree to our
                <a href="" target="_blank">terms of service</a></p>

        </form>
        <!-- Form -->

    </div>

</div>
<!-- Material form register -->
    </div>
</template>

<script>
import swal from "sweetalert";
export default {
  data() {
    return {
      registro: {
          nombre: "",
          apellidos: "",
          email: "",
          password: "",
          vehiculo: "",
      },
    };
  },
  
  methods: {
    
         


    async loginUser() {
      try {
       
        let response = await this.$http.post("/api/auth/signin", this.login);
        let token = response.data.accessToken;
        localStorage.setItem("jwt", token);
        if (token) {
          //swal('Hello Vue world!!!');
          swal("Exitoso", "login exitoso", "success");
          console.log(token);
          //swal("Login correcto", "Los datos son correctos, bienvenido!","success");
          this.$router.push("/");
          location.reload();
        }
      } catch (err) {
        swal("Error", "datos incorrectos", "error");
        console.log(err.response);
      }
      //this.$router.push("/");
    },
  },
};
</script>