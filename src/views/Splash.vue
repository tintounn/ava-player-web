<template>
  <div>
    <b-row class="full-height" align-v="center" align-h="center">
          <pre style="font-weight: 1000;">

  ____                   _                                    
 / __ \                 (_)                                   
| |  | |  _ __   _ __    _    __ _   _ __    __ _   _ __ ___  
| |  | | | '__| | '_ \  | |  / _` | | '__|  / _` | | '_ ` _ \ 
| |__| | | |    | | | | | | | (_| | | |    | (_| | | | | | | |
 \____/  |_|    |_| |_| |_|  \__, | |_|     \__,_| |_| |_| |_|
                              __/ |                           
                             |___/                            

          </pre>

    </b-row>
  <b-row class="full-height" align-v="center" align-h="center">
    <span><h1>Chargement...</h1></span><br/>
  </b-row>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import {getLocalStorageItem, setLocalStorageItem, request, clearLocalStorage} from '@/utils';

  @Component
  export default class Splash extends Vue {
    beforeMount() {
      setTimeout(() => {
        this.getSession();
      }, 1000);
    }

    private getSession() {
      request({
        url: '/valid',
        method: 'post',
        data: {token: getLocalStorageItem('token')}
      }).then(res => {
        const urlParams = new URLSearchParams(window.location.search);
        setLocalStorageItem('user', res.user);
        this.$router.push({path: urlParams.get('redirect') || 'home'});
      }).catch(err => {
        clearLocalStorage();
        this.$router.push({name: 'login'});
      });
    }
  }
</script>

<style scoped>
  h1, h3 {
    text-align: center;
  }
</style>
