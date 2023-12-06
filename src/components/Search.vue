<template>
  <div class="search">
    <img class="search-icon" src="../assets/icons/search-icon.svg" alt="" />
    <input
      type="text"
      :placeholder="searchText"
      v-model="searchValue"
      @keyup="passValue"
    />
  </div>
</template>

<script>
export default {
  props: ['searchText'],
  data() {
    return {
      searchValue: ''
    }
  },
  methods: {
    passValue() {
      this.$emit('search-value', this.searchValue)
    }
  }
}
</script>

<style scoped>
.search {
  width: 100%;
  background: var(--tertiary);
  color: var(--text);
  display: flex;
  align-items: center;
  border-radius: 25px;
  font-size: 12px;
}
.search-icon {
  margin: 0 0 0 8px;
}
.search input {
  width: 100%;
  padding: 8px;
  border: none;
  outline: none;
  background: var(--tertiary);
  border-radius: 25px;
}
</style>
