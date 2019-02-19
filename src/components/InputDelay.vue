<template>
  <b-input :id="id" :class="classes" v-model="content" @input="onInput"
           :type="type" :required="required" :placeholder="placeholder"></b-input>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class InputDelay extends Vue {
  @Prop() private id!: string;
  @Prop() private required!: boolean;
  @Prop({default: ''}) private value!: string;
  @Prop({default: 'text'}) private type!: string;
  @Prop({default: 500}) private delay!: number;
  @Prop() private placeholder!: string;
  @Prop() private classes!: string;

  private timeoutId!: number;
  private content: string = this.value;

  @Watch('value')
  valueChanged(newValue: any, oldValue: any) {
    this.content = newValue;
  }

  onInput(e: any) {
    if(this.content == this.value) {
      return;
    }

    this.$emit('input', this.content);

    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.$emit('submit', this.content);
    }, this.delay);
  }
}
</script>

<style scoped>

</style>
