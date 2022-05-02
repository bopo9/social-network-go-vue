<template>
  <div>
    <header-component></header-component>
    <div id="app">
      <div class="main container">
        <SideBarNav class="main__sideBar"></SideBarNav>
        <div class="main__content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const SideBarNav = () => import("@/components/main/SideBarNav")
import HeaderComponent from "@/components/main/header";
export default {
  name: 'App',
  components: {
    HeaderComponent,
    SideBarNav
  },
  data(){
    return {

    }
  },
  beforeRouteUpdate(to){
    console.log(to)
    this.handleShowingSideBar(to);
  },
  mounted() {

  },
  methods: {
    handleShowingSideBar(to) {
      console.log(to)
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html, body, pre, code, kbd, samp {
  font-family: 'Rubik', sans-serif;
}

.container {
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 10px 0 10px;
}

.main {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  &__sideBar {
    align-self: flex-start;
    width: 20%;
  }
  &__content {
    width: 70%;
  }
}

</style>
