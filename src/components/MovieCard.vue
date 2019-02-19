<template>
  <router-link :to="{ name: 'movie', params: {id: movie._id} }">
    <b-card overlay
          class="card"
          :img-src="src"
          :img-alt="movie.name">
      <b-card-text class="full-height">
        <b-row class="full-height">
          <b-col style="text-align: left">
            <b-badge pill variant="info">{{movie.duration | duration}}</b-badge>
          </b-col>
          <b-col style="text-align: right">
            <b-badge pill variant="info">720p</b-badge>
          </b-col>
        </b-row>
      </b-card-text>
    </b-card>
  </router-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { getTmdbPosterBaseUrl } from '@/utils';

@Component
export default class MovieCard extends Vue {
  @Prop() private movie!: any;  

  get src() {
    return getTmdbPosterBaseUrl() + this.movie.poster_path;
  }
}
</script>

<style scoped>
  .card {
    margin-top: 12px;
    margin-bottom: 12px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: all 0.3s ease-in-out;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19);
    transition: all 0.3s ease-in-out;
  }
</style>
