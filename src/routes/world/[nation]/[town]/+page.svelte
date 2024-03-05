<script lang="ts">
    import { TabGroup, Tab } from '@skeletonlabs/skeleton';
    export let data;

    let town = data.town;
    let tabSet: number = 0;
</script>

<p>World page for {town.name} in {town.nation}</p>
<TabGroup>
	<Tab bind:group={tabSet} name="tab1" value={0}>{town.name}</Tab>
	<Tab bind:group={tabSet} name="tab2" value={1}>Shop 1</Tab>
	<Tab bind:group={tabSet} name="tab3" value={2}>Shop 2</Tab>
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
            <p>Overview</p>
		{:else if tabSet === 1}
            <p>Shop 1</p>
		{:else if tabSet === 2}
			<p>Shop 2</p>
		{/if}
	</svelte:fragment>
</TabGroup>