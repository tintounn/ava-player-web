<template>
  <div>
    <b-row>
      <b-col>
        <h4>Telechargements</h4>
        <b-card no-body class="mb-1">
          <b-btn href="#" v-b-toggle.accordion_form variant="secondary">Ajout d'un film</b-btn>
          <b-collapse id="accordion_form" role="tabpanel">
            <b-card-body>
              <download-form @submit="onDownloadFormSubmit" />
            </b-card-body>
          </b-collapse>
        </b-card>
      </b-col>
    </b-row>
    <hr/>
    <b-row>
      <b-col>
        <h4>Utilisateurs</h4>
        <users-list @saved="onUserSaved" :users="users" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4>Invitation</h4>
        <b-row>
          <b-col cols="8">
            <b-input disabled v-model="invitationUrl" />
          </b-col>
          <b-col cols="4">
            <b-button class="btn-block" @click="onCreateInvitationClick" type="submit" variant="primary">Créer une invitation</b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { request } from '@/utils';

import UsersList from '@/components/UsersList.vue';
import DownloadForm from '@/components/DownloadForm.vue';


@Component({
  components: {
    UsersList, DownloadForm
  }
})
export default class Admin extends Vue {
  
  private users: any[] = [];
  private invitationUrl: string = '';

  beforeMount() {
    this.refreshUsers();
    this.refreshDownloads();
  }

  private onUserSaved(user: any) {
    request({
      url: `/users/${user._id}`,
      method: 'put',
      data: user
    }).then(res => {
      this.refreshUsers();
    }).catch(err => {
      console.error(err);
    });
  }

  private onCreateInvitationClick() {
    request({
      url: '/invitations',
      method: 'post'
    }).then((res) => {
      this.invitationUrl = `${window.location.origin}/register/${res.data.invitation.token}`
    }).catch(err => {
      this.$notify({
        type: 'error',
        title: 'Erreur !',
        text: 'Oh une erreur'
      });
    });
  }

  private onDownloadFormSubmit(movie: any) {
    request({
      url: '/movies',
      method: 'post',
      data: movie
    }).then(res => {
      console.log(res);
    }).catch(err => {
      this.$notify({
        type: 'error',
        title: 'Erreur !',
        text: 'Oh une erreur'
      });
    });
  }

  private refreshUsers() {
    request({
      url: '/users',
      method: 'get'
    }).then(res => {
      this.users = [...res.data.users];
    }).catch(err => {
      console.error(err);
    });
  }

  private refreshDownloads() {
    request({
      url: ''
    }).then(res => {

    }).catch(err => {

    });
  }
}
</script>
