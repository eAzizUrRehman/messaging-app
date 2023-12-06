<template>
  <img :src="imgUrl" alt="" :width="imgWidth" :height="imgHeight" />
</template>

<script>
export default {
  props: ['imgUrl', 'imgWidth', 'imgHeight']
}
</script>

<style scoped>
img {
  border-radius: 50%;
  object-fit: contain;
}
</style>
