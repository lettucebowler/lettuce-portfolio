<script lang="ts">
	import IconLink from '$lib/components/IconLink.svelte';
	import Card from '$lib/components/Card.svelte';
	import P from '$lib/components/util/P.svelte';
</script>

<svelte:head>
	<title>Grant Montgomery</title>
</svelte:head>

<Card>
	<div class="flex flex-col gap-2">
		<h1 class="text-6xl m-0 font-bold">Hello, I'm Grant!</h1>
		<P>
			I like Sudoku puzzles and learning new things. I'm a web developer currently working in the
			healthcare industry.
		</P>
		<div class="flex justify-center">
			<div class="flex flex-auto justify-around">
				<div class="flex-[0_1_32px]">
					<IconLink href="/Resume.pdf" icon="download" caption="Resume" color="orange" />
				</div>
				<div class="flex-[0_1_32px]">
					<IconLink href="https://github.com/lettucebowler" icon="code" caption="Github" />
				</div>
			</div>
		</div>
	</div>
</Card>
