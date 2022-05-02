<template>
 <div id="header" class="position-r">
   <div class="header">
     <div class="header__logo">
       <p>Anonymous</p>
     </div>
     <ul class="header__navbar">
       <li class="header__navbar_item">
         <router-link class="header__navbar_link" to="/">
           Home
         </router-link>
       </li>
       <li class="header__navbar_item">
         <router-link class="header__navbar_link" to="/">
           Invite
         </router-link>
       </li>
       <li class="header__navbar_item">
         <router-link class="header__navbar_link" :to="{ name: 'profile', params: { username: this.$store.getters['user/getUser'].username }}">
           Settings
         </router-link>
       </li>
       <li class="header__navbar_item">
         <router-link class="header__navbar_link" to="/">
           Exit
         </router-link>
       </li>
     </ul>
   </div>
 </div>
</template>

<script>
export default {
  name: "header-component",
  components: {
  },
  data(){
    return {

    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
$lightBlue: #49a69e;
#header {
  justify-content: center;
  display: flex;
  flex-direction: row;
  background-color: $lightBlue;
}

.header {
  display: flex;
  line-height: 50px;
  width: 100vw;
  padding: 0 20px 0 20px;
  max-width: 1440px;
  &__logo {
    width: 50%;
  }
  &__navbar {
    gap: 2rem;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    list-style: none;
    &_item {

    }
    &_link{
      font-size: 20px;
      font-weight: 400;
      color: white;
      text-transform: uppercase;
      text-decoration: none;
    }
  }
}


</style>