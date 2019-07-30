<template lang="pug">
  div
    pageHeader
    mainMenu
    main.main
      .container
        header.main__header
          h2.main__title Блок «Отзывы»
      .container.container_full-md
        .main__content
          .card.card-review
              .card__title Новый отзыв
              .card__main.card-review__main
                .card-review__col-1
                  .card-review__add-photo
                    svgIcon(name="avatar")
                  button.btn.btn_empty.card-review__add-photo-btn(type="button") Добавить фото
                .card-review__col-2
                  .card-review__field-container
                    field(label="Имя автора")
                  .card-review__field-container
                    field(label="Титул автора")
                  label.card-review__field-container.card-review__field-container-textarea
                    p.field-label Отзыв
                    textarea.textarea.card-review__textarea(type="text")
                  footer.card__footer.card-review__footer
                    btn(text="Отмена" :mods="['empty']")
                    btn(text="Сохранить")
          .review-list
            .card.work-add-container.review-list__card
              addCard(text="Добавить отзыв")
            .card.review-list__card
              .card__header.review-list__header
                .review-list__img-container
                  img.card__img.review-list__img(src="../../../images/content/reviews/r1.png")
                .review__header-text
                  .review-list__name Ковальчук Дмитрий
                  .review-list__who Основатель Loftschool
              .card__main.review-list__main
                .card__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                footer.card__footer.review-list__footer
                  .card__btn
                    span.card__btn-text Править
                    button: svgIcon(name="pencil")
                  .card__btn
                    span.card__btn-text Удалить
                    button: svgIcon(name="trash")
</template>

<script>
import svgIcon from "../svg";
import mainMenu from "../mainMenu";
import pageHeader from "../pageHeader";
import sectionTitle from "../sectionTitle";
import plusBtn from "../plusBtn";
import addCard from "../addCard";
import field from "../field";
import tag from "../tag";
import btn from "../btn";

export default {
  components: {
    mainMenu,
    pageHeader,
    sectionTitle,
    plusBtn,
    addCard,
    field,
    svgIcon,
    tag,
    btn
  }
};
</script>


<style lang="postcss">
</style>
