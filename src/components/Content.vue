<template>
  <div class="content">
    <h3>This is {{mode}} mode</h3>
    <div class="image-grid">
    </div>
    <p class="para">
     Hallo Malik
    </p>
  </div>
</template>

<script>
export default {
  props: ['mode']
}
</script>

<style>
.content {
  padding: 25px;
}
.content h3 {
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 300;
  margin-bottom: 25px;
}
.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
}
.image-grid .col img {
  width: 100%;
}
.para {
  width: 100%;
  max-width: 600px;
  margin: 25px auto 0px;
}
</style>
