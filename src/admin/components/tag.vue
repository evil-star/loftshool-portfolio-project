<template lang="pug">
  .tag
    .tag__text {{text}}
    button.tag__cross 
      svgIcon(name="cross")
</template>

<script>
import svgIcon from "./svg";

export default {
  props: {
    text: String
  },
  components: { svgIcon }
};
</script>

<style lang="postcss">
.tag {
  border-radius: 15px;
  background-color: #f4f4f4;
  padding: 7px 13px;
  color: #283340;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  &__text {
    margin-right: 9px;
    opacity: 0.7;
  }
  &__cross {
    background: none;
    padding: 0;
    svg {
      width: 11px;
      height: auto;
    }
  }
}
</style>
