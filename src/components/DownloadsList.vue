<template>
  <div>
    <router-link to="/">Films</router-link> |
    <router-link to="/account">Compte</router-link> |
    <a href="#" @click="onLogout">Deconnexion</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { clearLocalStorage } from '@/utils';

@Component
export default class DownloadsList extends Vue {
  
  @Prop({default: () => {return []}}) private downloads!: any[];

}
</script>

<style scoped>

</style>
