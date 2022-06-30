<template>
  <div class="login">
    <h1>Login</h1>
    <div class="q-pa-md">
      <div class="q-gutter-md" style="max-width: 300px">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',

  data () {
    return {
      username: '',
      password: ''
    }
  },

  mounted () {
  },

  methods: {
    login () {

    }
  }
}

</script>

<style lang="less" scoped>
.login {
  height: 100%;
  width: 100%;
  background-color: green;
}
</style>
