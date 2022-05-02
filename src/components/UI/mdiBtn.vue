<template>
  <div>
    <button class="btn">
      <mdicon :class="'btn__type_' + type" :name="name" :size="size" />
    </button>
  </div>
</template>

<script>
export default {
  name: "mdiBtn",
  data(){
    return {

    }
  },
  props: {
    type: String,
    name: String,
    size: String
  }
}
</script>

<style lang="scss" scoped>

.btn{
  padding: 5px;
  border: none;
  background-color: #ffffff;
  transition: background-color .3s ease;
  &:hover {
    cursor: pointer;
    background-color: #e0e0e0;
  }
  &__type {
    &_primary{
      color: #58cec5;
    }
    &_warning{
      color: #d7a331;
    }
    &_danger{
      color: #d23249;
    }
    &_success{
      color: #61d932;
    }
  }
}

</style>