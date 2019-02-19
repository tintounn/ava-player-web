<template>
  <div class="full-height">
    <canvas class="background"></canvas>
    <b-row align-v="center" class="full-height">
      <b-col >
        <b-row align-h="center">
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
        <b-row align-h="center">
          <b-jumbotron>
            <b-form @submit="onSubmit">
              <b-form-group label="Nom d'utilisateur">
                <b-form-input v-model="form.username" required></b-form-input>
              </b-form-group>

              <b-form-group label="Mot de passe">
                <b-form-input v-model="form.password" required type="password"></b-form-input>
              </b-form-group>

              <b-button class="btn-block" type="submit" variant="primary">Connexion</b-button>
            </b-form>
          </b-jumbotron>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { setLocalStorageItem, request } from '@/utils';
  import * as Particles from 'particlesjs';

  @Component
  export default class Login extends Vue {

    private form: any = {username: '', password: ''};
    private particles: any = null;
    
    mounted() {
      this.particles = Particles.init({
        selector: '.background',
        color: '#999999',
        connectParticles: true,
        speed: 0.3,
        maxParticles: 200
      });
    }

    beforeDestroy() {
      this.particles.destroy();
    }

    onSubmit(event: any) {
      event.preventDefault();
      request({
        url: '/auth',
        method: 'post',
        data: {...this.form}
      }).then(res => {
        setLocalStorageItem('token', res.data.token);
        setLocalStorageItem('user', res.data.user);
        this.$router.push({name: 'home'});
      }).catch(err => {
        this.$notify({
          type: 'error',
          title: 'Erreur !',
          text: 'Oh une erreur'
        });
      });
    }
  }
</script>

<style scoped></style>
