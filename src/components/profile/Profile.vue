<template>
  <div class="profile">
    <div class="profile__title">
      <span>Profile</span>
    </div>
    <div class="profile__card">
      <div class="profile__card__left">
        <img :src="avatar" alt="avatar">
        <div class="reputation">
          <div class="reputation__bar">
            <div class="reputation__bar_text">
              <span>Rating:</span>
              <span>146%</span>
            </div>
          </div>
        </div>
      </div>
      <div class="profile__card__right">
        <div class="profile__card__right__rep">
          <span>[+rep]</span>
          <span>[-rep]</span>
        </div>
        <div class="card__info">
          <span class="card__info__name">{{ fullName }}</span>
          <span class="card__info__item">Age: {{ age }}</span>
          <span class="card__info__item">Location: {{ location }}</span>
          <span class="card__info__item">Sex: {{ gender }}</span>
        </div>
        <div class="card__action">
          <mdiBtn name="phone" type="primary" size="35"></mdiBtn>
          <mdiBtn name="video" type="primary" size="35"></mdiBtn>
          <btnGenerate size="sm" type="primary">Send message</btnGenerate>
        </div>
        <div class="border-line-1 "></div>
        <div class="card__games">
          <p class="card__games_title">Games:</p>
          <ul class="card__games__list">
            <li class="card__games__list__item" v-for="item in games" :key="item">{{item}}</li>
          </ul>
        </div>
        <div class="wall">
          <div class="wall__title">
            <span>Wall</span>
          </div>
          <div class="wall__item">
            <textarea class="wall__item__textArea" placeholder="What's new ?"></textarea>
            <btnGenerate class="wall__item__btn" size="sm" type="primary">Send</btnGenerate>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const mdiBtn = () => import("@/components/UI/mdiBtn")
const btnGenerate = () => import("@/components/UI/btnGenerate")
export default {
  name: "Profile-Component",
  components: {
    mdiBtn,
    btnGenerate
  },

  data() {
    return {
      name: null,
      surname: null,
      username: null,
      age: null,
      gender: null,
      avatar: null,
      location: null,
      games: [
        "Dota 2",
        "Dota 2",
        "Dota 2",
        "CS:GO",
        "CS:GO",
        "War Thunder",
        "War Thunder",
        "PUBG",
        "PUBG",
        "World of Tanks",
        "World of Tanks",
        "World of Tanks",
        "World of Tanks",
      ]
    }
  },
  computed:{
    fullName(){
      return this.name + " " + this.surname;
    },
    user(){
      return this.$store.getters["user/getUser"]
    }
  },
  beforeMount() {
    this.setUserInComponent();
  },
  methods: {
    setUserInComponent(){
      this.name = this.user.name;
      this.surname = this.user.surname;
      this.username = this.user.username;
      this.age = this.user.age;
      this.gender = this.user.gender;
      this.avatar = this.user.avatar;
      this.location = this.user.country + ", " + this.user.city;
    }
  }
}
</script>

<style lang="scss" scoped>

@keyframes progress-animation {
  0% {
    background-position: 100%;
  }
  100%{
    background-position: 0;
  }
}

.profile {
  box-shadow: 3px 3px 3px $darkPrimary;
  border: 2px solid $darkPrimary;
  &__title {
    color: #ffffff;
    font-size: 23px;
    padding: 5px;
    background-color: $primary;
  }
  &__card {
    padding: 10px;
    display: flex;
    box-shadow: -3px -3 px 0 0 ;
    &__left{
      width: 30%;
      display: flex;
      flex-direction: column;
      & .reputation {
        margin-top: 15px;
        width: 100%;
        height: 25px;
        background: #000000;
        border-radius: 3px;
        overflow: hidden;
        &__bar{
          display: block;
          height: 100%;
          background: linear-gradient(90deg,#ffd33d,#ea4aaa 17%,#b34bff 34%,#01feff 51%,#ffd33d 68%,#ea4aaa 85%,#b34bff);
          background-size: 300% 100%;
          animation: progress-animation 3s linear infinite;
          &_text{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            & span {
              font-size: 20px;
              font-weight: 400;
            }
          }
        }
      }
    }
    &__right {
      position: relative;
      width: 70%;
      display: flex;
      flex-direction: column;
      &__rep {
        display: flex;
        flex-direction: column;
        position: absolute;
        align-self: flex-end;
        & span {
          color: $link;
          &:hover {
            cursor: pointer;
            color: $linkHover;
          }
        }
      }
      & .card__info{
        display: flex;
        flex-direction: column;
        &__name{
          font-weight: 600;
          font-size: 32px;
          color: $primary;
        }
        &__item{
          margin-top: 4px;
          font-weight: 300;
          font-size: 24px;
          color: $black;
        }
      }
      & .card__action{
        margin-top: 5px;
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      & .card__games {
        &_title {
          font-weight: 500;
          font-size: 25px;
          color: $black;
        }
        &__list {
          margin: 10px 0 0 10px;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          list-style: none;
          &__item{
            padding: 7px;
            font-size: 20px;
            font-weight: 300;
            box-shadow: 0 0 3px rgba(0,0,0,0.4);
            transition: all .3s ease;
            &:hover {
              cursor: pointer;
              box-shadow: 0 0 8px rgba(75, 177, 169, 1);
            }
          }
        }
      }
      & .wall {
        margin-top: 20px;
        &__title {
          color: #ffffff;
          font-size: 23px;
          padding: 3px;
          background-color: $primary;
        }
        &__item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          &__textArea {
            padding: 5px;
            resize: none;
            height: 120px;
            width: 100%;
          }
          &__btn{
            align-self: flex-end;
          }
        }
      }
    }
  }
}

</style>