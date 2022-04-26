<script>
	import Card from '$lib/components/Card.svelte';
</script>

<Card>
	<div>
		<h2>Everything else</h2>
		<p>
			I have a few other public projects on my <a
				href="https://github.com/lettucebowler"
				target="_blank">Github</a
			>. Feel free to browse the code, file an issue, star a repo, or submit a PR!
		</p>
	</div>
</Card>

<style>
	div {
		margin: 1rem;
	}

	h2 {
		color: var(--nord-14);
	}
</style>
