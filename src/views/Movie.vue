<template>
  <b-row align-h="center">
    <b-col>
      <h2><b>{{movie.name}} | {{movie.height}}p</b></h2>
      <div id="player"></div>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DPlayer from 'dplayer';
import { request, getTmdbPosterBaseUrl, getApiBaseUrl } from '@/utils';

@Component
export default class Movie extends Vue {

  private movie: any = {};
  private player: any;

  beforeMount() {
    request({
      url: `/movies/${this.$route.params.id}`,
      method: 'get'
    }).then(res => {
      this.movie = res.data.movie;
      this.setupPlayer();
    }).catch(err => {
      console.log(err);
    });
  }

  beforeDestroy() {
    this.destroyPlayer();
  }

  private setupPlayer() {
    this.destroyPlayer();

    this.player = new DPlayer({
        container: document.getElementById('player'),
        preload: false,
        screenshort: true,
        video: {
            url: `${getApiBaseUrl()}/movies/${this.movie.file._id}/stream`,
            pic: getTmdbPosterBaseUrl() + this.movie.background_path,
        }
    });
  }

  private destroyPlayer() {
    if(this.player) {
      this.player.destroy();
    }
  }
}
</script>
