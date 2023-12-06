<template>
  <div class="icon">
    <div class="icon-img">
      <img :src="imgUrl" alt="" />
    </div>
    <p class="service">
      {{ service }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['imgUrl', 'service']
}
</script>

<style scoped>
.icon {
  /* display: flex; */
}
.icon-img {
  width: 65px;
  height: 65px;
  margin: 0 auto;
  padding: 16px;
  background: var(--light-green);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.service {
  width: fit-content;
  margin: 5px auto;
  color: var(--text);
  font-size: 14px;
}
</style>
