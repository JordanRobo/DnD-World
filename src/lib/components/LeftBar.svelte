<script lang="ts">
import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';

let currentTile: number = 0;
</script>

<AppRail>
    <svelte:fragment slot="lead">
        <AppRailAnchor href="/" ><iconify-icon icon="mdi:ansible" class="text-4xl"></iconify-icon></AppRailAnchor>
    </svelte:fragment>
    <!-- --- -->
    <AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
        <svelte:fragment slot="lead"><iconify-icon icon="mdi:earth" class="text-3xl"></iconify-icon></svelte:fragment>
        <span>World</span>
    </AppRailTile>
    <AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
        <svelte:fragment slot="lead"><iconify-icon icon="mdi:sword-cross" class="text-3xl"></iconify-icon></svelte:fragment>
        <span>Campaigns</span>
    </AppRailTile>
    <AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
        <svelte:fragment slot="lead"><iconify-icon icon="mdi:book" class="text-3xl"></iconify-icon></svelte:fragment>
        <span>Library</span>
    </AppRailTile>
    <!-- --- -->
    <svelte:fragment slot="trail">
        <AppRailAnchor href="/" target="_blank" title="Account">(icon)</AppRailAnchor>
    </svelte:fragment>
</AppRail>