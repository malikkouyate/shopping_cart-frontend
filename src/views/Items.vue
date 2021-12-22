 <template>
    <h1>The Items</h1>
    <div class="container-fluid">
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col" v-for="objects in items" :key="objects.id">
          <div class="card h-100">
            <img :src="getAvatar(objects)" class="card-img-top" :alt="objects.id">
            <div class="card-body">
              <h5 class="card-title">{{objects.id}} </h5>
              <p class="card-text">
                Das Objekt hat die ID: {{objects.id}} kostet: {{objects.price}}€
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
<!--  <h1>The Items</h1>-->
<!--  <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">-->
<!--    <div class="carousel-inner">-->
<!--      <div class="carousel-item active">-->
<!--        <img src="../assets/Malik-2.png" class="w-25 center h-25" alt="Hallo Test">-->
<!--      </div>-->
<!--      <div class="carousel-item">-->
<!--        <img src="../assets/Malik-3.png" class="w-25 center h-25" alt="...">-->
<!--      </div>-->
<!--      <div class="carousel-item">-->
<!--        <field-message src="../views/test.vue">Hallo</field-message>-->
<!--      </div>-->
<!--    </div>-->
<!--    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching"-->
<!--            data-bs-slide="prev">-->
<!--      <span class="carousel-control-prev-icon" aria-hidden="true"></span>-->
<!--      <span class="visually-hidden">Previous</span>-->
<!--    </button>-->
<!--    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching"-->
<!--            data-bs-slide="next">-->
<!--      <span class="carousel-control-next-icon" aria-hidden="true"></span>-->
<!--      <span class="visually-hidden">Next</span>-->
<!--    </button>-->
<!--  </div>-->
<!--  <div class="carousel-indicators">-->
<!--    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"-->
<!--            aria-current="true" aria-label="Slide 1"></button>-->
<!--    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>-->
<!--    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>-->
<!--  </div>-->
<!--    <div class="carousel-inner" v-for="objects in items" :key="objects.id">-->
<!--      <div class="carousel-item active">-->
<!--        <img src="..." class="d-block w-100" :alt="objects.id">-->
<!--        <div class="carousel-caption d-none d-md-block">-->
<!--          <h5>First slide label</h5>-->
<!--          <p>Some representative placeholder content for the first slide.</p>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="carousel-item">-->
<!--        <img src="..." class="d-block w-100" :alt="objects.id">-->
<!--        <div class="carousel-caption d-none d-md-block">-->
<!--          <h5>Second slide label</h5>-->
<!--          <p>Some representative placeholder content for the second slide.</p>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="carousel-item">-->
<!--        <img src="..." class="d-block w-100" :alt="objects.id">-->
<!--        <div class="carousel-caption d-none d-md-block">-->
<!--          <h5>Third slide label</h5>-->
<!--          <p>Some representative placeholder content for the third slide.</p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">-->
<!--      <span class="carousel-control-prev-icon" aria-hidden="true"></span>-->
<!--      <span class="visually-hidden">Previous</span>-->
<!--    </button>-->
<!--    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">-->
<!--      <span class="carousel-control-next-icon" aria-hidden="true"></span>-->
<!--      <span class="visually-hidden">Next</span>-->
<!--    </button>-->
<!--  </div>-->
<!--  <div class="container-fluid">-->
<!--    <div class="row row-cols-1 row-cols-md-4 g-4">-->
<!--      <div class="col" v-for="objects in items" :key="objects.id">-->
<!--        <div class="card h-100">-->
<!--          <img :src="getAvatar(objects)" class="card-img-top" :alt="objects.id">-->
<!--          <div class="card-body">-->
<!--            <h5 class="card-title">{{ objects.id }} </h5>-->
<!--            <p class="card-text">-->
<!--              Das Objekt hat die ID: {{ objects.id }} kostet: {{ objects.price }}€-->
<!--            </p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<script>
export default {
  name: 'Items',
  data () {
    return {
      items: []
    }
  },
  methods: {
    getAvatar (objects) {
      if (objects.id === 1) {
        return require('../assets/Malik-2.png')
      } else if (objects.id === 2) {
        return require('../assets/Malik-1.png')
      } else if (objects.id === 7) {
        return require('../assets/Malik-3.png')
      }
    }
  },
  mounted () {
    const myHeaders = new Headers()
    myHeaders.append('Cookie', 'JSESSIONID=7674B867043F08F0A4A716BDB7C48F4C')
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    }
    fetch('https://shoppingcartdrip01.herokuapp.com/api/v1/registration/objects', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(objects => {
        this.items.push(objects)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
</style>
