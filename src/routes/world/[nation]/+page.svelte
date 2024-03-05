<script lang="ts">
    import { TabGroup, Tab } from '@skeletonlabs/skeleton';
    export let data;

    let nation = data.nation;
    let tabSet: number = 0;
</script>



<TabGroup>
	<Tab bind:group={tabSet} name="tab1" value={0}>{nation.name}</Tab>
	<Tab bind:group={tabSet} name="tab2" value={1}>Towns</Tab>
	<Tab bind:group={tabSet} name="tab3" value={2}>(label 3)</Tab>
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
            <div class="grid grid-cols-5 gap-4">
                <div class="col-span-5">
                    <h1 class="h1">{nation.name}</h1>
                </div>
                <div class="col-span-4">
                    <p class="blockquote">{nation.description}</p>
                </div>
                <div class="col-span-3">
                    <p>{nation.overview}</p>
                </div>
            </div>
		{:else if tabSet === 1}
            {#each nation.towns as town}
            <ul>
                <li>
                    <a href="{`/world/${nation.url}/${town.url}`}">{town.name}</a>
                </li>
            </ul> 
            {/each}
		{:else if tabSet === 2}
			(tab panel 3 contents)
		{/if}
	</svelte:fragment>
</TabGroup>
			


