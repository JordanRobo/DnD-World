<script lang="ts">
    import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { formatMarkdown } from '$lib/util';
    export let data;

    let town = data.town;
    let tabSet: number = 0;
	console.log(town);
</script>

<h1 class="h1">{town.name}</h1>

<TabGroup>
	<Tab bind:group={tabSet} name="tab1" value={0}>Overview</Tab>
	<Tab bind:group={tabSet} name="tab2" value={1}>Shop 1</Tab>
	<Tab bind:group={tabSet} name="tab3" value={2}>Shop 2</Tab>
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
		<div class="prose prose-teal prose-sm dark:prose-invert">
			{@html formatMarkdown(town.description)}
		</div>
		{:else if tabSet === 1}
            <p>Shop 1</p>
		{:else if tabSet === 2}
			<p>Shop 2</p>
		{/if}
	</svelte:fragment>
</TabGroup>