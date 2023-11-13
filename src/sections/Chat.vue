<template>
  <div class="chat">
    <div class="chat-top">
      <div class="top-header-with-line">
        <div class="top-header">
          <div class="profile">
            <Dp :imgUrl="activeUserData.imgUrl" :width="'40'" :height="'40'" />
            <p>{{ activeUserData.name }}</p>
            <div
              class="online-status"
              :class="
                activeUserData.lastMsgTime === 'online' ? 'green-colored' : ''
              "
            ></div>
          </div>
          <div class="icons">
            <img src="../assets/icons/search-icon.svg" width="25" alt="" />
            <img src="../assets/icons/favorite-icon.svg" width="20" alt="" />
            <img src="../assets/icons/bell-icon.svg" width="20" alt="" />
          </div>
        </div>
        <Line class="top-header-line" />
      </div>
      <Chatbox :chatHistory="activeUserData.chatHistory" />
    </div>
    <div class="chat-bottom">
      <Line />
      <div class="send-msg">
        <div class="send-msg-left">
          <img
            class="mic-icon"
            src="../assets/icons/mic-icon.svg"
            alt=""
            width="20"
          />
          <input
            type="text"
            placeholder="Write Something"
            v-model="searchValue"
            @keyup.enter="sendMsg"
            
          />
        </div>
        <div class="send-msg-right">
          <img
            class="mic-icon"
            src="../assets/icons/attachment-icon.svg"
            alt=""
            width="20"
          />
          <img
            class="mic-icon"
            src="../assets/icons/camera-icon.svg"
            alt=""
            width="20"
          />
          <img
            class="mic-icon"
            src="../assets/icons/emoji-icon.svg"
            alt=""
            width="20"
          />
          <div class="send-button" @click="sendMsg">
            <img
              class="mic-icon"
              src="../assets/icons/send-icon.svg"
              alt=""
              width="40"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dp from "../components/Dp.vue";
import Line from "../components/Line.vue";
import Search from "../components/Search.vue";
import Chatbox from "../components/Chatbox.vue";

export default {
  data() {
    return {
      searchValue: "",
    };
  },
  props: ["activeUserData"],
  components: {
    Dp,
    Line,
    Search,
    Chatbox,
  },
  methods: {
    sendMsg() {
      if (this.searchValue.trim() !== "") {
        this.activeUserData.chatHistory.push({
          message: this.searchValue.trim(),
          fromMe: true,
        });
        
      }
      this.searchValue = "";
    },
  },
};
</script>

<style scoped>
.chat {
  height: 100%;
  color: var(--text);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.top-header-with-line {
  background: var(--tertiary);
  position: sticky;
  top: 0;
  padding-bottom: 5px;
}
.top-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-header .profile {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.top-header .profile p {
  font-size: 22px;
  font-weight: 600;
}
.online-status {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--text);
}
.top-header .icons {
  display: flex;
  gap: 6px;
}
.chat-bottom {
  background: var(--tertiary);
  position: sticky;
  bottom: 0;
}
.send-msg {
  width: 620px;
  height: 50px;
  background: var(--secondary);
  color: var(--text);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 25px;
}
.mic-icon {
  margin-inline: 8px;
}
.send-button {
  width: 50px;
  height: 50px;
  background: var(--primary);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.send-msg .send-msg-left,
.send-msg .send-msg-right {
  display: flex;
  justify-content: center;
  align-items: center;
}
.send-msg .send-msg-left {
  width: 100%;
  gap: 10px;
  margin-left: 10px;
}
.send-msg .send-msg-left input {
  width: 100%;
  height: 50px;
  font-size: 16px;
  border: none;
  outline: none;
  background: var(--secondary);
}
.green-colored {
  background: var(--online-green);
}
</style>
