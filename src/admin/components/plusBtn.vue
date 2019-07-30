<template lang="pug">
  button(:class="['add-btn', computedMods]")
    .add-btn__icon +
    .add-btn__text(v-if="text") {{text}}
</template>

<script>
export default {
  props: {
    text: String,
    mods: Array
  },
  computed: {
    computedMods() {
      if (this.mods) return this.mods.map(val => "add-btn_" + val);
    }
  }
};
</script>

<style lang="postcss">
.add-btn {
  background: none;
  display: flex;
  align-items: center;
  padding: 0;
  &_lg &__icon {
    width: 40px;
    height: 40px;
    font-size: 30px;
  }
  &__icon {
    color: #ffffff;
    width: 21px;
    height: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    border-radius: 50%;
    font-size: 15px;
    font-weight: 600;
  }
  &__text {
    margin-left: 13px;
    color: #383bcf;
    font-weight: 600;
    font-size: 16px;
  }
  &:hover &__text {
    text-decoration: underline;
  }
}
</style>
