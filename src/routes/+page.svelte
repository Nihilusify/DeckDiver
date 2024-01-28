<script lang="ts">
	const setThemeCookie = (theme: string) => {
		document.cookie = `theme=${theme};path=/;max-age=31536000`;
		document.documentElement.setAttribute('data-theme', theme);
	};
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h3>Change theme</h3>
<button class="btn btn-primary" on:click={() => setThemeCookie('forest')}>forest</button>
<button class="btn btn-secondary" on:click={() => setThemeCookie('coffee')}>coffee</button>
<button class="btn btn-success" on:click={() => setThemeCookie('business')}>business</button>
