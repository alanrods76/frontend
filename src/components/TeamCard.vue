<template>
    
          
          
            <div class="image-flip">
              <div class="mainflip flip-0">
                <div class="frontside">
                  <div class="card">
                    <div class="card-body text-center">
                      <p><img class=" img-fluid"
                          :src="member.image"
                          alt="card image"></p>
                      <h4 class="card-title">{{member.nombre}}</h4>
                      <p class="card-text">{{member.codigo}}. {{member.rol}}</p>
                      <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm">
                      <i class="fa fa-plus"></i></a>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body text-center mt-4">
                      <h4 class="card-title">{{member.nombre}}</h4>
                      <p class="card-text">{{member.descripcion}}</p>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <a class="social-icon text-xs-center" target="_blank"
                            href="https://www.fiverr.com/share/qb8D02">
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a class="social-icon text-xs-center" target="_blank"
                            href="https://www.fiverr.com/share/qb8D02">
                            <i class="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a class="social-icon text-xs-center" target="_blank"
                            href="https://www.fiverr.com/share/qb8D02">
                            <i class="fa fa-skype"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a class="social-icon text-xs-center" target="_blank"
                            href="https://www.fiverr.com/share/qb8D02">
                            <i class="fa fa-google"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          
          
        
</template>

<script>
    export default {
        name: "TeamCard",
        props: ['member']
    }
</script>

<style scoped>

</style>
