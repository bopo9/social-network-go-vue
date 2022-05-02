<template>
  <div class="sideBar">
    <div class="sideBar__search">
      <inputGenerate placeholder="Type your query here" size="sm" type="search" colorType=""></inputGenerate>
      <btnGenerate size="sm" type="primary">Search</btnGenerate>
    </div>
    <div class="sideBar__navbar">
      <ul class="sideBar__navbar__list">
        <li class="sideBar__navbar__list__item">
          <router-link class="sideBar__navbar__list__item__link" to="">My Profile</router-link>
        </li>
        <li class="sideBar__navbar__list__item">
          <router-link class="sideBar__navbar__list__item__link" to="">My Friends</router-link>
        </li>
        <li class="sideBar__navbar__list__item">
          <router-link class="sideBar__navbar__list__item__link" to="">My Groups</router-link>
        </li>
        <li class="sideBar__navbar__list__item">
          <router-link class="sideBar__navbar__list__item__link" to="">My TODO's</router-link>
        </li>
        <li class="sideBar__navbar__list__item">
          <router-link class="sideBar__navbar__list__item__link" to="">My Games</router-link>
        </li>
        <li class="sideBar__navbar__list__item">
          <router-link class="sideBar__navbar__list__item__link" to="">My Files</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const inputGenerate = () => import("@/components/UI/inputGenerate");
const btnGenerate = () => import("@/components/UI/btnGenerate");
export default {
  name: "SideBarNav",
  components: {
    inputGenerate,
    btnGenerate,
  },
  data(){
    return {
      sideBarHeight: null,
      sideBarWidth: null,
    }
  },
  mounted() {
    let sideBar = document.querySelectorAll(".sideBar")[0];
    this.sideBarHeight = `${sideBar.offsetHeight}`;
    this.sideBarWidth = `${sideBar.offsetWidth - 3}`;
  }
}
</script>

<style lang="scss" scoped>

.sideBar {
  &__search {
    gap: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding: 10px;
    border: 1px dashed #8c8c8c;
  }
  &__navbar{
    margin-top: 5px;
    padding: 20px;
    border: 1px dashed #8c8c8c;
    &__list {
      display: flex;
      flex-direction: column;
      list-style: none;
      &__item {

        &__link {
          font-size: 22px;
          text-decoration: none;
          color: $link;
          &:hover {
            border-bottom: 1px solid $linkHover;
            color: $linkHover;
          }
        }
      }
    }
  }
}

</style>