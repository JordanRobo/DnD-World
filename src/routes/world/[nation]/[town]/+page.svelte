<script lang="ts">
    import { TabGroup, Tab, Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';
	import { formatMarkdown } from '$lib/util';
	import artifacts from '$lib/items/artifacts.json';
    export let data;

    let town = data.town;
    let tabSet: number = 0;



	const artifacts_list: TableSource = {
		head: ['Name', 'Description', 'Price'],
		body: tableMapperValues(artifacts, ['name', 'description', 'cost']),
	};
				

</script>

<h1 class="h1">{town.name}</h1>

<TabGroup>
	<Tab bind:group={tabSet} name="tab1" value={0}>Overview</Tab>
	{#each town.shops as shop, i (shop.id)}
        <Tab bind:group={tabSet} name={shop.name} value={i + 1}>{shop.shop_type}</Tab>
    {/each}
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
		<div class="prose prose-teal prose-sm dark:prose-invert">
			{@html formatMarkdown(town.description)}
		</div>
		{:else}
		<div class="grid grid-cols-3 gap-4">
			<div class="col-span-2 space-y-2">
				<h2 class="h2">{town.shops[tabSet - 1].name}</h2>
				<h4 class="h4 italic">{town.shops[tabSet - 1].shop_type}</h4>
				<h3 class="h3">Exterior</h3>
				<p class="blockquote">{town.shops[tabSet - 1].exterior}</p>
				<h3 class="h3">Interior</h3>
				<p class="blockquote">{town.shops[tabSet - 1].interior}</p>
			</div>
			<div>
				<img src={town.shops[tabSet - 1].images[0]} alt={town.shops[tabSet - 1].name} class="h-full object-cover justify-self-center" />
			</div>
			<div class="col-span-3">
				{#if town.shops[tabSet - 1].shop_type == "Tavern"}
					<h2 class="h2">Tavern Menu</h2>
				{:else if town.shops[tabSet - 1].shop_type == "Alchemist"}	
					<h2 class="h2">Alchemist Menu</h2>
				{:else if town.shops[tabSet - 1].shop_type == "Blacksmith"}
					<h2 class="h2">Blacksmith Menu</h2>
				{:else if town.shops[tabSet - 1].shop_type == "General Store"}
					<h2 class="h2">General Store Menu</h2>
				{:else if town.shops[tabSet - 1].shop_type == "Artificer"}
					<h2 class="h2">Artificer Menu</h2>
					<Table source={artifacts_list}></Table>
				{:else if town.shops[tabSet - 1].shop_type == "Enchanter"}
					<h2 class="h2">Enchanter Menu</h2>
				{/if}
			</div>
		</div>
			
        {/if}
	</svelte:fragment>
</TabGroup>