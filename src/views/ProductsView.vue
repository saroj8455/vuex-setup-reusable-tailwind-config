<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const products = ref([]); // Reactive variable to store products
const isLoading = ref(true); // Reactive variable to track loading state
const error = ref(null); // Reactive variable to track errors

const getProducts = async () => {
	try {
		const response = await axios.get('https://dummyjson.com/products');
		if (!response.status === 200) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		// console.log('hi', response.data);

		// const data = response.data;
		// Assign fetched products to the reactive variable
		products.value = response?.data.products;
	} catch (error) {
		// Capture any error
		error.value = error.message;
	} finally {
		// Set loading state to false
		isLoading.value = false;
	}
};

// Fetch products when the component is mounted
onMounted(getProducts);
</script>

<template>
	<section class="section">
		<div class="flex flex-col items-center space-y-4">
			<!-- Loading State -->
			<div
				:class="{
					block: isLoading,
					hidden: !isLoading,
				}"
				class="text-blue-500 text-lg font-medium"
			>
				Loading products...
			</div>

			<!-- Error State -->
			<div
				:class="{
					block: error && !isLoading,
					hidden: !error || isLoading,
				}"
				class="text-red-500 text-lg font-medium"
			>
				{{ error }}
			</div>

			<!-- Products List -->
			<div
				:class="{
					block: !isLoading && !error,
					hidden: isLoading || error,
				}"
				class="w-full"
			>
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					<!-- Move the add to cart button group bottom of the card fix - flex flex-col and mt-auto in button group  -->
					<div
						class="card py-4 flex flex-col"
						v-for="product in products"
						:key="product.id"
					>
						<!-- Product Image -->
						<img
							:src="product.thumbnail"
							:alt="product.title"
							class="w-full h-48 object-cover"
						/>
						<!-- Product Details -->
						<div class="p-4">
							<h2 class="card-title">{{ product.title }}</h2>
							<p class="card-category text-sm text-blue-600 font-medium mb-1">
								{{ product.category }}
							</p>
							<p class="card-price text-lg font-semibold text-green-600 mb-2">
								$ {{ product.price }}
							</p>
							<!-- Product Description -->
							<p class="card-text text-gray-600 mb-4">
								{{ product.description }}
							</p>
							<!-- Rating -->
							<div class="flex items-center text-sm mb-4">
								<!-- Stars -->
								<div class="flex items-center text-yellow-500">
									<span v-for="n in 5" :key="n" class="h-5 w-5">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											class="h-5 w-5"
											viewBox="0 0 24 24"
											:class="
												n <= Math.round(product.rating)
													? 'text-yellow-500'
													: 'text-gray-300'
											"
										>
											<path
												d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
											/>
										</svg>
									</span>
								</div>
								<!-- Rating Value -->
								<span class="ml-2 text-gray-700">{{ product.rating }}</span>
							</div>
						</div>

						<!-- Button Group at the Bottom -->
						<!-- Move the add to cart button group bottom of the card fix - mt-auto in button group  -->
						<div class="mt-auto flex gap-4 p-4">
							<button @click="incrementAsync" class="flex-1 btn-primary">
								Add to cart
							</button>
							<button @click="inc" class="btn-secondary">+</button>
							<button @click="dec" class="btn-secondary">-</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
