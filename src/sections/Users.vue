<template>
  <div class="users">
    <div class="users-top">
      <Account class="account" />
      <Search searchText="Search Friends" @search-value="passValue" />
    </div>
    <div class="users-list">
      <User @user-selected="setActiveUser" :searchValue="searchValue" />
    </div>
  </div>
</template>

<script>
import Account from "../components/Account.vue";
import User from "../components/User.vue";
import Search from "../components/Search.vue";

export default {
  data() {
    return {
      searchValue: "",
    };
  },
  components: {
    Account,
    User,
    Search,
  },
  methods: {
    setActiveUser(userId) {
      this.$emit("user-selected", userId);
    },
    passValue(value) {
      this.searchValue = value;
    },
  },
};
</script>

<style scoped>
.users {
  max-height: 598px;
  display: flex;
  flex-direction: column;
}

.users-top {
  padding-bottom: 20px;
  position: sticky;
  top: 0;
  background: var(--secondary);
}
.users-list {
  padding-right: 20px;
  overflow-y: auto;
}
.users-top .account {
  margin-bottom: 20px;
}
</style>
