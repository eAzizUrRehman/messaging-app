<template>
  <div class="chat-box">
    <div v-for="(chat, index) in chatHistory" :key="index">
      <Msg :chat="chat" />
    </div>
  </div>
</template>

<script>
import Msg from "../components/Msg.vue";

export default {
  props: { chatHistory: Array },
  components: {
    Msg,
  },
};
</script>

<style scoped>
.chat-box {
  max-height: 470px;
  overflow-y: auto;
  padding-right: 20px;
  margin-bottom: 12px;
}
</style>
