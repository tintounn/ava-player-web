<template>
  <div  class="full-height">
  <b-container class="full-height">
    <router-view/>
  </b-container>
  <notifications />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import 'bootswatch/dist/sandstone/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.min.css';
import 'video.js/dist/video-js.css';
import 'dplayer/dist/DPlayer.min.css';

@Component
export default class App extends Vue {}
</script>

<style>
  html, body, .full-height {
    height: 100%;
  }

  .background {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
  }
</style>
