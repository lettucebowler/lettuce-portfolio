<script>
	import SudokuBoard from '$lib/components/sudoku/SudokuBoard.svelte';
	import Project from '$lib/components/Project.svelte';
	import '$lib/styles/app.css';
</script>

<Project>
	<svelte:fragment slot="description">
		<a href="https://sudoku.rusondia.net" target="_blank"><h2>Sveltedoku</h2></a>
		<p>
			Simple sudoku game. I made this game to give myself a reason to learn <a
				href="https://kit.svelte.dev"
				target="_blank">svelte-kit</a
			>. Playable demo available at <a href="https://sudoku.rusondia.net" target="_blank">here</a>.
			Code available for browsing on
			<a href="https://github.com/lettucebowler/sveltedoku" target="_blank">Github</a>.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="figure">
		<SudokuBoard />
	</svelte:fragment>
</Project>
