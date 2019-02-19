<template>
  <b-form @submit="onSubmit">
    <b-form-group label="Ancien mot de passe">
      <b-form-input v-model="form.old_password" required type="password"></b-form-input>
    </b-form-group>

    <b-form-group label="Nouveau mot de passe">
      <b-form-input v-model="form.password" required type="password"></b-form-input>
    </b-form-group>

    <b-form-group label="Confirmation mot de passe">
      <b-form-input v-model="form.confirm" required type="password"></b-form-input>
    </b-form-group>

    <b-button class="btn-block" type="submit" variant="primary">Valider</b-button>
  </b-form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ResetPwdForm extends Vue {

  private form: any = {old_password: '', password: '', confirm: ''};

  onSubmit(e: any) {
    e.preventDefault();

    if(this.form.password == this.form.confirm) {
      this.$emit('submit', {...this.form});
    }
  }
}
</script>
