<template>
  <div class="menu">
    <router-link to="/">Home</router-link>
    <router-link to="/article">Article</router-link>
    <router-link to="/account">Account</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    fetchDate() {
      console.log("menu: hash change", arguments)
    }
  },

  watch:{
    "$route":"fetchDate"
  }
}
</script>

