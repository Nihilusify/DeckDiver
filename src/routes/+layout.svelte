<script lang="ts">
	import '../app.css';

	const setThemeCookie = (theme: string) => {
		document.cookie = `theme=${theme};path=/;max-age=31536000`;
		document.documentElement.setAttribute('data-theme', theme);
	};
</script>

<div class="navbar bg-neutral">
	<div class="flex-1">
		<img class="mask mask-hexagon w-12 mr-2" src="Deck Diver Icon.png" alt="" />
		<span class="text-xl">Deck Diver</span>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/">Info</a></li>
			<li><a href="/scores">High Scores</a></li>
			<li><a href="/game">Start Playing</a></li>
		</ul>
	</div>
</div>

<slot />
