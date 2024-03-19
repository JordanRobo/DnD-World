<script lang="ts">
    import { TabGroup, Tab, Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';
	import { formatMarkdown, getStock } from '$lib/util';
    export let data;

    let town = data.town;
    let tabSet: number = 0;

	function itemList(shopType: string): TableSource {
        const shopItems = getStock(shopType, town.size);
        return {
            head: ['Name', 'Description', 'Price'],
            body: tableMapperValues(shopItems, ['name', 'description', 'price']),
        };
    }
		
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
					<Table source={itemList('tavern')} />
				{:else if town.shops[tabSet - 1].shop_type == "Alchemist"}	
					<Table source={itemList('alchemist')} />
				{:else if town.shops[tabSet - 1].shop_type == "Blacksmith"}
					<Table source={itemList('blacksmith')} />
				{:else if town.shops[tabSet - 1].shop_type == "General Store"}
					<Table source={itemList('general')} />
				{:else if town.shops[tabSet - 1].shop_type == "Artificer"}
					<Table source={itemList('artificer')} />
				{:else if town.shops[tabSet - 1].shop_type == "Jeweler"}
					<Table source={itemList('jeweler')} />
				{:else if town.shops[tabSet - 1].shop_type == "Illicit"}
					<Table source={itemList('illicit')} />
				{/if}
			</div>
		</div>
			
        {/if}
	</svelte:fragment>
</TabGroup>