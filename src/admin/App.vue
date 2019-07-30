<template lang="pug">
  div
    router-view
</template>


<style lang="postcss">
@import "normalize.css";
@import "../styles/mixins";
@import "../styles/layout/base";

button {
  background: none;
}

.container {
  max-width: 1080px;
  &_full-md {
    @include tablets {
      margin: 0;
      width: 100%;
    }
  }
}

.main {
  background: url("~images/content/admin/bg.jpg") no-repeat center center;
  background-size: cover;
  padding-bottom: 30px;
  &__header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 56px 0;
    @include tablets {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  &__title {
    @include tablets {
      margin-bottom: 30px;
    }
  }
}
.p10 {
  padding-left: 10px;
  padding-right: 10px;
}
.card-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.tags-list {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}

.card {
  background: #ffffff;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  min-height: 387px;
  &_p0 {
    padding: 0;
  }
  &__title {
    color: #414c63;
    font-size: 18px;
    font-weight: 700;
    margin: 0 20px 0 20px;
    padding: 20px 10px 20px 10px;
    border-bottom: 1px solid rgba(#1f232d, 0.15);
    margin-bottom: 10px;
  }
  &__main {
    padding: 20px 30px 30px 30px;
  }
  &_about {
    width: 48.611%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 0 30px 30px 30px;
    @include tablets {
      width: 100%;
    }
  }
  &__table {
    width: 100%;
    border-collapse: collapse;
    th:first-child,
    td:first-child {
      padding-left: 10px;
    }
    th:last-child,
    td:last-child {
      padding-right: 10px;
    }
    &-head {
      padding-top: 20px;
      padding-bottom: 14px;
      font-size: 18px;
      font-weight: 600;
      color: #414c63;
      text-align: left;
    }
    &-row {
      &_head th {
        border-bottom: 1px solid rgba(#1f232d, 0.15);
      }
      td:nth-child(1),
      th:nth-child(1) {
        width: 62.268%;
        @include desktop {
          width: 50%;
        }
      }
      td:nth-child(2),
      th:nth-child(2) {
        width: 21.237%;
        @include desktop {
          width: 25%;
        }
      }
      th:nth-child(3),
      th:nth-child(4),
      td:nth-child(3),
      td:nth-child(4) {
        width: 6.804%;
        @include desktop {
          width: 12.5%;
        }
      }
      td {
        color: #414c63;
        padding-top: 12.5px;
        padding-bottom: 12.5px;
      }
    }
    &-label {
      padding-right: 20px;
    }
    &-value {
      position: relative;
      padding-right: 29px;
      &:after {
        content: "%";
        display: block;
        position: absolute;
        left: 50px;
        top: 11px;
        color: #414c63;
        opacity: 0.7;
      }
    }
  }
  &__footer {
    display: flex;
    justify-content: flex-end;
  }

  &_disabled {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(#fff, 0.7);
      z-index: 10;
    }
  }
  &__text {
    opacity: 0.7;
    color: #414c63;
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 10px;
  }
  &__link {
    font-weight: 600;
    margin-bottom: 40px;
    display: block;
  }
  &__btn {
    color: rgba(#414c63, 0.5);
    font-size: 16px;
    font-weight: 600;
    &-text {
      margin-right: 10px;
    }
  }
  &__header {
    position: relative;
  }
  &__tags-list {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 10px 10px 0 10px;
    flex-wrap: wrap-reverse;
    justify-content: flex-end;
  }
  &__tag {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}

.add-card-container {
  @include tablets {
    min-height: auto;
  }
}

button {
  &:hover svg {
    opacity: 1;
  }
  svg {
    height: 15px;
    width: auto;
    fill: #414c63;
    opacity: 0.5;
  }
}

.tick {
  svg {
    fill: #00d70a;
    opacity: 1;
  }
}
.cross {
  svg {
    fill: #bf2929;
    opacity: 1;
  }
}

.card-work {
  margin-bottom: 20px;
  &__field-container {
    margin-bottom: 15px;
    display: block;
  }
  &__main {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 48px 30px 30px 30px;
  }
  &__col {
    width: 48%;
    @include desktop {
      width: 100%;
    }
  }
  &__tags-list {
    margin-bottom: 40px;
  }
  &__footer {
    display: flex;
    justify-content: flex-end;
  }
  &__dragndrop {
    margin-bottom: 30px;
  }
  &__tag {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}

.dragndrop {
  &__main {
    border: 1px dashed #a1a1a1;
    background-color: #dee4ed;
    padding: 64px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
  }
  &__text {
    opacity: 0.5;
    color: #414c63;
    font-weight: 600;
    font-size: 16px;
    max-width: 222px;
    line-height: 33.89px;
  }
  &__btn {
    margin-top: 24px;
  }
  &__change {
    width: 100%;
  }
}
.textarea {
  border: 1px solid rgba(#414c63, 0.2);
  resize: none;
  width: 100%;
  min-height: 100px;
  padding: 13px 16px;
  color: #414c63;
  font-size: 16px;
  font-weight: 600;
  line-height: 30px;
}

.work-list {
  display: flex;
  flex-wrap: wrap;
  &__card {
    width: 31.48%;
    margin-bottom: 30px;
    position: relative;
    &:not(:nth-child(3n)) {
      margin-right: 30px;
      @include desktop {
        margin-right: 0;
      }
    }
    &:not(:nth-child(2n)) {
      @include desktop {
        margin-right: 30px;
      }
    }
    @include desktop {
      width: 48%;
    }
    @include tablets {
      width: 100%;
      &:not(:nth-child(3n)) {
        margin-right: 0;
      }
    }
  }
  &__title {
    border: none;
    padding-bottom: 0;
    margin-bottom: 0;
    padding-top: 40px;
  }
  &__main {
    padding-bottom: 60px;
  }
  &__footer {
    position: absolute;
    bottom: 30px;
    left: 30px;
    right: 30px;
  }
}

.card-review {
  &__main {
    display: flex;
    margin-bottom: 25px;
    @include tablets {
      flex-wrap: wrap;
    }
  }
  &__footer {
    width: 100%;
    margin-top: 25px;
    justify-content: flex-end;
  }
  &__col-1 {
    width: 22%;
    margin-right: 30px;
    @include tablets {
      width: 100%;
      margin-right: 0;
    }
  }
  &__col-2 {
    max-width: 611px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @include tablets {
      max-width: 100%;
    }
  }
  &__add-photo {
    background: #dee4ed;
    height: 200px;
    width: 200px;
    text-align: center;
    margin: 0 auto 10px auto;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      fill: #ffffff;
      height: 115px;
      display: block;
    }
    &-btn {
      width: 100%;
      @include tablets {
        margin-bottom: 30px;
      }
    }
  }
  &__field-container {
    width: 47%;
    margin-bottom: 35px;
    @include tablets {
      max-width: 100%;
    }
    &-textarea {
      width: 100%;
    }
  }
}

.review-list {
  display: flex;
  flex-wrap: wrap;
  &__card {
    width: 31.48%;
    margin-bottom: 30px;
    position: relative;
    &:not(:nth-child(3n)) {
      margin-right: 30px;
    }
    @include desktop {
      width: 48%;
    }
    @include tablets {
      width: 100%;
      &:not(:nth-child(3n)) {
        margin-right: 0;
      }
    }
  }
  &__img {
    max-width: 50px;
    height: auto;
    &-container {
      margin-right: 20px;
    }
  }
  &__name {
    color: #414c63;
    font-size: 18px;
    font-weight: 700;
  }
  &__who {
    opacity: 0.5;
    color: #414c63;
    font-size: 16px;
    font-weight: 600;
  }
  &__header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(#1f232d, 0.15);
    padding: 20px 10px;
    margin: 0 20px;
  }
  &__main {
    padding-bottom: 60px;
  }
  &__footer {
    position: absolute;
    bottom: 30px;
    left: 30px;
    right: 30px;
    justify-content: space-between;
  }
}
.login {
  max-width: 563px;
  width: 100%;
  background: #fff;
  padding: 55px 78px 60px 78px;
  margin: auto;
  @include tablets {
    padding: 0;
  }
  &-bg {
    display: flex;
    align-items: center;
    height: 100vh;
    min-height: 800px;
    background: url("~images/content/login/bg.jpg");
    @include tablets {
      background: #fff;
      height: auto;
    }
  }
  &__title {
    color: #414c63;
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 28px;
    text-align: center;
  }
  &__field-container {
    margin-bottom: 35px;
    display: block;
    position: relative;
  }
  &__btn {
    border-radius: 40px 5px;
    background-color: #ffffff;
    background-image: linear-gradient(to right, #ad00ed 0%, #5500f2 100%);
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    width: 100%;
    max-width: 347px;
    margin: 0 auto;
    display: block;
    padding: 28px 0;
  }
}
</style>