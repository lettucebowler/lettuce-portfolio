<script context="module">
	export const hydrate = false;
	export const prerender = true;
</script>

<script lang="ts">
	// import '$lib/styles/app.css';
	import Spacing from '$lib/components/Spacing.svelte';
	import SudokuProject from '$lib/components/SudokuProject.svelte';
	import WordleProject from '$lib/components/WordleProject.svelte';
	import GithubProject from '$lib/components/GithubProject.svelte';
	import Project from '$lib/components/Project.svelte';
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<Spacing />
<Project>
	<div>
		<h1>Projects</h1>
		<p>Below are the personal projects I currently feel like showing off.</p>
	</div>
</Project>
<Spacing />
<SudokuProject />
<Spacing />
<WordleProject />
<Spacing />
<GithubProject />

<style>
	div {
		flex: 1 1 auto;
	}

	h1 {
		font-size: 3.75rem;
		margin: 0 0 0 0;
	}

	p {
		font-size: 1.25rem;
		padding: 0px 14px;
		text-align: center;
	}
</style>
