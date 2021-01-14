<template>
    <div>
        <section id="news">
          <h2 class="titulo-separador">Noticias</h2>

    <span class="separador"></span>

      <!-- Card Light -->
      <div class="card-news">
        <div class="card news">

          <!-- Card image -->
          <div class="view overlay">
            <img class="card-img-top"
              :src="this.news.articles[0].urlToImage" alt="Card image cap">
            <a>
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>

          <!-- Card content -->
          <div class="card-body">

            <!-- Social shares button -->
            <a class="activator waves-effect waves-light mr-4"><i class="fas fa-share-alt"></i></a>
            <!-- Title -->
            <h4 class="card-title title-team">{{this.news.articles[0].title}}</h4>
            <hr>
            <!-- Text -->
            <p class="card-text parrafo-news">{{this.news.articles[0].description}}</p>
            <!-- Link -->
            <a :href="this.news.articles[0].url" class="black-text d-flex justify-content-end">
              <h5>Leer mas<i class="fas fa-angle-double-right"></i></h5>
            </a>

          </div>

        </div>

        <!-- Card Light -->

        <!-- Card Dark -->

        <div class="card news">

          <!-- Card image -->
          <div class="view overlay">
            <img class="card-img-top" :src="this.news.articles[1].urlToImage"
              alt="Card image cap">
            <a>
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>

          <!-- Card content -->
          <div class="card-body elegant-color white-text rounded-bottom">

            <!-- Social shares button -->
            <a class="activator waves-effect mr-4"><i class="fas fa-share-alt white-text"></i></a>
            <!-- Title -->
            <h4 class="card-title title-team">{{this.news.articles[1].title}}</h4>
            <hr class="hr-light">
            <!-- Text -->
            <p class="card-text white-text mb-4 parrafo-news">{{this.news.articles[1].description}}</p>
            <!-- Link -->
            <a :href="this.news.articles[1].url" class="white-text d-flex justify-content-end">
              <h5>Leer mas<i class="fas fa-angle-double-right"></i></h5>
            </a>

          </div>

        </div>

        <!-- Card Dark -->

        <!-- Card Dark -->

        <div class="card news">

          <!-- Card image -->
          <div class="view overlay">
            <img class="card-img-top" :src="this.news.articles[2].urlToImage"
              alt="Card image cap">
            <a>
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>

          <!-- Card content -->
          <div class="card-body elegant-color white-text rounded-bottom">

            <!-- Social shares button -->
            <a class="activator waves-effect mr-4"><i class="fas fa-share-alt white-text"></i></a>
            <!-- Title -->
            <h4 class="card-title title-team">{{this.news.articles[2].title}}</h4>
            <hr class="hr-light">
            <!-- Text -->
            <p class="card-text white-text mb-4 parrafo-news">{{this.news.articles[2].description}}</p>
            <!-- Link -->
            <a :href="this.news.articles[2].url" class="white-text d-flex justify-content-end">
              <h5>Leer mas<i class="fas fa-angle-double-right"></i></h5>
            </a>

          </div>

        </div>

        <!-- Card Dark -->

        <!-- Card Light -->

        <div class="card news">

          <!-- Card image -->
          <div class="view overlay">
            <img class="card-img-top"
              :src="this.news.articles[3].urlToImage" alt="Card image cap">
            <a>
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>

          <!-- Card content -->
          <div class="card-body">

            <!-- Social shares button -->
            <a class="activator waves-effect waves-light mr-4"><i class="fas fa-share-alt"></i></a>
            <!-- Title -->
            <h4 class="card-title title-team">{{this.news.articles[3].title}}</h4>
            <hr>
            <!-- Text -->
            <p class="card-text parrafo-news">{{this.news.articles[3].description}}</p>
            <!-- Link -->
            <a :href="this.news.articles[3].url" class="black-text d-flex justify-content-end">
              <h5>Leer mas<i class="fas fa-angle-double-right"></i></h5>
            </a>

          </div>

        </div>
      </div>
      <!-- Card Light -->




    </section>


    

    </div>
    
</template>

<script>

import axios from 'axios'

export default {
    name: "ApiNews",
    data(){
        return{
        news:[]
        }
    },
    mounted(){
        axios.get('http://newsapi.org/v2/everything?q=seguridad&language=es&apiKey=822c327abdd540e8ae9f43dcba3354d4')
        .then(Response => {
            (this.news = Response.data);
            
    })
    
    }
    
}
</script>