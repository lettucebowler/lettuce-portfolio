<script lang="ts">
	export let letter: string;
	export let status: string;
</script>

<div
	class="aspect-square justify-center text-center grid place-items-center text-2xl font-bold rounded-lg"
	class:bg-polar-400={status === 'incorrect'}
	class:bg-aurora-300={status === 'contains'}
	class:bg-aurora-400={status === 'correct'}
	class:bg-polar-100;border-4;border-solid;border-polar-400={status === 'none'}
>
	{letter.toUpperCase()}
</div>
