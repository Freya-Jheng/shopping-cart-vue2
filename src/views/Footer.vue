<template>
  <footer>
    <div class="footer-container">
      <a href="#" class="footer-logo">
        <img src="../assets/images/logo@2x.png" alt="Logo" class="logo-image">
        <h1 class="logo-title">ALPHA Shop</h1>
      </a>
      <div class="footer-item">
        <div class="item-title">客戶服務</div>
        <div class="item-about">
          <a href="#" class="about">運送說明</a>
          <a href="#" class="about">退換貨相關</a>
          <a href="#" class="about">付款資訊</a>
          <a href="#" class="about">FAQ</a>
        </div>
      </div>
      <div class="footer-item">
        <div class="item-title">關於我們</div>
        <div class="item-about">
          <a href="#" class="about">品牌故事</a>
          <a href="#" class="about">媒體聯繫</a>
          <a href="#" class="about">Press kit</a>
        </div>
      </div>
      <div class="footer-item">
        <div class="item-title">資訊</div>
        <div class="item-about">
          <a href="#" class="about">隱私權政策</a>
          <a href="#" class="about">Cookie</a>
          <a href="#" class="about">GDPR</a>
        </div>
      </div>
      <div class="footer-item">
        <div class="item-title">追蹤ALPHA Shop</div>
        <div class="item-about">
          <a href="#" class="about">+886 02123-45678</a>
          <div class="social-media-icons">
            <a href="#" class="icon"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="icon"><i class="fab fa-instagram"></i></a>
            <a href="#" class="icon"><i class="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import '../styles/main.scss';
footer{
  display: none;
  @include pc-media {
    display: block;
  }
  width: 100%;
  margin: 0 auto;
  padding-top: 70px;
  height: 284px;
  background-color: var(--footer-bc-color);
  .footer-container {
    margin: 0 auto;
    width: 85%;
    height: 100%;
    @include flex (
      row, space-between, flex-start
    );
    .footer-logo {
      margin-top: 65px;
      width: 175.49px;
      @include flex (row, space-between, center);
      .logo-image {
        width: 31px;
        height: 31px;
      }
      .logo-title {
        width: 134.33px;
        height: 19px;
        font-size: 20px;
        line-height: 19px;
        font-weight: border;
        font-family: 'Noto Sans TC', sans-serif;
        font-weight: 700;
        color: var(--main-font-color);
      }
    }
    .footer-item {
      @include flex (
        column, center, flex-start
      );
      font-family: 'Noto Sans TC', sans-serif;
      .item-title {
        cursor: default;
        margin-bottom: 24px;
        font-weight: 700;
        font-size: 24px;
        line-height: 24px;
        color: var(--main-font-color);
      }
      .item-about {
        @include flex (
          column, center, flex-start
        );
        gap: 5px;
        .about {
          font-weight: 400;
          font-size: 16px;
          line-height: 17px;
          color: $form-font-color;
          margin-bottom: 5px;
          &:hover {
            color: var(--label-focus);
          }
        }
        .social-media-icons {
          width: 95px;
          margin-top: 5px;
          @include flex (
            row, space-between, center
          );
          .icon {
            font-size: 20px;
            color: var(--footer-about-font-color);
            &:hover {
              color: var(--label-focus);
            }
          }
        }
      }
    }
  }
}  
</style>