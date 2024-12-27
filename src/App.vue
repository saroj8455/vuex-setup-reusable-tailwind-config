<script setup></script>

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
