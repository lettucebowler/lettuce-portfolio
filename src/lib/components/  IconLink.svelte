<script lang="ts">
	export let icon: string;
	export let href: string;
	export let color = 'fourteen';
	export let caption = 'caption';
</script>

<a {href} target="_blank"><i class={`${icon} ${color}`} /></a>
<div>{caption}</div>

<style>
	a {
		text-decoration: none;
	}

	a .fourteen {
		color: var(--nord-14);
	}

	a .twelve {
		color: var(--nord-12);
	}

	i {
		font-size: 5rem;
	}

	div {
		font-size: 1.5rem;
	}
</style>
