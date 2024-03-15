<script lang="ts">
    import { TabGroup, Tab, Accordion, AccordionItem } from '@skeletonlabs/skeleton';
    import { goto } from '$app/navigation';
    export let data;

    let nation = data.nation;
    let tabSet: number = 0;
</script>

    <h1 class="h1">{nation.name}</h1>

<TabGroup>
	<Tab bind:group={tabSet} name="tab1" value={0}>Overview</Tab>
	<Tab bind:group={tabSet} name="tab2" value={1}>Towns</Tab>
	<Tab bind:group={tabSet} name="tab3" value={2}>(label 3)</Tab>
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
        <div>
            <div class="grid grid-cols-5 gap-4">
                <div class="col-span-2 row-span-2">
                    <img src={nation.images[0]} alt={nation.name} class="h-full object-cover justify-self-center" />
                </div>
                <div class="col-span-3">
                    <p class="blockquote">{nation.description}</p>
                </div>
                <div class="col-span-3">
                    <p>{nation.overview}</p>
                </div>
                <div class="col-start-2 col-span-3">
                    <Accordion autocollapse>
                        <AccordionItem open class="card variant-glass-secondary">
                            <svelte:fragment slot="summary"><h4 class="h4">{nation.section_1[0]}</h4></svelte:fragment>
                            <svelte:fragment slot="content">{nation.section_1[1]}</svelte:fragment>
                        </AccordionItem>
                        <AccordionItem class="card variant-glass-secondary">
                            <svelte:fragment slot="summary"><h4 class="h4">{nation.section_2[0]}</h4></svelte:fragment>
                            <svelte:fragment slot="content">{nation.section_2[1]}</svelte:fragment>
                        </AccordionItem>
                        <AccordionItem class="card variant-glass-secondary">
                            <svelte:fragment slot="summary"><h4 class="h4">{nation.section_3[0]}</h4></svelte:fragment>
                            <svelte:fragment slot="content">{nation.section_3[1]}</svelte:fragment>
                        </AccordionItem>
                        <AccordionItem class="card variant-glass-secondary">
                            <svelte:fragment slot="summary"><h4 class="h4">{nation.section_4[0]}</h4></svelte:fragment>
                            <svelte:fragment slot="content">{nation.section_4[1]}</svelte:fragment>
                        </AccordionItem>
                        <AccordionItem class="card variant-glass-secondary">
                            <svelte:fragment slot="summary"><h4 class="h4">{nation.section_5[0]}</h4></svelte:fragment>
                            <svelte:fragment slot="content">{nation.section_5[1]}</svelte:fragment>
                        </AccordionItem>
                        <AccordionItem class="card variant-glass-secondary">
                            <svelte:fragment slot="summary"><h4 class="h4">{nation.section_6[0]}</h4></svelte:fragment>
                            <svelte:fragment slot="content">{nation.section_6[1]}</svelte:fragment>
                        </AccordionItem>
                    </Accordion> 
                </div>
            </div>
        </div>
		{:else if tabSet === 1}
        <div class="grid grid-cols-4 gap-4">
            {#each nation.towns as town}
            <div class="card variant-ghost-secondary">
                <header class="card-header"><img src={town.images[0]} alt={town.name} class="h-36 object-cover"></header>
                <section class="p-4 text-center"><h3 class="h3">{town.name}</h3></section>
                <footer class="card-footer"><button class="btn variant-ghost-primary hover:variant-filled-primary w-full" on:click={() => goto(`/world/${nation.url}/${town.url}`)}>Visit Town</button></footer>
            </div>
            {/each}
        </div>
		{:else if tabSet === 2}
        <div>
            (tab panel 3 contents)
		</div>
		{/if}
	</svelte:fragment>
</TabGroup>