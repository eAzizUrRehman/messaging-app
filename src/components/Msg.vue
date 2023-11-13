<template>
  <div class="msg" :class="chat.fromMe ? 'msg-end' : ''">
    <p :class="chat.fromMe ? 'my-msg' : 'user-msg'">
      {{ chat.message }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["chat"],
};
</script>

<style scoped>

.msg {
  margin-block: 4px;
  width: 100%;
  display: flex;
}

.msg-end {
  justify-content: end;
}
.msg p {
  width: fit-content;
  max-width: 40%;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  word-wrap: break-word;
}

.my-msg {
  background: var(--primary);
  color: var(--tertiary);
}
.user-msg {
  background: var(--secondary);
  color: var(--text);
}
</style>
