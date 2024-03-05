<script lang="ts">
	import { goto } from '$app/navigation';
	
	export let data;	

</script>

<div class="grid grid-cols-3 gap-4">
	<div class="col-span-3">
		<h1 class="h1">Nations of Afereon</h1>
	</div>
	{#each data.nations as nation}
		<div class="card variant-ghost-secondary p-4 grid grid-cols-2">
			<div class="grid grid-rows-3">
				<div class="row-span-2">
					<h3 class="h3">{nation.name}</h3>
				</div>
				<div>
					<button type="button" on:click={() => { goto('/world/' + nation.url)}} class="btn variant-ghost-primary hover:variant-filled-primary ">Explore</button>
				</div>
			</div>
			<div class="justify-self-end">
				<img src={nation.banner} alt="{nation.name} Banner" class="h-48">
			</div>
		</div>
	{/each}
</div>