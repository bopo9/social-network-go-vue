<template>
  <input class="input" :type="type" :class="'input_' + colorType + ' ' + 'input_' + size" :placeholder="placeholder">
</template>

<script>
export default {
  name: "inputGenerate",
  data(){
    return {

    }
  },
  props: {
    type: String,
    colorType: String,
    size: String,
    placeholder: String
  }
}
</script>

<style lang="scss" scoped>

.input{
  border: none;
  outline: 2px solid #eaeaea;
  color: #ffffff;
  background-color: #ffffff;
  &:hover {
    cursor: pointer;
  }
  &:focus{
    color: #8c8c8c;
    background-color: #dadada;
    outline: 2px solid #c4c4c4;
  }
  &_primary{
    outline: 2px solid $primary;
  }
  &_warning{
    outline: 2px solid $warning;
  }
  &_danger{
    outline: 2px solid $danger;
  }
  &_success{
    outline: 2px solid $success;
  }
  &_sm {
    line-height: 40px;
    padding: 0 5px 0 5px;
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