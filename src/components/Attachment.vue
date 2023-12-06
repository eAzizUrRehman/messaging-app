<template>
  <div class="attachment">
    <p>
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style scoped>
.attachment {
  width: 65px;
  height: 65px;
  background: var(--light-green);
  color: var(--primary);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.attachment p {
  font-size: 12px;
}
</style>
