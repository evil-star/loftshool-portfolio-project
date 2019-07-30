<template lang="pug">
h2.title {{text}}
</template>

<script>
export default {
  props: {
    text: String
  }
};
</script>

<style lang="postcss" scoped>
@import "normalize.css";
@import "../../styles/mixins";
@import "../../styles/layout/base";
.title {
  font-weight: 700;
  color: #414c63;
  font-size: 21px;
  margin-right: 59px;
}
</style>
