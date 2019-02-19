<template>
  <b-table small hover outlined responsive :fields="fields" :items="rows">

    <template slot="actions" slot-scope="data">
      <b-button-group  size="sm">
        <template v-if="!data.item.edit">
          <b-button @click="editRow(data.index)" variant="primary">Modifier</b-button>
        </template>
        <template v-else>
          <b-button @click="saveRow(data.index)" variant="success">Valider</b-button>
        </template>
        <b-button variant="danger">X</b-button>
      </b-button-group>
    </template>

    <template slot="role" slot-scope="data">
      <template v-if="!data.item.edit">
        {{data.item.role}}
      </template>
      <template v-else>
        <b-form-select v-model="data.item.role" size="sm">
          <option value="2">Utilisateur</option>
          <option value="1">Admin</option>
        </b-form-select>
      </template>
    </template>

    <template slot="is_adult" slot-scope="data">
      <template v-if="!data.item.edit">
        {{data.item.is_adult}}
      </template>
      <template v-else>
        <b-form-checkbox v-model="data.item.is_adult"
                         :value="true"
                         :unchecked-value="false">
        </b-form-checkbox>
      </template>
    </template>

  </b-table>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { request } from '@/utils';

@Component
export default class UsersList extends Vue {
  @Prop({default: () => {return []}}) private users!: any[];

  private rows: any[] = this.users;
  private fields: any[string] = ['_id', 'username', 'email', 'role', 'is_adult', 'actions'];

  @Watch('users')
  usersChanged(newValue: any[], oldValue: any[]) {
    this.rows = [...newValue];
  }

  private editRow(index: number) {
    Vue.set(this.rows, index, {...this.rows[index], edit: true});
  }

  private saveRow(index: number) {
    Vue.set(this.rows, index, {...this.rows[index], edit: false});
    this.$emit('saved', this.rows[index]);
  }
}
</script>

<style scoped>

</style>
