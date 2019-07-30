<template lang="pug">
  .tooltip {{text}}
</template>

<script>
export default {
  props: {
    text: String
  }
};
</script>


<style lang="postcss" scoped>
.tooltip {
  position: absolute;
  background: #cd1515;
  color: #ffffff;
  font-weight: 400;
  padding: 15px 20px;
  top: calc(100% - 2px);
  left: 15%;
  z-index: 10;
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 6px solid #cd1515;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
