<template>
  <b-row align-h="center">
    <template v-for="item in movies">
      <b-col :key="item._id" sm="6" md="4" lg="3" xl="2" >
        <movie-card :movie="item" />
      </b-col>
    </template>
  </b-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import MovieCard from './MovieCard.vue';

@Component({
  components: {
    MovieCard
  }
})
export default class MoviesList extends Vue {
  @Prop({default: () => {return []}}) private movies!: any[];
}
</script>

<style scoped>

</style>
