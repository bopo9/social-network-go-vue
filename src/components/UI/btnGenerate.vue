<template>
  <div>
    <button class="btn" :class="'btn_' + type + ' ' + 'btn_' + size">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "btnGenerate",
  data(){
    return {

    }
  },
  props: {
    type: String,
    size: String
  }
}
</script>

<style lang="scss" scoped>

.btn{
  border: none;
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
  &_primary{
    background-color: $primary;
    box-shadow: -7px -7px 0px -3px $darkPrimary inset;
    &:hover {
      box-shadow: -9px -9px 0px -3px $darkPrimary inset;
    }
    &:active {
      box-shadow: 7px 7px 0px -3px $darkPrimary inset;
    }
  }
  &_warning{
    background-color: $warning;
  }
  &_danger{
    background-color: $danger;
  }
  &_success{
    background-color: $success;
  }
  &_sm {
    line-height: 40px;
    padding: 0 10px 0 10px;
    font-size: 18px;
  }
  &_md {
    line-height: 45px;
    padding: 0 10px 0 10px;
    font-size: 22px;
  }
  &_xl {
    height: 100px;
    width: 150px;
  }

}

</style>
<style scoped>

</style>