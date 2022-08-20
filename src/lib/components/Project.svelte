<script>
	import Card from '$lib/components/Card.svelte';
</script>

<Card>
	<div class="flex flex-wrap gap-1.5">
		<div class="flex p-4 flex-[2_1_15rem] flex-col">
			<slot name="description" />
		</div>
		<div class="flex flex-[1_1_15rem] flex-wrap h-full" aria-hidden="true">
			<slot name="figure" />
		</div>
	</div>
</Card>
