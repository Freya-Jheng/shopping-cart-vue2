<template>
  <form class="address">
    <div class="wrapper address-content ">
        <h1 class="inform-title">寄送地址</h1>
        <div class="address-form">
          <div class="form-container">
              <div class="form-row row-1 ">
                <span class="form-name">稱謂</span>
                <select  name="salutation" id="form-space" class="form-space1" v-model="newData.gender">
                  <option selected class="option-1" value="先生" >先生</option>
                  <option value="小姐">小姐</option>
                </select>
              </div>
              <div class="form-row row-2">
                <span class="form-name">姓名</span>
                <input class="form-space2" type="text" placeholder="請輸入姓名" v-model="newData.name" >
              </div>
              <div class="form-row row-3">
                <span class="form-name">電話</span>
                <input class="form-space" type="text" placeholder="請輸入行動電話" v-model="newData.phoneNumber" >
              </div>
              <div class="form-row row-4">
                <span class="form-name">Email</span>
                <input class="form-space" type="text" placeholder="請輸入電子郵件" v-model="newData.email" >
              </div>
              <div class="form-row row-5">
                <span class="form-name">縣市</span>
                <select name="living-place" id="form-space" class="form-space" required v-model="newData.city">
                  <option  selected value="請選擇縣市"><span>請選擇縣市</span></option>
                  <option  value="台北市">台北市</option>
                  <option  value="台中市">台中市</option>
                  <option  value="台南市">台南市</option>
                  <option  value="高雄市">高雄市</option>
                  <option  value="屏東縣">屏東縣</option>
                </select>
              </div>
              <div class="form-row row-6">
                <span class="form-name">地址</span>
                <input class="form-space" type="text" placeholder="請輸入地址" v-model="newData.address">
              </div>
          </div>
        </div>
      </div>
  </form>
</template>

<script>
export default {
  name: 'Address',
  props: {
    initialUserInform: {
      type: Object,
      default: () => ({
          gender: '先生',
          name: '',
          phoneNumber: '',
          email: '',
          city: '請選擇縣市',
          address: '',
      })
    }
  },
  data () {
    return {
      newData: {
        gender: this.initialUserInform.gender,
        name: this.initialUserInform.name,
        phoneNumber: this.initialUserInform.phoneNumber,
        email: this.initialUserInform.email,
        city: this.initialUserInform.city,
        address: this.initialUserInform.address,
      },
    }
  },
  watch: {
    newData: {
      handler: function renderNewData() {
        this.$emit('render-new-data', this.newData)
      },
      deep: true,
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/main.scss';
.address {
  color: var(--main-font-color);
  font-size: 12px;
  font-weight: 700;
  width: 100%;
  @include pad-media {
    height: 450px;
  }
  .inform-title {
    margin-bottom: 20px;
    color: var(--main-font-color);
  }
  .form-container {
    width: 100%;
    @include grid (45% 55%, repeat(5, 1fr), 10px);
    @include pc-media {
      @include grid (repeat(4, 25%), repeat(3, 1fr), 0px);
    }
    input[type="text"], textarea {
      background-color : var(--main-bg-color); 
    }
    
    select {
      color: var(--main-font-color);
      background-color: var(--main-bg-color);
    }
    .form-row {
      @include pc-media {
        margin-bottom: 30px;
      }
      width: 100%;
      margin-bottom: 10px;
      @include flex (column, center, flex-start);
      .form-space, .form-space1, .form-space2 {
        height: 40px;
        border: 1px solid var(--form-border);
        border-radius: 4px;
        width: 100%;
        background-color: var(--main-bg-color);
        &::placeholder {
          color: #{$gray-99999};
        }
      }
    }
    .row-3, .row-4, .row-5, .row-6 {
      grid-column: 1/3;
    }
    @include pc-media {
      .row-1, .row-5 {
        grid-column: 1/2;
      }
      .row-2, .row-6 {
        grid-column: 2/5;
        .form-space, .form-space2 {
          width: 90%;
          margin-left: 10%;
        }
      }
      .row-3 {
        grid-column: 1/3;
        .form-space {
          width: 85%;
        }
      }
      .row-4 {
        grid-column: 3/6;
      }
    }
  }
}

</style>



