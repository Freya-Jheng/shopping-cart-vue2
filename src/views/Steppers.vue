<template>
  <div class="main steppers">
    <div
    class="main-title">
      <h1 class="title-checkout">結帳</h1>
    </div>
    <div class="stepper-panel">
      <div class="step-container">
        <div :class="['step',{'active':currentFormNumber === 1, 'checked':currentFormNumber > 1}]">
          <div class=" circle-container"></div>
          <div class="connect-line"></div>
          <div class="label-container">
            寄送地址
          </div>
        </div>
        <div
        :class="['step', {
          'active' : currentFormNumber === 2, 'checked' : currentFormNumber > 2}]" >
          <div class="circle-container"></div>
          <div class="connect-line"></div>
          <div class="label-container">
            運送方式
          </div>
        </div>
        <div
        :class="['step', {
          'active': currentFormNumber === 3,
          'checked': currentFormNumber > 3
        }]"
        >
          <div class="circle-container"></div>
          <div class="label-container">
            付款資訊
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Steppers',
  props: {
    currentFormNumber: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/main.scss';
.main {
  margin: 100px auto 0;
  width: 85%;
  .main-title {
    .title-checkout {
      cursor: default;
      color: var(--main-font-color);
    }
  }
  .stepper-panel {
    height: 32px;
    margin: 24px 10px;
    @include pad-media {
      max-width: 320px;
    }
    @include pc-media {
      max-width: 536px;
      margin-bottom: 0px;
    }
    .step-container {
      width: 95%;
      @include flex (
          row, space-between,center);
      .step {
        @include getStepperNum(3);
        position: relative;
        text-align: center;
        .circle-container {
          width: 32px;
          height: 32px;
          background-color: var(--stepNum-bc-color) ;
          border: 1px solid var(--step-original-color);
          color: var(--step-original-color);
          border-radius: 50%;
          font-size: 16px;
          font-weight: 700;
          line-height: 32px;
        }
        &.active {
          .circle-container::after{
            color: #{$white};
          }
          .circle-container {
            background-color: var(--stepCheck-bc-color) ;
            border-color: var(--stepCheck-bc-color) ;
          }
          .label-container {
            color: var(--main-font-color);
          }
          .connect-line {
            background-color: var(--main-font-color);
          }
        }
        &.checked
        {
          .circle-container::after{
          content: "\2714";
          color: #{$white};
          }
          .circle-container {
            background-color: var(--stepCheck-bc-color);
            border-color: var(--stepCheck-bc-color) ;
          }
          .label-container {
            color: var(--main-font-color);
          }
          .connect-line {
            background-color: var(--main-font-color);
          }
          
        } 
        .label-container {
          display: none;
          cursor: default;
          @include pad-media {
            display: block;
            width: 64px;
            position: absolute;
            top: 50%;
            transform: translate(0, -50%);
            right: -220%;
            font-size: 16px;
            text-align: center;
            font-weight: 400;
            color: var(--step-original-color);
          }
        }
        .connect-line {
          position: absolute;
          top: 15.5px;
          display: block;
          width: 60px;
          height: 1px;
          left: calc(100% + 32.25px);
          margin: 0 auto;
          background-color: var(--step-original-color);
          @include pad-media {
            left: calc(325%);
          }
          @include pc-media {
            left: calc(450%);
          }
        }
      }
    }
    
  }
}
</style>