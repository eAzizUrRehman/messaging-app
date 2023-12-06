<template>
  <div
    class="user"
    v-for="user in filteredUsers"
    :key="user.id"
    @click="activeUser(user.id)"
  >
    <Dp :imgUrl="user.imgUrl" :imgWidth="'50'" :imgHeight="'50'" />
    <div class="user-details">
      <div class="user-details-left">
        <p class="user-name">
          {{ user.name }}
        </p>
        <p class="user-lastMsg">
          {{ user.chatHistory[user.chatHistory.length - 1].message || '' }}
        </p>
      </div>
      <div class="user-details-right">
        <span
          class="last-msg-time"
          :class="user.lastMsgTime === 'online' ? 'green-colored' : ''"
        >
          {{ user.lastMsgTime }}
        </span>
        <div
          v-if="user.unreadMsgs != 0 && user.unreadMsgs != null"
          class="unread-msgs"
        >
          {{ user.unreadMsgs }}
        </div>
        <img v-else src="../assets/icons/check-icon.svg" alt="" width="14" />
      </div>
    </div>
  </div>
</template>

<script>
import Dp from '../components/Dp.vue'
import { users } from '../constants/index.js'

export default {
  data() {
    return {
      users,
      activeUserId: 'user1'
    }
  },
  props: ['searchValue'],
  components: {
    Dp
  },
  methods: {
    activeUser(userId) {
      this.activeUserId = userId
      this.$emit('user-selected', userId)
    }
  },
  computed: {
    filteredUsers() {
      return this.users.filter((user) =>
        user.name.toLowerCase().includes(this.searchValue.toLowerCase())
      )
    }
  }
}
</script>

<style scoped>
.user {
  max-width: 100%;
  max-height: 70px;
  overflow: hidden;
  display: flex;
  align-items: start;
  padding: 10px 2px;
  margin-bottom: 20px;
  gap: 10px;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
}

.user-details {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.user-name {
  color: var(--primary);
  font-weight: 600;
  font-size: 14px;
}
.user-lastMsg {
  color: var(--text);
  font-weight: 400;
  font-size: 12px;
  max-height: 30px;
  overflow: hidden;
}
.last-msg-time {
  font-size: 12px;
  color: var(--text);
}

.user-details-left {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  gap: 4px;
}
.user-details-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  gap: 4px;
}
.unread-msgs {
  width: 18px;
  height: 18px;
  padding: 4px;
  border-radius: 50%;
  font-size: 12px;
  background: var(--primary);
  color: var(--tertiary);
  display: flex;
  justify-content: center;
  align-items: center;
}
.white-background {
  background: var(--tertiary);
}
.green-colored {
  color: var(--online-green);
}
</style>
