<script>
	import Project from '$lib/components/Project.svelte';
	import DexCard from '$lib/components/pokedex/DexCard.svelte';
</script>

<Project>
	<svelte:fragment slot="description">
		<h2>Lettuce Pokedex</h2>
		<p>
			Frontend to the Pokeapi build with <a href="https://kit.svelte.dev" target="_blank"
				>svelte-kit</a
			>.
			<a href="https://dex.rusondia.net" target="_blank">Check it out here</a>. Code available on
			<a href="https://github.com/lettucebowler/lettuce-pokedex" target="_blank">Github</a>.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="figure">
		<DexCard />
	</svelte:fragment>
</Project>
