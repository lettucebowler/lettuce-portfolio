<script>
	import SudokuBoard from '$lib/components/sudoku/SudokuBoard.svelte';
	import Project from '$lib/components/Project.svelte';
</script>

<Project>
	<svelte:fragment slot="description">
		<h2 class="text-2xl">Sveltedoku</h2>
		<p class="p-4 text-lg text-left">
			Sudoku game made using <a
				class="text-aurora-400"
				href="https://kit.svelte.dev"
				target="_blank">svelte-kit</a
			>.
			<a class="text-aurora-400" href="https://sudoku.rusondia.net" target="_blank">Playable here</a
			>. Code available on
			<a class="text-aurora-400" href="https://github.com/lettucebowler/sveltedoku" target="_blank"
				>Github</a
			>.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="figure">
		<SudokuBoard />
	</svelte:fragment>
</Project>
