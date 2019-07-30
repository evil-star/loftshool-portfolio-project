<template lang="pug">
  button(:type="type || 'button'" :class="['btn', computedMods]") {{text}}
</template>

<script>
export default {
  props: {
    type: String,
    text: String,
    mods: Array
  },
  computed: {
    computedMods() {
      if (this.mods) return this.mods.map(val => "btn_" + val);
    }
  }
};
</script>

<style lang="postcss">
.btn {
  border-radius: 25px;
  background-color: #ffffff;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  text-align: center;
  padding: 15px 40px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 700;
  &_empty {
    background: none;
    color: #383bcf;
    text-transform: none;
  }
}
</style>
