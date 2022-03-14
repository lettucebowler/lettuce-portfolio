<script>
	import Project from '$lib/components/Project.svelte';
	import LetterGrid from '$lib/components/wordle/LetterGrid.svelte';
	import { Status } from '$lib/types/types';
</script>

<Project>
	<svelte:fragment slot="description">
		<a href="https://word.lettucebowler.net" target="_blank"><h2>WordLettuce</h2></a>
		<p>
			Wordle clone made with <a href="https://kit.svelte.dev" target="_blank">svelte-kit</a>. I made
			this game after my job blocked the real wordle on the company network, and my coworkers I
			wanted to keep playing and sharing our scores with each other. Playable demo available <a href="https://word.lettucebowler.net" target="_blank">here</a>. Code available for browsing
			<a href="https://github.com/lettucebowler/sveltedoku" target="_blank">here</a>.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="figure">
		<LetterGrid
			data={[
				{
					complete: true,
					word: [
						{
							letter: 's',
							status: Status.INCORRECT
						},
						{
							letter: 'l',
							status: Status.INCORRECT
						},
						{
							letter: 'a',
							status: Status.CORRECT
						},
						{
							letter: 't',
							status: Status.CONTAINS
						},
						{
							letter: 'e',
							status: Status.INCORRECT
						}
					]
				},
				{
					complete: true,
					word: [
						{
							letter: 'c',
							status: Status.INCORRECT
						},
						{
							letter: 'r',
							status: Status.CORRECT
						},
						{
							letter: 'o',
							status: Status.INCORRECT
						},
						{
							letter: 'n',
							status: Status.CORRECT
						},
						{
							letter: 'y',
							status: Status.INCORRECT
						}
					]
				},
				{
					complete: true,
					word: [
						{
							letter: 'g',
							status: Status.CORRECT
						},
						{
							letter: 'r',
							status: Status.CORRECT
						},
						{
							letter: 'u',
							status: Status.INCORRECT
						},
						{
							letter: 'n',
							status: Status.CORRECT
						},
						{
							letter: 't',
							status: Status.CORRECT
						}
					]
				},
				{
					complete: true,
					word: [
						{
							letter: 'g',
							status: Status.CORRECT
						},
						{
							letter: 'r',
							status: Status.CORRECT
						},
						{
							letter: 'a',
							status: Status.CORRECT
						},
						{
							letter: 'n',
							status: Status.CORRECT
						},
						{
							letter: 't',
							status: Status.CORRECT
						}
					]
				},
				{
					complete: true,
					word: [
						{
							letter: '',
							status: Status.NONE
						},
						{
							letter: '',
							status: Status.NONE
						},
						{
							letter: '',
							status: Status.NONE
						},
						{
							letter: '',
							status: Status.NONE
						},
						{
							letter: '',
							status: Status.NONE
						}
					]
				},
				{
					complete: true,
					word: [
						{
							letter: '',
							status: Status.NONE
						},
						{
							letter: '',
							status: Status.NONE
						},
						{
							letter: '',
							status: Status.NONE
						},
						{
							letter: '',
							status: Status.NONE
						},
						{
							letter: '',
							status: Status.NONE
						}
					]
				}
			]}
		/>
	</svelte:fragment>
</Project>
