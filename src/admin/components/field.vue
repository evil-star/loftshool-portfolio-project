<template lang="pug">
  label.field-container
    tooltip(:text="validation.firstError('input')" v-if="validation.hasError('input')")
    p.field-label(v-if="label") {{label}}
    input(v-model="input" @input="valid" :placeholder="placeholder" :type="type" :class="['field', computedMods]" )
</template>

<script>
import Vue from "vue";
import tooltip from "./tooltip";
import SimpleVueValidation from "simple-vue-validator";
const Validator = SimpleVueValidation.Validator;

Vue.use(SimpleVueValidation);

export default {
  data() {
    return {
      input: ""
    };
  },
  components: { tooltip },
  props: {
    placeholder: String,
    type: String,
    label: String,
    mods: Array,
    minLength: {
      type: Number,
      default: 1
    }
  },
  computed: {
    computedMods() {
      if (this.mods) return this.mods.map(val => "field_" + val);
    }
  },
  validators: {
    input(value) {
      return Validator.value(value)
        .required("Поле должно быть заполнено")
        .minLength(
          this.minLength,
          `Минимальное количество символов: ${this.minLength}`
        );
    }
  },
  methods: {
    valid() {
      this.$validate();
    }
  }
};
</script>


<style lang="postcss">
.field {
  border: none;
  border-bottom: 1px solid #000;
  display: block;
  width: 100%;
  padding-bottom: 10px;
  font-size: 16px;
  color: #414c63;
  &-container {
    display: block;
    position: relative;
  }
  &:focus {
    color: rgba(#414c63, 1);
    border-bottom: 1px solid #383bcf;
    font-weight: 600;
  }
  &-label {
    opacity: 0.5;
    color: #414c63;
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 10px;
  }
  &__new-skill {
    margin-right: 10px;
    max-width: 218px;
  }
  &__value {
    max-width: 74px;
    margin-right: 29px;
  }
  &:focus {
    outline: none;
  }
  &_lg {
    font-size: 18px;
    font-weight: 600;
  }
  &_p10 {
    padding-left: 10px;
    padding-right: 10px;
  }
  &_p20 {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
