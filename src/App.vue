<script setup>
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';
import { RouterView } from 'vue-router';

const post = ref(null);
const isLoading = ref(false); // Track loading state
const err = ref(null); // Track error state
const postId = ref(1);

const getPost = async () => {
	isLoading.value = true; // Start loading
	try {
		const response = await axios.get(
			`https://dummyjson.com/posts/${postId.value}`
		);
		post.value = response.data; // Assign fetched data to `post`
	} catch (error) {
		err.value = 'Failed to fetch post data. Please try again later.';
		err.value = error?.message;
		console.error(error); // Log the error
	} finally {
		isLoading.value = false; // Stop loading
	}
};

onMounted(getPost);

// Watch `postId` for changes and fetch new post
watch(postId, () => {
	getPost();
});

const generateRandom = () => {
	// console.log(Math.floor(Math.random() * 10) + 1);
	postId.value = Math.floor(Math.random() * 5000) + 1;
};
</script>

<template>
	<main>
		<section class="section">
			<div class="mb-3">
				<h2 class="title">Check api error</h2>
				<button class="btn-primary" @click="generateRandom">
					Sync....{{ postId }}
				</button>
			</div>
			<!-- Loading State -->
			<div v-if="isLoading" class="text-blue-500 text-lg font-medium">
				Loading post...
			</div>
			<!-- Error State -->
			<div v-else-if="err" class="text-red-500 text-lg font-medium">
				{{ err }}
			</div>
			<!-- Post Content -->
			<div
				v-else-if="post"
				class="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden md:w-full px-2 py-8"
			>
				<!-- avoid can't read properties title and body with optional chaining -->
				<!-- <h3 class="subtitle">{{ post?.title }}</h3>
				<p>{{ post?.body }}</p> -->
				<h3 class="subtitle">{{ post.title }}</h3>
				<p>{{ post.body }}</p>
			</div>
			<div v-else class="text-red-500 text-lg font-medium">
				<p>No data available.</p>
			</div>
		</section>
		<RouterView />
	</main>
</template>
