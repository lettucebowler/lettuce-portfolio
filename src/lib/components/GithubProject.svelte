<script>
	import Project from '$lib/components/Project.svelte';
</script>

<Project>
	<svelte:fragment slot="description">
		<a href="https://github.com/lettucebowler" target="_blank"><h2>Everything else</h2></a>
		<p>
			I have a few other public projects on my <a
				href="https://github.com/lettucebowler"
				target="_blank">Github</a
			>. Feel free to browse the code, file an issue, star a repo, or submit a PR!
		</p>
	</svelte:fragment>
	<svelte:fragment slot="figure">
		<a href="https://github.com/lettucebowler" target="_blank"><i class="fa fa-github octocat" /></a
		>
	</svelte:fragment>
</Project>

<style>
	.octocat {
		font-size: 16rem;
	}
</style>
