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
		<div class="figure">
			<span class="icon-git octocat" />
		</div>
	</svelte:fragment>
</Project>

<style>
	.figure {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	span {
		display: flex;
		margin: auto;
	}

	.octocat {
		font-size: 15rem;
	}
</style>
