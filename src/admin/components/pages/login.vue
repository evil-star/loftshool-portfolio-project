<template lang="pug">
  .login-bg
    .container
      form.login
        .login__title Авторизация
        .login__field-container
          field(label="Логин" type="text" :minLength="3")
        .login__field-container
          field(label="Пароль" type="password" :minLength="6")
        button.login__btn(type="submit") Отправить
</template>

<script>
import field from "../field";

export default {
  components: {
    field
  }
};
</script>


<style lang="postcss">
</style>
