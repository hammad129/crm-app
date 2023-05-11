<template>
<div>
  <router-view></router-view>
</div>

</template>

<script>
import Login from './views/Login.vue';
import Admin from './views/Admin.vue';
export default{
  components : {
    Login,
    Admin,

  }
}
</script>