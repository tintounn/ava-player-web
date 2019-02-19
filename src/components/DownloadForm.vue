<template>
  <div>
  <b-form @submit="onSubmit">
    <b-form-group label="Nom du film">
      <input-delay v-model="form.name" @submit="onSearch" required />
      <a v-show="movies.length > 0" v-b-modal="'tmdbModal'" href="#">{{movies.length}} films trouvés</a>
    </b-form-group>

    <b-form-group label="Url de telechargement">
      <b-form-input v-model="form.url" required></b-form-input>
    </b-form-group>

    <b-form-group label="Date de sortie">
      <b-form-input v-model="form.release_date" type="date" required></b-form-input>
    </b-form-group>

    <b-form-group label="Résumé">
      <b-form-textarea v-model="form.overview"
                       aria-required
                       rows="3">
      </b-form-textarea>
    </b-form-group>
    <b-button class="btn-block" type="submit" variant="primary">Ajouter</b-button>
  </b-form>

  <b-modal size="lg" ref="tmdbModalRef" id="tmdbModal">
    <b-list-group>
      <b-list-group-item v-for="item in movies" :key="item.id" button @click="onClick(item)">
        {{item.title}} | {{item.release_date}} | {{item.overview}}
      </b-list-group-item>
    </b-list-group>
  </b-modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import InputDelay from './InputDelay.vue';
import { request } from '@/utils';

@Component({
  components: {
    InputDelay
  }
})
export default class DownloadForm extends Vue {

  private form: any = {name: '', url: '', release_date: '', overview: '', tmdb_id: '', poster_path: '', adult: '', background_path: ''};
  private movies: any = [];

  onSearch(value: any) {
    if((value && value != this.form.name) || !this.form.value) {
      request({
        url: '/movies/search',
        method: 'get',
        params: {
          like: value
        }
      }).then(res => {
        this.movies = res.data.movies;
      }).catch(err => {
        console.error(err);
      });
    }
  }

  onClick(item: any) {
    this.form.name = item.title;
    this.form.release_date = item.release_date;
    this.form.overview = item.overview;
    this.form.adult = item.adult;
    this.form.tmdb_id = item.id;
    this.form.background_path = item.backdrop_path;
    this.form.poster_path = item.poster_path;

    const modal: any = this.$refs.tmdbModalRef;
    modal.hide();
  }

  onSubmit(e: any) {
    e.preventDefault();
    this.$emit('submit', {...this.form});
  }
}
</script>

<style scoped>

</style>
