<script>
	import Project from '$lib/components/Project.svelte';
	import DexCard from '$lib/components/pokedex/DexCard.svelte';
	import A from '$lib/components/util/A.svelte';
	import P from '$lib/components/util/P.svelte';
</script>

<Project>
	<svelte:fragment slot="description">
		<h2 class="text-2xl">Lettuce Pokedex</h2>
		<P>
			Frontend to the Pokeapi built with <A href="https://kit.svelte.dev">svelte-kit</A>
			<A href="https://dex.rusondia.net" target="_blank">Check it out here</A>. Code available on
			<A href="https://github.com/lettucebowler/lettuce-pokedex" target="_blank">Github</A>.
		</P>
	</svelte:fragment>
	<svelte:fragment slot="figure">
		<DexCard />
	</svelte:fragment>
</Project>
