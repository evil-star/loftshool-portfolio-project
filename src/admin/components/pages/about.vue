<template lang="pug">
  div
    pageHeader
    mainMenu
    main.main
      .container
        header.main__header
          .main__title
            sectionTitle(text="Блок «Обо мне»")
          plusBtn(text="Добавить группу")
      .container.container_full-md
        .main__content
          .card-list
            .card.card_about
              table.card__table
                tr.card__table-row.card__table-row_head
                  th.card__table-head
                    field(placeholder="Название новой группы" :mods="['lg']")
                  th.card__table-head
                  th.card__table-head
                    button
                      svgIcon(name="tick").tick
                  th.card__table-head
                    button
                      svgIcon(name="cross").cross
              footer.card__footer
                field(placeholder="Новый навык" :mods="['p20']").field__new-skill
                field(placeholder="Новый навык" :mods="['p10']").field__value
                plusBtn(:mods="['lg']")

            .card.card_about
              table.card__table
                tr.card__table-row.card__table-row_head
                  th.card__table-head
                    field(placeholder="Название новой группы" :mods="['lg']")
                  th.card__table-head
                  th.card__table-head
                    button
                      svgIcon(name="pencil")
                  th.card__table-head
                    button
                      svgIcon(name="trash")
                tr.card__table-row
                  td.card__table-label Git
                  td.card__table-value: span.p10 100
                  td.card__table-btn
                    button
                      svgIcon(name="pencil")
                  td.card__table-btn
                    button
                      svgIcon(name="trash")
                tr.card__table-row
                  td.card__table-label Git
                  td.card__table-value: span.p10 100
                  td.card__table-btn
                    button
                      svgIcon(name="pencil")
                  td.card__table-btn
                    button
                      svgIcon(name="trash")
              footer.card__footer
                field(placeholder="Новый навык" :mods="['p20']").field__new-skill
                field(placeholder="Новый навык" :mods="['p10']").field__value
                plusBtn(:mods="['lg']")
            .card.card_about
              table.card__table
                tr.card__table-row.card__table-row_head
                  th.card__table-head Workflow
                  th.card__table-head
                  th.card__table-head
                    button
                      svgIcon(name="pencil")
                  th.card__table-head
                    button
                      svgIcon(name="trash")
                tr.card__table-row
                  td.card__table-label
                    field(placeholder="Git")
                  td.card__table-value
                    field(placeholder="100" :mods="['p10']")
                  td.card__table-btn
                    button
                      svgIcon(name="pencil")
                  td.card__table-btn
                    button
                      svgIcon(name="trash")
                tr.card__table-row
                  td.card__table-label Git
                  td.card__table-value: span.p10 100
                  td.card__table-btn
                    button
                      svgIcon(name="pencil")
                  td.card__table-btn
                    button
                      svgIcon(name="trash")
              footer.card__footer
                field(placeholder="Новый навык" :mods="['p20']").field__new-skill
                field(placeholder="Новый навык" :mods="['p10']").field__value
                plusBtn(:mods="['lg']")
</template>

<script>
import svgIcon from "../svg";
import mainMenu from "../mainMenu";
import pageHeader from "../pageHeader";
import sectionTitle from "../sectionTitle";
import plusBtn from "../plusBtn";
import field from "../field";

export default {
  components: {
    mainMenu,
    pageHeader,
    sectionTitle,
    plusBtn,
    field,
    svgIcon
  }
};
</script>

<style lang="postcss">
</style>
