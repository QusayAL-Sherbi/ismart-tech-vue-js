<template lang="pug">
.row
  .col-md-3.col-sm-6
    .card.product.mb-3
      .card-header {{ category }}
        i.far.fa-heart.love-icon
      .img-container
        img.img-fluid(:src="image" alt="")
      .card-body
        h5.card-title {{ name }}
        p.card-text {{ description }}
      .card-footer
        .row
          .col-md-6.col-sm-12
            button.btn.btn-success.btn-block.w-100 Buy Now
          .col-md-6.col-sm-12
            button.btn.btn-link.btn-block.w-100(type='button') Add To Cart
  .col-md-3.col-sm-6
    .card.product.mb-3
      .card-header {{ category }}
        i.far.fa-heart.love-icon
      .img-container
        img.img-fluid(:src="image" alt="")
      .card-body
        h5.card-title {{ name }}
        p.card-text {{ description }}
      .card-footer
        .row
          .col-md-6.col-sm-12
            button.btn.btn-success.btn-block.w-100 Buy Now
          .col-md-6.col-sm-12
            button.btn.btn-link.btn-block.w-100(type='button') Add To Cart
  .col-md-3.col-sm-6
    .card.product.mb-3
      .card-header {{ category }}
        i.far.fa-heart.love-icon
      .img-container
        img.img-fluid(:src="image" alt="")
      .card-body
        h5.card-title {{ name }}
        p.card-text {{ description }}
      .card-footer
        .row
          .col-md-6.col-sm-12
            button.btn.btn-success.btn-block.w-100 Buy Now
          .col-md-6.col-sm-12
            button.btn.btn-link.btn-block.w-100(type='button') Add To Cart
  .col-md-3.col-sm-6
    .card.product.mb-3
      .card-header {{ category }}
        i.far.fa-heart.love-icon
      .img-container
        img.img-fluid(:src="image" alt="")
      .card-body
        h5.card-title {{ name }}
        p.card-text {{ description }}
      .card-footer
        .row
          .col-md-6.col-sm-12
            button.btn.btn-success.btn-block.w-100 Buy Now
          .col-md-6.col-sm-12
            button.btn.btn-link.btn-block.w-100(type='button') Add To Cart
</template>

<script>
export default {
  props: ["category", "name", "image", "description"],
  name: "Products",
};
</script>

<style lang="scss">
.products {
  .product {
    background-color: #bcbcbc;
    border-color: transparent;
    margin: 0 auto 1em auto;
    max-width: 19rem;
    height: 500px;
    cursor: pointer;
    transition: box-shadow 0.5s;
    &.loved {
      box-shadow: 0 0 3px 1px $redColor;
    }
    @media (max-width: 767px) {
      max-width: 95%;
    }
    .img-container {
      width: 100%;
      height: 250px;
      margin: 1rem auto 0 auto;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        user-select: none;
      }
    }
    .card-title {
      text-align: center;
    }
    .card-footer {
      button {
        @media (max-width: 767px) {
          margin-top: 5px;
        }
      }
      .btn-link {
        font-weight: bold;
        text-decoration: none;
        font-size: 1.025em;
      }
    }
    .card-header {
      position: relative;
      .love-icon {
        position: absolute;
        top: 50%;
        right: 3%;
        transform: translate(-3%, -50%);
        font-size: 1.6rem;
      }
    }
  }
}
</style>
