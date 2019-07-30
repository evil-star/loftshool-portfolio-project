<template lang="pug">
  .logo
    img.logo__img(src="../../images/content/user.jpg")
</template>

<style lang="postcss">
@import "normalize.css";
@import "../../styles/mixins";
@import "../../styles/layout/base";

.logo {
  &__img {
    max-width: 45px;
    border-radius: 50%;
  }
}
</style>
