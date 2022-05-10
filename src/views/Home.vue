<template>
  <div class="main">
    <Navbar />
    <Steppers :current-form-number="currentFormNumber"/>
    <div class="home-wrapper">
      <div class="forms">
        <form 
        id="form-id" class="form-id">
          <router-view :initial-userInform="userInform"
          @change-delivery="changeDeliveryContent"
          @render-new-data="renderNewDataContent"
          @render-credit="renderCreditContent" />
        </form>
        <div class="buttons">
          <button v-if="currentFormNumber !== 1" @click.stop.prevent="goPrePage" class="btn back-to" type="button" >&larr;<span>上一步</span></button>
          <button @click.stop.prevent="goNextPage" class="btn next-to" type="button"><span>下一步</span>&rarr;</button>
        </div>
      </div>
      <ShoppingCarts :initial-delivery="userInform.delivery"/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../views/Navbar.vue'
import Steppers from '../views/Steppers.vue'
import ShoppingCarts from '../views/Shopping-carts.vue'
import Footer from '../views/Footer.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    Steppers,
    ShoppingCarts,
    Footer,
  },
  data () {
    return {
      currentFormNumber: Number(this.$route.name),
      userInform: {
        gender: '',
        name: '',
        phoneNumber: '',
        email: '',
        city: '',
        address: '',
        delivery: 'general',
        creditName: '',
        creditNumber: '',
        validPeriod: '',
        cvc: '',
      }
    }
  },
  methods: {
    renderNewDataContent(e) {
      this.userInform.gender = e.gender
      this.userInform.name = e.name
      this.userInform.phoneNumber = e.phoneNumber
      this.userInform.email = e.email
      this.userInform.city = e.city
      this.userInform.address = e.address
    },
    renderCreditContent(e) {
      this.userInform.creditName = e.creditName
      this.userInform.creditNumber = e.creditNumber
      this.userInform.validPeriod = e.validPeriod
      this.userInform.cvc = e.cvc
    },
    changeDeliveryContent(e) {
      if (e === 'general') {
        this.userInform.delivery = 'general'
      } else if (e === 'DHL') {
        this.userInform.delivery = 'DHL'
      }
    },
    goNextPage () {
      if (this.currentFormNumber === 1) {
        this.$router.push({name: "2"})
      }
      if (this.currentFormNumber === 2) {
        this.$router.push({name: '3'})
      }
      this.currentFormNumber ++

      if (this.currentFormNumber >= 3) {
        this.currentFormNumber = 3
      }
    },
    goPrePage () {
      if (this.currentFormNumber === 3) {
        this.$router.push({name: '2'})
      }
      if (this.currentFormNumber === 2) {
        this.$router.push({name: '1'})
      }
      this.currentFormNumber --

      if (this.currentFormNumber <= 1) {
        this.currentFormNumber = 1
      }
    },
    btnChangeStyle () {
      const next = document.querySelector('.next-to')
      if (this.currentFormNumber === 3) {
        next.innerText = '確認下單'
      }
      if (this.currentFormNumber !== 3) {
        next.innerText = '下一步'
      }
    },
  },
  updated() {
    this.btnChangeStyle()
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/main.scss';
.home-wrapper {
  margin: 0 auto;
  padding: 0 20px 20px;
  width: 100%;
  gap: 50px;
  @include pc-media {
    display: grid;
    grid-template-columns: 55% 45%;
    padding: 0 85px;
  }
}
.forms {
  // outline: 2px solid red;
  margin: 0 auto;
  @include pc-media {
    width: 90%;
    margin-top: 50px;
    .form-id {
      width: 100%;
    }
  }
}
.buttons {
  gap: 30px;
  width: 90%;
  @include pc-media {
    position: absolute;
    top: 600px;
    left: 8%;
    width: 45%;
  }
  @include flex (
    row, space-between, center
  );
  margin: 55px auto;
  .btn {
    height: 46px;
    border-radius: 8px;
    width: 48%;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 20px;
  }
  .next-to {
    flex-grow: 1;
    background-color: $pink;
    color: $white;
    span {
      margin-right: 10px;
    }
  }
  .back-to {
    flex-grow: 1;
    color: var(--main-font-color);
    span {
      margin-left: 10px;
    }
    &:hover {
      border: 1px solid var(--main-font-color);
    }
  }
}

</style>