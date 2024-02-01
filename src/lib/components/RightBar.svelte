<script lang="ts">
    import { AppRail } from "@skeletonlabs/skeleton";
    import { components } from "$lib/campaign";

    let currentComponentIndex = 0;

    function nextComponent() {
        currentComponentIndex = (currentComponentIndex + 1) % components.length;
    }

    function previousComponent() {
        currentComponentIndex = (currentComponentIndex - 1) % components.length;
    }
</script>

<AppRail class="w-96">
    <div class="p-4 space-y-4">
        <svelte:component this={components[currentComponentIndex]} />
        <div class="grid grid-cols-2 space-x-2">
            <button class="btn variant-outline-primary hover:variant-filled-primary" on:click={previousComponent}>Previous</button>
            <button class="btn variant-outline-primary hover:variant-filled-primary" on:click={nextComponent}>Next</button>
        </div>
    </div>
</AppRail>