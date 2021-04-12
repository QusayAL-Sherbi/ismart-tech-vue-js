<template>
<nav class="navbar navbar-expand-lg fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#">
      <!-- <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"> -->
      <h4>iSmart Tech</h4>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      <span class="navbar-toggler-icon"></span>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Smart Phones
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Laptops
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Desktops
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            HeadPhones
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Airpods
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Smart Watches
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Accessories
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <!-- <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: "HeaderNavbar",
}
</script>

<style lang="scss">
.navbar {
  background-color: #000;
  .navbar-nav {
    width: 93%;
    justify-content: space-around;
  }
  .navbar-toggler {
    .navbar-toggler-icon {
      background-color: #fff;
      display: block;
      height: 3px;
      border-radius: 5px;
      &:nth-last-of-type(2) {
        margin: 5px 0;
      }
    }
  }
  .navbar-brand {
    h4 {
      color: $blueColor;
      font-weight: bold;
      margin-bottom: 0;
    }
  }
  .navbar-collapse {
    justify-content: space-around;
    .navbar-nav {
      .nav-item {
        font-size: 1.0652em;
        .nav-link {
          opacity: 0.6;
          color: #fff;
          transition: all 0.3s;
          font-weight: bold;
          will-change: opacity;
          &.active,
          &:hover {
            opacity: 1;
            color: $blueColor;
          }
        }
        .cart-icon {
          font-size: 1.3em;
        }
        .search-icon {
          font-size: 1.1em;
          cursor: pointer;
        }
        .dropdown-toggle {
          &::after {
            display: none;
          }
        }
        .cart-dropdown-menu {
          width: 375px;
          &::before {
            display: inline-block;
            margin-left: 0.255em;
            content: "";
            border-top: 0.4em solid transparent;
            border-right: 0.4em solid transparent;
            border-bottom: 0.4em solid #fff;
            border-left: 0.3em solid transparent;
            position: absolute;
            top: -13px;
            right: 11px;
          }
        }
      }
      .dropdown-menu {
        &::before {
          display: inline-block;
          margin-left: 0.255em;
          content: "";
          border-top: 0.4em solid transparent;
          border-right: 0.4em solid transparent;
          border-bottom: 0.4em solid #fff;
          border-left: 0.3em solid transparent;
          position: absolute;
          top: 32px;
          left: 19px;
        }
        .cart-heading {
          color: $blueColor;
        }
        span {
          display: block;
          // margin-bottom: 10px;
        }
        .dropdown-item {
          &:focus, &:hover {
            background-color: $blueColor;
            color: #FFF;
          }
        }
      }

      // Search Window Rules
      .search-window {
        @include overlay;
        background-color: rgba(#000, 0.6);
        color: #fff;
        z-index: 9999;
        display: none;
        .search-window-container {
          width: 40%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          @media (max-width: 767px) {
            width: 90%;
          }
          .search-field {
            width: 100%;
            padding: 5px 10px;
            border: none;
            transition: 0.5s;
            &:focus {
              outline: none;
              box-shadow: 0 0 4px 1px #03a9f4;
            }
          }
          .search-button,
          .close-button {
            float: left;
            width: 49%;
            margin-top: 0.8em;
            @media (max-width: 767px) {
              width: 100%;
              float: none;
              display: block;
              margin-top: 3%;
            }
          }
          @media (min-width: 768px) {
            .search-button {
              margin-right: 1%;
            }
            .close-button {
              margin-left: 1%;
            }
          }
        }
      }
    }
  }
}
</style>