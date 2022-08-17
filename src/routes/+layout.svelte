<script lang="ts">
	import PageContentContainer from '$lib/components/PageContentContainer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '$lib/assets/icomoon.css';
	import '$lib/assets/app.css';
	import smallFavicon from '$lib/assets/favicon-16x16.png';
	import bigFavicon from '$lib/assets/favicon-32x32.png';
	import appleTouchIcon from '$lib/assets/apple-touch-icon.png';
	import safariPinnedTabIcon from '$lib/assets/safari-pinned-tab.svg';

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
	<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
	<link rel="icon" type="image/png" sizes="32x32" href={bigFavicon} />
	<link rel="icon" type="image/png" sizes="16x16" href={smallFavicon} />
	<link rel="mask-icon" href={safariPinnedTabIcon} color="#a3be8c" />
</svelte:head>

<PageContentContainer>
	<Navbar {links} />
	<main>
		<slot />
	</main>
</PageContentContainer>

<style>
	:global(body) {
		background-color: var(--nord-0);
		margin: 0px 0px;
	}

	main {
		justify-content: start;
		flex-direction: column;
		display: flex;
		text-align: center;
		color: var(--nord-4);
	}
</style>
