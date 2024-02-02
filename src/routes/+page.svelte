<script lang="ts">
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	
	export let data;
	
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });		

</script>

<div class="h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h3 class="h3">Welcome to</h3>
		<h1 class="h1">Afereon</h1>
		<p>Start by exploring:</p>
		<ul>
			{#each data.nations as nation}
			<li>
				<button data-sveltekit-preload-data="hover" type="button" on:click={() => {
					goto('/nation/' + nation.name);
				}} class="btn variant-ghost-secondary hover:variant-filled-tertiary mt-2">{nation.name}</button>
			</li>
			{/each}
		</ul>
	</div>
</div>