<template>
  <div class="chat-box">
    {{ messages }}
    <div v-for="(chat, index) in messages" :key="index">
      
      <Msg :chat="chat" />
    </div>
  </div>
</template>

<script>
import Msg from "../components/Msg.vue";

export default {
  data() {
    return {
      messages:[]
    };
  },
  props: {chatHistory:Array},
  watch:{
    chatHistory:{
      immediate:true,
      handler(val){
        console.log(val)
        if(val.length){
          
          this.messages=val
        }
      }
    }
  },
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
  margin-bottom:12px;
}
</style>
