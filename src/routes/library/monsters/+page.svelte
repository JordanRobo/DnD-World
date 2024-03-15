<script lang='ts'>
    export let data;
    import { goto } from '$app/navigation';
    import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
    import type { TableSource } from '@skeletonlabs/skeleton';

    let searchTerm = ""; // Add this line

    function setTableSource(): TableSource {
        let filteredMonsters = data.monsters.filter(monster => monster.name.toLowerCase().includes(searchTerm.toLowerCase()));
        return {
            head: [ 'Name', 'CR', 'Type', 'Size', 'Alignment' ],
            body: tableMapperValues(filteredMonsters, [ 'name', 'CR', 'type', 'size', 'alignment' ]),
            meta: tableMapperValues(filteredMonsters, [ 'url' ]),
        };
    }

    function gotoMonster(event: any){
        goto('/library/monsters/' + event.detail);
    }

    function submitSearch() {
        tableSimple = setTableSource();
    }

    // If sourceData updates, set the new TableSource values
    $: tableSimple = data.monsters ? setTableSource() : undefined;
		
</script>

<div class="h-full p-8">
    <div class="card">
        <div class="grid grid-cols-3 px-2 py-2 gap-2">
            <div>
                <input class="input" bind:value={searchTerm} placeholder="Search monsters" />
            </div>
            <div>
                <button class="btn variant-outline-primary hover:variant-filled-primary" on:click={submitSearch}>Search</button> 
            </div>
            <div></div>
        </div>
        <Table source={tableSimple} interactive={true} on:selected={gotoMonster} />
    </div>
</div>