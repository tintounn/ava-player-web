<template>
  <div>
    <router-link to="/">Films</router-link> |
    <a href="#">Series</a> |
    <router-link to="/account">Compte</router-link> |
    <a href="#" @click="onLogout">Deconnexion</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { clearLocalStorage } from '@/utils';

@Component
export default class Header extends Vue {
  onLogout() {
    clearLocalStorage();
    this.$router.push({name: 'login'});
  }
}
</script>

<style scoped>

</style>
