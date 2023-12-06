<template>
  <div class="account">
    <Dp
      :imgUrl="account.imgUrl"
      :imgWidth="account.imgWidth"
      :imgHeight="account.imgHeight"
    />
    <div class="details">
      <p class="name">
        {{ account.name }}
      </p>
      <p class="role">
        {{ account.role }}
      </p>
    </div>
    <img src="../assets/icons/edit-icon.svg" alt="" />
  </div>
</template>

<script>
import Dp from './Dp.vue'
import { account } from '../constants/index.js'

export default {
  data() {
    return {
      account
    }
  },
  components: {
    Dp
  }
}
</script>

<style scoped>
.account {
  width: 100%;
  display: flex;
  justify-content: start;
}
.details {
  flex-grow: 1;
  padding-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: start;
}
.name {
  color: var(--primary);
  margin-top: 16px;
  font-size: 18px;
  font-weight: 700;
}
.role {
  color: var(--text);
  font-size: 12px;
  font-weight: 500;
}
</style>
