<template>
  <header class="wrapper">
    <!-- logo -->
    <a href="/" class="logo">
      <img src="../assets/images/logo@2x.png" alt="Logo" class="logo-image">
      <h1 class="logo-title">Alpha Camp</h1>
    </a>
    <!-- navbar -->
    <div class="header-menu">
      <input type="checkbox" name="navbar-toggle" id="navbar-toggle" class='navbar-toggle'>
      <label for="navbar-toggle" class="navbar-toggle-label">
          <i class="fas fa-bars hamburger"></i>
      </label>
      <nav class="navbar">
        <ul class="nav-list">
          <li v-for="item in navItems" :key="item.id" class="nav-item"><router-link :to="item.link" class="nav-link Men">{{item.title}}</router-link></li>
        </ul>
      </nav>
      <div class="navbar-icons">
        <input type="checkbox" id="search-bar-input" class="search-bar-input">
        <input type="text" placeholder=" ex : 短裙" class="search-bar">
        <label for="search-bar-input" class="nav-icon search-icon">
          <i class="fas fa-search"></i>
        </label>
        <a href="#" class="nav-icon cart-icon">
          <i class="fas fa-shopping-cart"></i>
        </a>
        <label for="dark-mode-toggle" class="dark-mode-label">
          <div class="moon nav-icon">
             <i class="far fa-moon"></i>
          </div>
          <!-- <div class="sun nav-icon d-none"> -->
            <!-- <i class="fas fa-sun"></i> -->
          <!-- </div>     -->
        </label>
        <!-- <input type="checkbox" name="dark-mode-toggle" id="dark-mode-toggle" class="d-none"> -->
      </div>
    </div>
  </header>
</template>

<script>
import uuid from 'uuid/v4'

export default {
  data () {
    return {
      navItems: [
        {
          id: uuid(),
          title:'男裝',
          link:'#',
        },
        {
          id: uuid(),
          title:'女裝',
          link:'#',
        },
        {
          id: uuid(),
          title:'最新消息',
          link:'#',
        },
        {
          id: uuid(),
          title:'客製商品',
          link:'#',
        },
        { 
          id: uuid(),
          title:'聯繫我們',
          link:'#',
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/main.scss';
header {
  position: fixed;
  top:0;
  z-index: 10;
  width: 100%;
  height: 56px;
  border-bottom: 1px solid var(--light-gray);
  background-color: $white;
  @include pad-media {
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
  };
  @include pc-media {
    width: 85%;
    left: 50%;
    transform: translateX(-50%);
  }

 .logo {
   position: absolute;
   z-index: 10;
   top: 0;
   line-height: 56px;
   right: 50%;
   transform: translateX(50%);
   @include flex (row, space-between, center);
  
    .logo-image {
      display: inline-block;
      width: 24px;
      height: 24px;
      margin-right: 7.87px;
    }

    .logo-title {
      display: inline-block;
      border-radius: 0px;
      color: $black;
      letter-spacing: 0.75px;
      font-weight: 900;
      font-size: 18px;
      font-family:$brand-font-family ;
    }
 }

 .header-menu {
   position: relative;
   z-index: 10;
   height: 100%;
   width: 100%;
   margin: 0 auto;
   @include flex (column, center, center);
   @include pad-media {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
   @include pc-media {
     display: flex;
     flex-direction: row;
     justify-content:space-between;
    }
 }

 #navbar-toggle {
   display: none;
 }

 .hamburger {
    position: absolute;
    top: 14px;
    left: 21px;
    cursor: pointer;
    line-height: 15px;
    font-size: 20px;
    color: $black;
    &:hover {
      color: $orange;
    }
    
    @include pc-media {
      display: none;
    }
 }

 .navbar-icons {
    position: absolute;
    z-index: 20;
    top: 800%;
    @include flex (row, space-between, center);
    min-width: 200px;
    opacity: 0;
    transform: scale(1, 0);
    transform-origin: top;
    @include pad-media {
      all: unset;
      @include flex (row, space-between, center);
      margin-right: 2%;
      width: 15%;
      gap: 35px;
    }
    .nav-icon {
      color: $black;
      &:hover, &:focus {
       color: $orange;
      }
    }
    .far, .fas {
     font-size: 20px;
    }
    .fas .fa-sun {
      display: none;
    }
  }
}

nav {
  background-color: $white;
  position: absolute;
  width: 100%;
  height: 850%;
  top: 100%;
  z-index: 10;
  opacity: 0;
  transform: scale(1, 0);
  transform-origin: top;
  @include pad-media {
    height: 650%;
  }
  @include pc-media {
      all: unset;
      width: 40%;
      height: unset;
  }
  .nav-list {    
    @include pc-media {
      @include flex (
        row, flex-start, center
      );
    }
  }
  .nav-item {
    text-align: center;
    padding: 20px;
    position: relative;
    @include pc-media {
      padding: 2%;;
    }
    color: $black;

    &::after {
      content: " ";
      position: absolute;
      bottom: 0;
      left: 14.5px;
      right: 14.5px;
      height: 2px;
      background-color: $light-gray;
      @include pc-media {
        all: unset;
      }
    }
  }
}

.nav-link {
  &:hover, &:focus {
    color: $orange;
  }
}

.navbar-toggle-label {
  @include pc-media {
    display: none;
  }
}

#navbar-toggle:checked {
  ~ label {
    ~ nav {
      opacity: 1;
      transform: scale(1, 1);
      transition: all 0.3s ease-in-out;
      ~ .navbar-icons {
        opacity: 1;
        transform: scale(1, 1);
        transition: all 0.3s ease-in-out;
        @include pc-media {
        all: unset;
      }
      }
      @include pc-media {
        all: unset;
      }
    }
  }
}
.search-bar-input {
  display: none;
  &:checked {
    ~ .search-bar {
      opacity: 1;
      transform: scale(1, 1);
    }
  }
}
.search-bar {
  position: absolute;
  top: 180%;
  @include pad-media {
    top: 100%;
    right: 0%;
  }
  @include pc-media {
    top: 25%;
    right: 18%;
  }
  width: 200px;
  height: 30px;
  border: 1px solid $form-border;
  border-radius: 4px;
  &::placeholder {
    color: $form-placeholder;
  }
  opacity: 0;
  transform: scale(1, 0);
  @include pc-media {
    transform: scale(0 ,1);
    transform-origin: right;
  }
  transform-origin: top;
  transition: transform 0.2s;
}
</style>