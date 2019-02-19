<template>
  <b-row>
    <movies-search/>
  </b-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MoviesSearch from '@/components/MoviesSearch.vue';

@Component({
  components: {
    MoviesSearch
  },
})
export default class Movies extends Vue {}
</script>
