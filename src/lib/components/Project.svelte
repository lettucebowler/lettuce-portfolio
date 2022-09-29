<script>
	import Card from '$lib/components/util/Card.svelte';
</script>

<Card>
	<div class="flex flex-wrap gap-1.5">
		<div class="flex flex-[2_1_15rem] flex-col p-4">
			<slot name="description" />
		</div>
		<div class="flex h-full flex-[1_1_15rem] flex-wrap" aria-hidden="true">
			<slot name="figure" />
		</div>
	</div>
</Card>
