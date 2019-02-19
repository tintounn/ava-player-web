<template>
  <b-row>
    <b-col>
      <b-row align-h="center">
        <Header/>
      </b-row>
      <hr/>
      <router-view/>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import socket, { connect } from '@/socket';

@Component({
  components: {
    Header
  },
})
export default class Home extends Vue {
  beforeMount() {
    connect();
  }
}
</script>
