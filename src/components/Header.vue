<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">
      <i class="fad fa-box-full"></i>
      Image Storage
    </a>
    <div class="right menu">
      <a href="#" class="ui item" @click="login">
        <i class="fab fa-vuejs"></i>
        Login
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Header',
  data() {
    return {
      name: 'Dom'
    }
  },
  methods: {
    ...mapActions(['login'])
  }
}
</script>
