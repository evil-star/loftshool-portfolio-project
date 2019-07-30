<template lang="pug">
button.add-card
  .add-card__icon +
  .add-card__text(v-if="text") {{text}}
</template>

<script>
export default {
  props: {
    text: String
  }
};
</script>


<style lang="postcss">
@import "normalize.css";
@import "../../styles/mixins";
@import "../../styles/layout/base";
.add-card {
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  height: 100%;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  color: #ffffff;
  @include tablets {
    padding: 30px;
    flex-direction: row;
    align-items: center;
    min-height: auto;
  }
  &__icon {
    border: 2px solid #fff;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 72px;
    margin-bottom: 25px;
    @include tablets {
      margin-right: 20px;
      width: 50px;
      height: 50px;
      font-size: 24px;
      margin-bottom: 0;
    }
  }
  &__text {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    max-width: 95px;
    @include tablets {
      max-width: none;
    }
  }
}
</style>

