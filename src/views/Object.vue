<template>
  <h1>Welcome to Persons</h1>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="objects in objects" :key="objects.id">
        <div class="card h-100">
          <img :src="getAvatar(objects)" class="card-img-top" :alt="objects.object_name">
          <div class="card-body">
            <h5 class="card-title">{{objects.object_name}} {{objects.price}}</h5>
            <p class="card-text">
              Das Objekt: {{objects.object_name}} kostet: {{objects.price}}€
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Object',
  data () {
    return {
      objects: [
        {
          id: 1,
          link: 'test123',
          object_name: 'Kabel',
          price: 5
        },
        {
          id: 2,
          link: 'test1234',
          object_name: 'Handy',
          price: 500
        },
        {
          id: 7,
          link: 'tes1t123',
          object_name: 'Kabel1',
          price: 53
        }
      ]
    }
  },
  methods: {
    getAvatar (objects) {
      if (objects.object_name === 'Handy') {
        return require('../assets/Malik-2.png')
      } else if (objects.object_name === 'Kabel') {
        return require('../assets/Malik-1.png')
      } else if (objects.object_name === 'Kabel1') {
        return require('../assets/Malik-3.png')
      }
    }
  }
}
</script>

<style scoped>

</style>
