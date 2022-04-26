<script>
	import SudokuBoard from '$lib/components/sudoku/SudokuBoard.svelte';
	import Project from '$lib/components/Project.svelte';
	// import '$lib/styles/app.css';
</script>

<Project>
	<svelte:fragment slot="description">
		<a href="https://sudoku.rusondia.net" target="_blank"><h2>Sveltedoku</h2></a>
		<p>
			Sudoku Game made using <a href="https://kit.svelte.dev" target="_blank">svelte-kit</a>.
			<a href="https://sudoku.rusondia.net" target="_blank">Playable here</a>. Code available on
			<a href="https://github.com/lettucebowler/sveltedoku" target="_blank">Github</a>.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="figure">
		<SudokuBoard />
	</svelte:fragment>
</Project>
