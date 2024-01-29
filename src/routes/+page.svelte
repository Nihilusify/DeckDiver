<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	const carouselImages = [
		'https://picsum.photos/id/237/320',
		'https://picsum.photos/id/238/320',
		'https://picsum.photos/id/239/320',
		'https://picsum.photos/id/236/320'
	];

	let currentImageNumber = 1;
	const autoScrollIntervalMillis = 10000;
	let autoScrollIntervalID: number;

	// Scroll the carousel to the target image
	// Dont jump the scroll of the page
	// We can assume that all the images are the same width
	const scrollCarousel = (targetImageNumber: number) => {
		const carousel = document.querySelector('.carousel');
		if (!carousel) return;
		const carouselWidth = carousel.clientWidth;
		carousel.scroll({
			left: carouselWidth * (targetImageNumber - 1),
			behavior: 'smooth'
		});

		currentImageNumber = targetImageNumber;
	};

	onMount(() => {
		// Auto scroll the carousel unless the user is interacting with it
		// If the user is interacting with it, they probably want to look at a specific image
		// So we should pause the auto scroll
		const carousel = document.querySelector('.carousel');
		if (!carousel) return;

		const carouselWidth = carousel.clientWidth;

		const intervalFn = () => {
			if (document.activeElement === carousel) return;
			currentImageNumber++;
			if (currentImageNumber > carouselImages.length) currentImageNumber = 1;
			scrollCarousel(currentImageNumber);
		};

		autoScrollIntervalID = setInterval(intervalFn, autoScrollIntervalMillis);

		carousel.addEventListener('mouseover', () => {
			clearInterval(autoScrollIntervalID);
			console.log('mouseover');
		});

		carousel.addEventListener('mouseout', () => {
			clearInterval(autoScrollIntervalID);
			// start the auto scroll again
			autoScrollIntervalID = setInterval(intervalFn, autoScrollIntervalMillis);
			console.log('mouseout');
		});
	});

	onDestroy(() => {
		clearInterval(autoScrollIntervalID);
	});
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center flex flex-col w-full">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Unleash your inner card shark</h1>
			<p class="py-6">Endless card game fun, one deck at a time!</p>
			<button class="btn btn-primary">Start Playing</button>
		</div>
		<div class="carousel w-80 rounded-box mt-5">
			{#each carouselImages as image, i}
				<img src={image} class="w-full rounded-box" alt="screenshot" />
			{/each}
		</div>
		<div class="flex justify-center w-full py-2 gap-2">
			{#each carouselImages as image, i}
				<button class="btn btn-xs" on:click={() => scrollCarousel(i + 1)}>{i + 1}</button>
			{/each}
		</div>
	</div>
</div>

<style>
	.carousel img:hover {
		border: 2px solid #fff;
	}
</style>
