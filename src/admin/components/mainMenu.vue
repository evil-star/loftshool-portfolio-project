<template lang="pug">
  nav.nav
    .container
      ul.nav__list
        li.nav__item
          router-link(to="/about").nav__item-link Обо мне
        li.nav__item
          router-link(to="/works").nav__item-link Работы
        li.nav__item
          router-link(to="/reviews").nav__item-link Отзывы
</template>

<script>
</script>

<style lang="postcss">
@import "normalize.css";
@import "../../styles/mixins";
@import "../../styles/layout/base";

.nav {
  &__list {
    display: flex;
  }
  &__item {
    &-link {
      padding: 28px 30px;
      color: #414c63;
      font-size: 16px;
      font-weight: 600;
      display: block;
      border-bottom: 2px solid transparent;
      @include tablets {
        padding: 28px 18px;
      }
      &:hover {
        color: #383bcf;
        text-decoration: none;
      }
      &:focus {
        color: #383bcf;
        border-bottom: 2px solid #383bcf;
        text-decoration: none;
      }
    }
  }
}
</style>