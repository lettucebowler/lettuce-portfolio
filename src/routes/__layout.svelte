<script lang="ts">
	import '$lib/styles/app.css';
	import PageContentContainer from '$lib/components/PageContentContainer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
import Spacing from '$lib/components/Spacing.svelte';

	const links = [
		{
			path: '/',
			name: 'Home'
		},
		{
			path: '/projects',
			name: 'Projects'
		}
	];
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/favicon.png" />
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
	/>
</svelte:head>
<body>
	<PageContentContainer>
		<main>
			<Navbar {links} />
			<slot />
			<Spacing />
		</main>
	</PageContentContainer>
</body>

<style>
	body {
		background-color: var(--nord-0);
		margin: 0px 0px;
	}

	main {
		justify-content: start;
		flex-direction: column;
		display: flex;
		text-align: center;
		min-height: 50vh;
		color: var(--nord-4);
	}
</style>
