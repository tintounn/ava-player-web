<template>
  <div>
    <b-row>
      <b-col>
        <reset-pwd-form @submit="onResetPasswordFormSubmit"/>
      </b-col>
    </b-row>
    <hr/>
    <b-row>
      <b-col>
        <b-button class="btn-block" variant="danger">Supprimer mon compte</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { request, getTokenData } from '@/utils';
import ResetPwdForm from '@/components/ResetPwdForm.vue';

@Component({
  components: {
    ResetPwdForm
  },
})
export default class Security extends Vue {

  onResetPasswordFormSubmit(data: any) {
    const tokenData = getTokenData();

    request({
      url: `/users/${tokenData.user_id}`,
      method: 'put',
      data: data
    }).then(res => {
    }).catch(err => {
      console.error(err);
    });
  }

}
</script>
