<template>
     
  <div><!-- Card -->
      <div class="container">
        <!-- Card -->
        <div class="card card-cascade wider reverse">
          <!-- Card image -->
          <div class="view view-cascade overlay">
            <img
              id="img-principal"
              class="card-img-top"
              src="https://rubycom.com/media/zoo/images/portada-seguridad_a30ec476a9223487e9ef5dbe08191db6.jpg"
              alt="Card image cap"
              height="400px"
            />
            <a href="#!">
              <div
                class="mask rgba-white-slight waves-effect waves-light"
              ></div>
            </a>
          </div>

          <!-- Card content -->
          <div class="card-body card-body-cascade text-center">
            <!-- Title -->
            <h4 class="card-title">
              <strong id="segurinfo">SegurInfor</strong>
            </h4>
            <!-- Subtitle -->
            <h6 class="font-weight-bold indigo-text py-2">Datos Seguros</h6>
            <!-- Text -->
            <p class="card-text">
              El hardware es fácil de proteger: encerrarlo en una habitación,
              encadenarlo a un escritorio o comprar uno de repuesto. La
              información plantea más un problema. Puede existir en más de un
              lugar; ser transportado a la mitad del planeta en segundos; y ser
              robado sin su conocimiento.
            </p>

            <!-- Linkedin -->
            <a class="px-2 fa-lg li-ic"><i class="fab fa-linkedin-in"></i></a>
            <!-- Twitter -->
            <a class="px-2 fa-lg tw-ic"><i class="fab fa-twitter"></i></a>
            <!-- Dribbble -->
            <a class="px-2 fa-lg fb-ic"><i class="fab fa-facebook-f"></i></a>
          </div>
        </div>
        <!-- Card -->
      </div>
      <api-menu></api-menu>
    <div class="container">
    <api-news></api-news>
    </div>
    <section id="team" class="pb-5">
      <h2 class="titulo-separador">Nuestro Equipo</h2>
    <span class="separador"></span>
    <div class="fondoequipo">
      <div class="container ">
        
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-3" v-for="(item, index) of team" :key="index">
            <team-card :member="item"></team-card>
          </div>
        </div>

      </div>
    </div>
    </section>
  </div>


</template>

<script>
import ApiMenu from '../components/ApiMenu.vue';
import ApiNews from '../components/ApiNews.vue';
import TeamCard from '../components/TeamCard.vue';

export default {
  name: 'App',
  components: {
      ApiMenu,
    TeamCard,
    ApiNews
  },




  data(){
    return{
      team: [
        {
        codigo: 1,
        nombre: 'Alexander Angulo',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum ac elit et accumsan.',
        rol: 'Desarrollador full stack',
        image: 'images/alex.jpg'
      
      },
      {
        codigo: 2,
        nombre: 'Gustavo Rojas',
        descripcion: 'Lorem ipsum dolor sit amet, consetur adipiscing elit. Mauris condimentum ac elit et accumsan.',
        rol: 'Desarrollador backend',
        image: 'images/Gustavo.JPG'
      },
      {
      codigo: 3,
nombre: 'Lucia Medina',
descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing lit. Mauris condimentulit et accumsan.',
rol: 'Desarrollador backend',
image: 'images/lucia.jpg'
    },
    {
      codigo: 4,
nombre: 'Luis Parra',
descripcion: 'Lorem  dolor sit amet, consectetur adipiscing elit. Mauris condimentum ac elit et acmsan.',
rol: 'Desarrollador backend',
image: 'images/luis.jpeg'

    },


      ]
    }
  } 
}
</script>

