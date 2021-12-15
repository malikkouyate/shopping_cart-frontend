<template>
  <h1>The Items</h1>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="objects in items" :key="objects.id">
        <div class="card h-100">
          <img :src="getAvatar(objects)" class="card-img-top" :alt="'Item'">
          <div class="card-body">
            <h5 class="card-title">{{objects.link}} </h5>
            <p class="card-text">
              Das Objekt hat die ID: {{objects.id}} und kostet: {{objects.price}}€
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
        return require('../assets/logo.png')
      } else if (objects.id === 2) {
        return require('../assets/logo.png')
      } else if (objects.id === 7) {
        return require('../assets/logo.png')
      }
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + 'api/v1/registration/objects'
    const myHeaders = new Headers()
    myHeaders.append('Cookie', 'JSESSIONID=7674B867043F08F0A4A716BDB7C48F4C')

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
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
