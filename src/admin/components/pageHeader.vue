<template lang="pug">
  header.header
    .container.header__container
      .header__logo
        logo
      h1.header__name 
        .header__name-text Игорь Бакин
        .header__name-login.login-link Выйти
      .header__title Панель администрирования
      a.header__login
        logout
</template>

<script>
import logo from "./logo";
import logout from "./logout";

export default {
  components: { logo, logout }
};
</script>


<style lang="postcss">
@import "normalize.css";
@import "../../styles/mixins";
@import "../../styles/layout/base";

.header {
  background-color: #3e3e59;
  background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);
  padding: 16px 19px;
  &__name {
    margin-right: 28px;
    &-text {
      font-size: 18px;
      font-weight: 600;
      color: #ffffff;
    }
    &-login {
      display: none;
      @include tablets {
        display: block;
      }
    }
  }
  &__title {
    flex-grow: 1;
    font-size: 14px;
    opacity: 0.5;
    color: #ffffff;
    @include tablets {
      display: none;
    }
  }
  &__logo {
    margin-right: 20px;
  }
  &__container {
    display: flex;
    align-items: center;
  }
  &__login {
    @include tablets {
      display: none;
    }
  }
}
</style>
