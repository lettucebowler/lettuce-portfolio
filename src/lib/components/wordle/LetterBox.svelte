<script lang="ts">
	export let letter: string;
	export let status: string;
</script>

<div
	class="grid aspect-square place-items-center justify-center rounded-lg text-center text-2xl font-bold"
	class:bg-polar-400={status === 'incorrect'}
	class:bg-aurora-300={status === 'contains'}
	class:bg-aurora-400={status === 'correct'}
	class:bg-polar-100;border-4;border-solid;border-polar-400={status === 'none'}
>
	{letter.toUpperCase()}
</div>
