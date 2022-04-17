<script lang="ts">
	import '$lib/styles/app.css';
	import PageContentContainer from '$lib/components/PageContentContainer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

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
		href="/icomoon.css"
	/>
</svelte:head>
<body>
	<main>
		<PageContentContainer>
			<Navbar {links} />
			<slot />
		</PageContentContainer>
	</main>
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
