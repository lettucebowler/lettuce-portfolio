<script>
	import Project from '$lib/components/Project.svelte';
	import LetterGrid from '$lib/components/wordle/LetterGrid.svelte';

	const data = JSON.parse(
		'[{"complete":true,"word":[{"letter":"s","status":"incorrect"},{"letter":"l","status":"incorrect"},{"letter":"a","status":"correct"},{"letter":"t","status":"contains"},{"letter":"e","status":"incorrect"}]},{"complete":true,"word":[{"letter":"c","status":"incorrect"},{"letter":"r","status":"correct"},{"letter":"o","status":"incorrect"},{"letter":"n","status":"correct"},{"letter":"y","status":"incorrect"}]},{"complete":true,"word":[{"letter":"g","status":"correct"},{"letter":"r","status":"correct"},{"letter":"u","status":"incorrect"},{"letter":"n","status":"correct"},{"letter":"t","status":"correct"}]},{"complete":true,"word":[{"letter":"g","status":"correct"},{"letter":"r","status":"correct"},{"letter":"a","status":"correct"},{"letter":"n","status":"correct"},{"letter":"t","status":"correct"}]},{"complete":true,"word":[{"letter":"","status":"none"},{"letter":"","status":"none"},{"letter":"","status":"none"},{"letter":"","status":"none"},{"letter":"","status":"none"}]},{"complete":true,"word":[{"letter":"","status":"none"},{"letter":"","status":"none"},{"letter":"","status":"none"},{"letter":"","status":"none"},{"letter":"","status":"none"}]}]'
	);
</script>

<Project>
	<svelte:fragment slot="description">
		<h2 class="text-2xl">WordLettuce</h2>
		<p class="p-4 text-left text-lg">
			Wordle clone made using <a
				class="text-aurora-400"
				href="https://kit.svelte.dev"
				target="_blank">svelte-kit</a
			>. My job blocked the real wordle and I wanted to keep playing and sharing scores with my
			coworkers so I made my own.
			<a class="text-aurora-400" href="https://word.lettucebowler.net" target="_blank"
				>Playable here</a
			>. Code available on
			<a
				class="text-aurora-400"
				href="https://github.com/lettucebowler/lettuce-wordle"
				target="_blank">Github</a
			>.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="figure">
		<LetterGrid {data} />
	</svelte:fragment>
</Project>
