<template lang="pug">
#productImage.carousel.slide(data-bs-ride='carousel')
  .carousel-inner
    .carousel-item.active
      img.d-block.fixed-img(src='../../assets/iPhone/iPhone-11-Pro-Space-Gray.png' alt='iPhone 11 Pro Space Gray')
      .carousel-caption.d-none.d-md-block
        h5 iPhone 11 Pro
        p Space Gray - 512GB

    .carousel-item
      img.d-block.fixed-img(src='../../assets/iPhone/iPhone-11-Pro-Silver.png' alt='iPhone 11 Pro Silver')
      .carousel-caption.d-none.d-md-block
        h5 iPhone 11 Pro
        p Silver - 256GB

    .carousel-item
      img.d-block.fixed-img(src='../../assets/iPhone/iPhone-11-Pro-Gold.png' alt='iPhone 11 Pro Gold')
      .carousel-caption.d-none.d-md-block
        h5 iPhone 11 Pro
        p Gold - 128GB

    .carousel-item
      img.d-block.fixed-img(src='../../assets/iPhone/iPhone-11-Pro-MedNight-Green.png' alt='iPhone 11 MedNight Green')
      .carousel-caption.d-none.d-md-block
        h5 iPhone 11 Pro
        p MedNight Green - 64GB

  .carousel-indicators
    button.active(type='button' data-bs-target='#productImage' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
    button(type='button' data-bs-target='#productImage' data-bs-slide-to='1' aria-label='Slide 2')
    button(type='button' data-bs-target='#productImage' data-bs-slide-to='2' aria-label='Slide 3')
    button(type='button' data-bs-target='#productImage' data-bs-slide-to='3' aria-label='Slide 4')
button.carousel-control-prev(type='button' data-bs-target='#productImage' data-bs-slide='prev')
  span.carousel-control-prev-icon(aria-hidden='true')
  span.visually-hidden Previous
button.carousel-control-next(type='button' data-bs-target='#productImage' data-bs-slide='next')
  span.carousel-control-next-icon(aria-hidden='true')
  span.visually-hidden Next
</template>
<script>
export default {
  name: "HeaderCarousel",
};
</script>
<style lang="scss">
.carousel {
  .carousel-item {
    height: 100vh;
    position: relative;
    .fixed-img {
      max-width: 55%;
      max-height: 55%;
      position: absolute;
      top: 43%;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, -43%);
      user-select: none;
    }
    .carousel-caption {
      bottom: 2.2rem;
    }
  }
  .carousel-indicators {
    button {
      height: 4px;
      border-radius: 4px;
      &.active,
      &:hover {
        background-color: $blueColor;
      }
    }
  }
}
</style>
