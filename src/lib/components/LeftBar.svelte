<script lang="ts">
    import { page } from '$app/stores';
    import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';

</script>

<AppRail>
    <svelte:fragment slot="lead">
        <AppRailAnchor href="/" selected={$page.url.pathname === '/'}><iconify-icon icon="mdi:ansible" class="text-4xl"></iconify-icon></AppRailAnchor>
    </svelte:fragment>
    <!-- --- -->
    <AppRailAnchor href="/world" selected={$page.url.pathname.startsWith('/world')}>
        <svelte:fragment slot="lead"><iconify-icon icon="mdi:earth" class="text-3xl"></iconify-icon></svelte:fragment>
        <span>World</span>
    </AppRailAnchor>
    <AppRailAnchor href="/library" selected={$page.url.pathname.startsWith('/library')}>
        <svelte:fragment slot="lead"><iconify-icon icon="mdi:book" class="text-3xl"></iconify-icon></svelte:fragment>
        <span>Library</span>
    </AppRailAnchor>
    <!-- --- -->
    <svelte:fragment slot="trail">
        <AppRailAnchor href="/" target="_blank" title="Account"></AppRailAnchor>
    </svelte:fragment>
</AppRail>