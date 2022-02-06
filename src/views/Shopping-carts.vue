<template>
  <div class="main">
    <div class="shopping-cart">
        <h1 class="cart-title">購物籃</h1>
        <div class="carts-container">
          <div v-for="product in products" :key="product.id" class="cart">
            <img class="product-image" :src="product.image" alt="">
            <div class="product-description">
              <div class="product-unit">
                <span class="product-name">{{product.title}}</span>
                <div class="units-count">
                  <button type="button" class="minus unit-controller" @click.stop.prevent ="minusUnit(product.id)">-</button>
                  <div class="unit" >{{product.unit}}</div>
                  <button type="button" class="add unit-controller" @click.stop.prevent="addUnit(product.id)">+</button>
                </div>
              </div>
              <div class="product-price">$<span class="price-number sub-price">{{product.price | addComma(product.price)}}</span></div>
            </div>
          </div>
        </div>
        <div class="total">
          <div class="total-shipping-fee">
            <span class="item">
              運費
            </span>
            <span class="price">
              $<span class="total-shipping-price sub-price">{{total.fee}}</span>
            </span>
          </div>
          <div class="total-shipping-fee">
            <span class="item">
              小計
            </span>
            <span class="price">
              $<span class="total-price">{{sum | addComma(total.price)}}</span>
            </span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import paint1 from '../assets/images/paint1@2x.jpg'
import paint2 from '../assets/images/paint2@2x.png'
import uuid from 'uuid/v4'

export default {
  props: {
    initialDelivery: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      products: [
        {
          id: uuid(),
          name: '破壞補丁牛仔褲',
          image: paint1,
          unit: 1,
          price: 3999,
          Number: 3999,
        },
        {
          id: uuid(),
          name: '刷色直筒牛仔褲',
          image: paint2,
          unit: 1,
          price: 1299,
          Number: 1299,
        }
      ],
      total: {
        fee: '免費',
        Number: 0,
        price: 5298,
      },
      delivery: '',
    }
  },
  computed: {
    sum () {
      return this.total.price + this.total.Number
    }
  },
  methods: {
    addUnit (id) {
      this.products.forEach(product => {
        if (product.id === id) {
          product.unit ++
          product.price += product.Number
          this.total.price += product.Number
        }
      }) 
    },
    minusUnit (id) {
      this.products.forEach(product => {
        if (product.id === id && product.unit > 0) {
          product.unit --
          product.price -= product.Number
          this.total.price -= product.Number
        }
      })
    },
    fetchDelivery () {
      this.delivery = this.initialDelivery
      if (this.delivery === 'general') {
        this.total.fee = '免費'
        this.total.Number = 0
      } else if (this.delivery === 'DHL') {
        this.total.fee = '500'
        this.total.Number = 500
      }
    },
    // 嘗試的寫法
    // addTotal () {
    //   this.subTotal = Object.values(this.products).map(product => {
    //     product.unit * product.Number
    //   })
    //   const total = this.subTotal.reduce((pre, current) => {pre + current})

    //   this.total.price = total
    // }
  },
  created() {
    this.fetchDelivery()
  },
  watch: {
    initialDelivery: {
      handler: function () {
        this.fetchDelivery()
      }
    },
    // 嘗試的寫法
    // subTotal: {
    //   handler: function () {
    //     this.addTotal()
    //   }
    // }
  },
  filters: {
    addComma (price) {
      return (
        price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      )
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/main.scss';
.main {
  width: 90%;
  margin: 0 auto;
}

.shopping-cart {
    background-color: $white;
    @include pc-media {
      width: 85%;
      height: 500px;
      padding: 24px;
      margin-bottom: 90px;
    };
    width: 100%;
    border: 1px solid $deep-white;
    padding: 3px;
    .cart-title {
      display: none;
      @include pc-media {
        display: block;
        font-size: 18px;
        font-weight: 700;
        font-family:'Noto Sans TC', sans-serif;
        line-height: 22px;
        color: $black;
        margin-bottom: 30px;
      }
    }
    .cart {
      margin-bottom: 10px;
      @include flex (
        row, space-between, center
      );
      @include pc-media {
        @include flex (
          row, space-between, flex-start
        );
        margin-bottom: 20px;
      }
      .product-unit {
        @include pc-media {
          display: flex;
          @include flex (column, center, flex-start);
        };
      }
      .product-image {
        width: 100px;
        height: 100px;
        border-radius: 4px;
      }
      .product-description {
        cursor: default;
        @include flex (column, center, flex-end);
        @include pc-media {
          @include flex (row, space-between, flex-start);
          width: 75%;
          margin-left: 20px;
        }
        font-size: 16px;
        font-family: 'Noto Sans TC';
        line-height: 24px;
        font-weight: 400;
        color: $black;
        .units-count {
          @include flex (
            row, flex-end , center
          );
          .add, .minus {
            width: 26px;
            height: 26px;
            color: $black;
            background-color: $deep-white;
            border-radius: 50%;
            line-height: 26px;
            font-size: 25px;
            margin-top: 8px;
            cursor: pointer;
          }
          .unit {
            text-align: center;
            width: 55px;
            height: 27px;
          }
        }
        
      }
    }
    .total {
      width: 100%;
      @include flex (
        column, center, center
      );
      cursor: default;
      @include pc-media {
        margin-top: 45px;
      }
      .total-shipping-fee {
        width: 100%;
        height: 55px;
        @include pc-media {
          height: 70px;
        }
        @include flex (
          row, space-between, center
        );
        border-top: 1px solid $deep-white;
        font-size: 14px;
        font-weight: 400;
        color: $black;
        line-height: 20px;
      }
    }
  }

</style>