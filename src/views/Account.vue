<template>
  <div>
    <b-row>
      <b-col sm="12" md="4">
        <b-list-group>
          <b-list-group-item>
            <router-link :to="{ name: 'account' }">Général</router-link>
          </b-list-group-item>

          <b-list-group-item>
            <router-link :to="{ name: 'security' }">Sécurité</router-link>
          </b-list-group-item>

          <b-list-group-item href="#">Historique</b-list-group-item>

          <template v-if="isAdmin">
            <b-list-group-item>
              <router-link :to="{ name: 'admin' }">Admin</router-link>
            </b-list-group-item>
          </template>

        </b-list-group>
      </b-col>
      <b-col sm="12" md="8">
        <router-view/>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ResetPwdForm from '@/components/ResetPwdForm.vue';
import { getTokenData } from '@/utils';

@Component({
  components: {
    ResetPwdForm
  }
})
export default class Account extends Vue {
  get isAdmin() {
    const tokenData = getTokenData();
    return tokenData.role == 1;
  }
}
</script>
