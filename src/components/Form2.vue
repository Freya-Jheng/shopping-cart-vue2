<template>
  <form class="shipping">
    <div class="wrapper shipping-content">
        <h2 class="inform-title">運送方式</h2>
        <div class="methods">
          <div class="method">
            <input v-model="delivery" type="radio" id="general" class="way" name="general"  value="general">
            <label for="general" class="way-label">
              <div class="top-content">
                <span class="title">標準運送</span>
                <span class="fee">免費</span>
              </div>  
              <span class="period">約3~7個工作天</span>
            </label>
          </div>
          <div class="method">
            <input v-model="delivery" type="radio" id="DHL" class="way" value="DHL">
            <label for="DHL" class="way-label">
              <div class="top-content">
                <span class="DHL-title">DHL 貨運</span>
                <span class="fee"><span>$</span>500</span>
              </div>
              <span class="period">48小時內送達</span>
            </label>
          </div>
        </div>
      </div>
  </form>
</template>

<script>
export default {
  name: 'shipping',
  props: {
    initialUserInform: {
      type: Object,
      default: () => ({
        delivery: 'general',
      })
    }
  },
  data () {
    return {
      delivery: this.initialUserInform.delivery,
    }
  },
  watch: {
    delivery: {
      handler: function changeDelivery() {
        this.$emit('change-delivery', this.delivery)
      },
      deep: true,
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/main.scss';
form {
  width: 100%;
  .wrapper {
    .inform-title {
      color: var(--main-font-color);
    }
    .methods {
      margin-top: 30px;
      width: 100%;
      @include flex (column, center, flex-start);
      gap: 15px;
      .method {
        width: 100%;
        @include flex (row, flex-start, center);
        gap: 10px;
        padding: 10px;
        border: 1px solid var(--main-bg-color);
        &:hover {
          border: 1px solid var(--main-font-color) ;
          border-radius: 4px;
        }
        input {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          cursor: pointer;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid var(--main-font-color);
          &:focus, &:checked {
            border: 6px solid var(--main-font-color);
          }
        }
        label {
          cursor: pointer;
          font-size: 12px;
          font-weight: 400;
          width: 100%;
          @include flex (column, center, flex-start);
          gap: 3px;
          color: var(--main-font-color);
          .top-content {
            width: 95%;
            @include flex (row, space-between, center);
          }
          .title {
            font-size: 14px;
          }
          .DHL-title {
            font-size: 14px;
            font-weight: 700;
          }

        }
      }
    }

  }
}
</style>

