# vuex-setup

This template should help get you started developing with Vue 3 in Vite.

# reusable template with style tailwind css

```sh
<template>
	<nav class="nav">
		<a href="#" class="nav-link">Home</a>
		<a href="#" class="nav-link">About</a>
		<a href="#" class="nav-link">Contact</a>
	</nav>
	<div class="container">
		<h1 class="text-2xl title text-center">Vue with Vuex demo</h1>

		<div class="card">
			<img src="https://via.placeholder.com/600" alt="Card Image" />
			<div class="p-4">
				<h2 class="card-title">Card Title</h2>
				<p class="card-text">
					This is a reusable card component built with Tailwind CSS. You can
					easily customize its styles and content.
				</p>
				<button class="card-button">Learn More</button>
			</div>
		</div>
	</div>
	<div class="card mt-4">
		<div class="p-4">
			<h1 class="title">Main Title</h1>
			<h2 class="subtitle">Sub Title</h2>
			<p class="paragraph">
				This is a reusable paragraph component. It has consistent spacing, font
				size, and color for readability across your site.
			</p>
			<ul class="list">
				<li class="list-item">First Item</li>
				<li class="list-item">Second Item</li>
				<li class="list-item">Third Item</li>
			</ul>
		</div>
	</div>
	<section class="section my-4">
		<h2 class="section-title">Section Title</h2>
		<p class="section-paragraph">This is the section content.</p>

		<div class="w-2/4">
			<div class="form-group">
				<label for="email" class="form-label">Email Address</label>
				<input
					id="email"
					type="email"
					class="form-input"
					placeholder="Enter your email"
				/>
			</div>
			<div class="form-group">
				<label for="message" class="form-label">Message</label>
				<textarea
					id="message"
					class="form-textarea"
					placeholder="Write your message here..."
					rows="4"
				></textarea>
			</div>
			<div class="form-group">
				<label for="options" class="form-label">Select an Option</label>
				<select id="options" class="form-select">
					<option value="" disabled selected>Choose an option</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>
			</div>
		</div>

		<article class="article">
			<h3 class="article-title">Article Title</h3>
			<p class="article-content">
				This is the content of the article. It’s styled for readability and
				consistency across all articles.
			</p>
		</article>
		<button class="btn-primary mr-4">Primary Button</button>
		<button class="btn-secondary">Secondary Button</button>
	</section>
	<section class="section py-4">
		<form class="form">
			<div class="form-group">
				<label for="name" class="form-label">Name</label>
				<input
					id="name"
					type="text"
					class="form-input"
					placeholder="Enter your name"
				/>
			</div>

			<div class="form-group">
				<label for="email" class="form-label">Email</label>
				<input
					id="email"
					type="email"
					class="form-input"
					placeholder="Enter your email"
				/>
			</div>

			<div class="form-group">
				<label for="message" class="form-label">Message</label>
				<textarea
					id="message"
					class="form-textarea"
					placeholder="Your message"
					rows="5"
				></textarea>
			</div>

			<button type="submit" class="btn-primary">Submit</button>
		</form>
	</section>
	<section class="selection">
		<div class="product-grid p-4">
			<!-- Product Card 1 -->
			<div class="product-card">
				<img
					src="https://via.placeholder.com/150"
					alt="Product Image"
					class="product-image"
				/>
				<h3 class="product-title">Product Title</h3>
				<p class="product-price">$29.99</p>
				<button class="btn-primary">Add to Cart</button>
			</div>

			<!-- Product Card 2 -->
			<div class="product-card">
				<img
					src="https://via.placeholder.com/150"
					alt="Product Image"
					class="product-image"
				/>
				<h3 class="product-title">Another Product</h3>
				<p class="product-price">$39.99</p>
				<button class="btn-primary">Add to Cart</button>
			</div>

			<!-- Add more product cards as needed -->
		</div>
	</section>
</template>
```

# style

```sh
@tailwind base;
@tailwind components;
@tailwind utilities;

/* nav */
.nav {
	@apply flex space-x-4 bg-blue-600 p-4;
}

.nav-link {
	@apply text-white text-sm font-medium hover:underline;
}

/* card  */
.card {
	@apply max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden;
}

.card img {
	@apply w-full h-48 object-cover;
}

.card-title {
	@apply text-lg font-semibold text-gray-800;
}

.card-text {
	@apply mt-2 text-sm text-gray-600;
}

.card-button {
	@apply mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded;
}

/* title and subtitle  */

.title {
	@apply text-3xl font-bold text-gray-800 mb-4;
}

.subtitle {
	@apply text-xl font-semibold text-gray-600 mb-2;
}

/* paragraph */
.paragraph {
	@apply text-base text-gray-700 leading-relaxed mb-4;
}

.list {
	@apply list-disc pl-5 mb-4;
}

/* list items */
.list-item {
	@apply text-gray-700 text-sm mb-2;
}

/* section  */
.section {
	@apply bg-gray-100 p-6 rounded-lg shadow-sm;
}

.section-title {
	@apply text-2xl font-bold text-gray-800 mb-2;
}

.section-paragraph {
	@apply text-base text-gray-700 leading-relaxed;
}

/* article */
.article {
	@apply border border-gray-200 p-6 rounded-lg shadow-sm mb-6;
}

.article-title {
	@apply text-xl font-semibold text-gray-800 mb-3;
}

.article-content {
	@apply text-base text-gray-700 leading-relaxed;
}

/* forms and button */
.form {
	@apply w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md;
}

.btn-primary {
	@apply bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 transition duration-300;
}

.btn-secondary {
	@apply bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-300 transition duration-300;
}

.form-group {
	@apply mb-4;
}

.form-label {
	@apply block text-sm font-medium text-gray-700 mb-2;
}

.form-input {
	@apply w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500;
}
/* textarea */
.form-textarea {
	@apply w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500;
}

/* dropdown */
.form-select {
	@apply w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500;
}

/* products grid */
.product-grid {
	@apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6;
}

.product-card {
	@apply bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center text-center;
}

.product-image {
	@apply w-32 h-32 object-cover mb-4;
}

.product-title {
	@apply text-lg font-semibold text-gray-800 mb-2;
}

.product-price {
	@apply text-blue-600 font-medium mb-4;
}

.btn-primary {
	@apply bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300;
}

```
