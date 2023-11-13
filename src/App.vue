<template>
  <div id="app">
    <div class="users-section">
      <Users @user-selected="setActiveUser" />
    </div>
    <div class="chat-section">
      <Chat :activeUserData="activeUserData" />
    </div>
    <div class="profile-section">
      <Profile
        :name="activeUserData.name"
        :role="activeUserData.role"
        :imgUrl="activeUserData.imgUrl"
      />
    </div>
  </div>
</template>

<script>
import Users from "./sections/Users.vue";
import Chat from "./sections/Chat.vue";
import Profile from "./sections/Profile.vue";
import { users } from "./constants/index.js";

export default {
  name: "App",
  data() {
    return {
      activeUserId: "user1",
      users,
    };
  },
  components: {
    Users,
    Chat,
    Profile,
  },
  methods: {
    setActiveUser(userId) {
      this.activeUserId = userId;
    },
  },
  computed: {
    activeUserData() {
      let user = users.find((user) => user.id === this.activeUserId);
      console.log(user);
      return user;
    },
  },
};
</script>

<style>
#app {
  display: flex;
  width: 1300px;
  max-height: 650px;
  margin: 0 auto;
}
.users-section,
.profile-section {
  background: var(--secondary);
  padding: 30px 20px;
  width: 25%;
}
.users-section {
  padding: 30px 20px;
  scrollbar-width: thin;
  scrollbar-color: red #ddd;
}

.chat-section {
  padding: 30px 20px;
  width: 50%;
}
</style>
