<template lang="pug">
  div
    pageHeader
    mainMenu
    main.main
      .container
        header.main__header
          sectionTitle(text="Редактирование работы")
      .container.container_full-md
        .main__content
          .card__list
            .card.card-work
              .card__title Редактирование работы
              .card-work__main
                .card-work__col
                  .dragndrop.card-work__dragndrop
                    .dragndrop__main
                      .dragndrop__text Перетащите или загрузите для загрузки изображения
                      .dragndrop__btn: btn(text="Загрузить")
                    button.dragndrop__change.btn.btn_empty Изменить превью
                .card-work__col
                  .card-work__field-container
                    field(label="Название")
                  .card-work__field-container
                    field(label="Ссылка")
                  label.card-work__field-container
                    p.field-label Описание
                    textarea.textarea.card-work__textarea(type="text")
                  .card-work__field-container
                    field(label="Добавление тэга")
                  .tags-list.card-work__tags-list
                    .card-work__tag: tag(text="html")
                    .card-work__tag: tag(text="html")
                  footer.card-work__footer
                    btn(text="Отмена" :mods="['empty']")
                    btn(text="Сохранить")
          .work-list
            .card.work-list__card.add-card-container
              addCard(text="Добавить работу")
            .card.work-list__card
              .card__header
                img.card__img(src="../../../images/content/works/slider-1.jpg")
                .tags-list.card__tags-list
                  .card__tag: tag(text="html")
                  .card__tag: tag(text="html")
              .card__title.work-list__title Сайт школы образования
              .card__main.work-list__main
                .card__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a.card__link http://loftschool.ru
                footer.card__footer.work-list__footer
                  .card__btn
                    span.card__btn-text Править
                    button
                      svgIcon(name="pencil")
                  .card__btn
                    span.card__btn-text Удалить
                    button
                      svgIcon(name="trash")
            .card.work-list__card.card_disabled
              .card__header
                img.card__img(src="../../../images/content/works/slider-1.jpg")
                .tags-list.card__tags-list
                  .tags-list.card__tags-list
                  .card__tag: tag(text="html")
                  .card__tag: tag(text="html")
              .card__title.work-list__title Сайт школы образования
              .card__main.work-list__main
                .card__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a.card__link http://loftschool.ru
                footer.card__footer.work-list__footer
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
