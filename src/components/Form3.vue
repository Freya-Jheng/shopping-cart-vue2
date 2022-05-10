<template>
  <form class="payment">
    <div class="wrapper payment-content">
        <h2 class="inform-title">付款資訊</h2>
        <div class="payment-form">
          <div class="form-container">
            <div class="form-row row-1">
              <span class="form-name">持卡人姓名</span>
              <input type="text" class="form-space" placeholder="John Doe" v-model="newCreditData.creditName">
            </div>
            <div class="form-row row-2">
              <span class="form-name">卡號</span>
              <input type="text" class="form-space" placeholder="1111 2222 3333 4444" v-model="newCreditData.creditNumber">
            </div>
            <div class="form-row row-3">
              <span class="form-name">有效期限</span>
              <input type="text" class="form-space form-space3" placeholder="MM/YY" onfocus="(this.type='month')" onblur="(this.type='text')" v-model="newCreditData.validPeriod">
            </div>
            <div class="form-row row-4">
              <span class="form-name">cvc / ccv</span>
              <input type="text" class="form-space form-space3" placeholder="123" v-model="newCreditData.cvc">
            </div>
          </div>
        </div>
      </div>
  </form>
</template>

<script>
export default {
  name: 'payment',
  props: {
    initialUserInform: {
      type: Object,
      default: () => ({
        creditName: '',
        creditNumber: '',
        validPeriod: '',
        cvc: '',        
      })
    }
  },
  data () {
    return {
      newCreditData: {
        creditName: this.initialUserInform.creditName,
        creditNumber: this.initialUserInform.creditNumber,
        validPeriod: this.initialUserInform.validPeriod,
        cvc: this.initialUserInform.cvc,
      },
    }
  },
  watch: {
    newCreditData: {
      handler: function renderCredit() {
        this.$emit('render-credit', this.newCreditData)
      }
    },
    deep: true,
  }
}
</script>

<style scoped lang="scss">
@import '../styles/main.scss';
form {  
  width: 100%;
  .wrapper {
    width: 100%;
    .inform-title {
      color: var(--main-font-color);
    }
    .payment-form {
      width: 100%;
      margin-top: 20px;
      .form-container {
        width: 100%;
        color: var(--main-font-color);
        @include grid (50% 50%, repeat(3, 1fr), 20px);
        .form-row {
          @include flex (column, center, flex-start);
          gap: 5px;
        }
        .form-space{
          background-color: var(--main-bg-color);
          height: 40px;
          border-radius: 4px;
          border: 1px solid var(--form-border);
          &::placeholder {
            color: #{$form-placeholder};
          }
        }
        .row-1, .row-2 {
          grid-column: 1/3;
          .form-space {
            width: 63%;
          }
        }
        .row-3, .row-4 {
          .form-space {
            width: 95%;
          }
        }
      }
    }
  }
}
</style>
