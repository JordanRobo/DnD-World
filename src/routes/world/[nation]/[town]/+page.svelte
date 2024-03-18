<script lang="ts">
    import { TabGroup, Tab, Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';
	import { formatMarkdown, getStock } from '$lib/util';
    export let data;

    let town = data.town;
    let tabSet: number = 0;

	let alchemist_items = getStock('alchemist', town.size);

	const alchemist_list: TableSource = {
		head: ['Name', 'Description', 'Price'],
		body: tableMapperValues(alchemist_items , ['name', 'description', 'price']),
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
					<p>Loading...</p>
				{:else if town.shops[tabSet - 1].shop_type == "Alchemist"}	
					<Table source={alchemist_list} />
				{:else if town.shops[tabSet - 1].shop_type == "Blacksmith"}
					<p>Loading...</p>
				{:else if town.shops[tabSet - 1].shop_type == "General Store"}
					<p>Loading...</p>
				{:else if town.shops[tabSet - 1].shop_type == "Artificer"}
					<p>Loading...</p>
				{:else if town.shops[tabSet - 1].shop_type == "Jeweler"}
					<p>Loading...</p>
				{:else if town.shops[tabSet - 1].shop_type == "Illicit"}
				<p>Loading...</p>
				{/if}
			</div>
		</div>
			
        {/if}
	</svelte:fragment>
</TabGroup>