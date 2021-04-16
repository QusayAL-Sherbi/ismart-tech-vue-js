<template>
  <div id="app">
    <app-header />
    <features-section />
		<!-- Start Products Section -->
		<section class="main-section products">
			<div class="container-fluid">
				<h2 class="h1 section-title">Products</h2>
				<div class="products-container">
					<products
					v-for="product in products"
					v-bind:key="product.id"
					:category="product.category"
					:image="product.image"
					:name="product.name"
					:description="product.description"
					/>
				</div>
			</div>
		</section>
		<!-- End Products Section -->
  </div>
</template>

<script>
import AppHeader from "@/components/global/AppHeader.vue";
import FeaturesSection from "@/components/FeaturesSection.vue";
import Products from "@/components/Products.vue";
import jsonAPI from "./json/products.json";
export default {
  data: function () {
    return {
      products: jsonAPI,
    };
  },
  name: "App",
  components: {
    AppHeader,
    FeaturesSection,
    Products,
  },
};
</script>