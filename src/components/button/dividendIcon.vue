<template>
  <button class="v-btn v-btn--elevated v-theme--light v-btn--density-default v-btn--size-small v-btn--variant-elevated">
    <span class="v-btn__overlay"></span>
    <span class="v-btn__underlay"></span>
    <span class="v-btn__prepend"><i class="mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true" >
                  <img style="width: 100%;" src="/icons/dividend-icon.png" alt="dividend-icon"/></i>
                </span>
    배당금 입력
  </button>
</template>



<script>

export default {
  name: "DividendIcon",
  components: {
  },
  props: {
  },
  data: function () {
    return {
    }
  },
  watch: {},
  created: async function () {
  },
  methods: {

  }
};
</script>
