<script setup>
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';
import { RouterView } from 'vue-router';
import apiClient from './axios';

const post = ref(null);
const isLoading = ref(false); // Track loading state
const err = ref(null); // Track error state
const postId = ref(1);

const getPost = async () => {
	isLoading.value = true; // Start loading
	try {
		const response = await apiClient.get(`posts/${postId.value}`);
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
	postId.value = Math.floor(Math.random() * 100) + 1;
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
			<div v-else-if="post" class="primary-card px-4 py-8">
				<!-- avoid can't read properties title and body with optional chaining -->
				<!-- <h3 class="subtitle">{{ post?.title }}</h3>
				<p>{{ post?.body }}</p> -->
				<h3 class="subtitle">{{ post.title }}</h3>
				<p>{{ post.body }}</p>
				<!-- Post Metadata -->
				<div class="flex items-center space-x-4 text-gray-600 text-sm my-3">
					<div class="flex items-center space-x-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							class="h-5 w-5 text-green-500"
							viewBox="0 0 24 24"
						>
							<path
								d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
							/>
						</svg>
						<span>{{ post.reactions.likes }} Likes</span>
					</div>
					<div class="flex items-center space-x-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							class="h-5 w-5 text-red-500"
							viewBox="0 0 24 24"
						>
							<path
								d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
							/>
						</svg>
						<span>{{ post.reactions.dislikes }} Dislikes</span>
					</div>
					<div class="flex items-center space-x-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							class="h-5 w-5 text-blue-500"
							viewBox="0 0 24 24"
						>
							<path
								d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-.5-10h-1v6h5v-1h-4V9z"
							/>
						</svg>
						<span>{{ post.views }} Views</span>
					</div>
				</div>
				<!-- Metadata  -->
				<!-- Post Tags -->
				<div class="mt-4">
					<!-- <h4 class="text-lg font-semibold text-gray-800">Tags:</h4> -->
					<div class="flex flex-wrap gap-2 mt-2">
						<span
							v-for="tag in post.tags"
							:key="tag"
							class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
						>
							{{ tag }}
						</span>
					</div>
				</div>
				<!-- Tags -->
			</div>
			<div v-else class="text-red-500 text-lg font-medium">
				<p>No data available.</p>
			</div>
		</section>
		<RouterView />
	</main>
</template>
