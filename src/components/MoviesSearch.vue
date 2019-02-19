<template>
  <b-col>
    <input-delay placeholder="Recherche..." @submit="search"/>

    <movies-list :movies="movies"/>
  </b-col>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MoviesList from './MoviesList.vue';
import InputDelay from './InputDelay.vue';
import { request } from '@/utils';

@Component({
  components: {
    MoviesList, InputDelay
  }
})
export default class MoviesSearch extends Vue {
  private movies: any[] = [];

  beforeMount() {
    this.search();
  }

  private search(value: string = '') {
    request({
      url: '/movies',
      method: 'get',
      params: {
        like: value
      }
    }).then(res => {
      this.movies = res.data.movies;
    }).catch(err => {
      console.log(err);
    });
  }
}
</script>

<style scoped>

</style>
