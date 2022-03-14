<script lang="ts">
	import '$lib/styles/app.css';
	import Spacing from '$lib/components/Spacing.svelte';
	import SudokuProject from '$lib/components/SudokuProject.svelte';
	import WordleProject from '$lib/components/WordleProject.svelte';
	import GithubProject from '$lib/components/GithubProject.svelte';
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<Spacing />
<SudokuProject />
<Spacing />
<WordleProject />
<Spacing />
<GithubProject />
