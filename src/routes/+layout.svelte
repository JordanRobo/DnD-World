<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppRail, storePopup } from '@skeletonlabs/skeleton';
	import { writable } from 'svelte/store';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import LeftBar from '$lib/components/LeftBar.svelte';
	import 'iconify-icon';
	import { formatMarkdown } from '$lib/util';

	export let data;

	const campaignIndex = writable(0);

	let campaign = data.campaign;

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	function nextCampaign() {
		campaignIndex.update(n => n + 1);
	}

	function previousCampaign() {
		campaignIndex.update(n => n - 1);
	}
	
</script>

<AppShell>
	<svelte:fragment slot="header">

	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<LeftBar />
	</svelte:fragment>
	<svelte:fragment slot="sidebarRight">
		<AppRail class="w-96">
			<div class="p-4 space-y-4">
					<div class="prose prose-teal prose-sm dark:prose-invert">
						{@html formatMarkdown(campaign[$campaignIndex].info)}
					</div>
				<div class="grid grid-cols-2 space-x-2">
					<button class="btn variant-outline-primary hover:variant-filled-primary" on:click={previousCampaign}>Previous</button>
					<button class="btn variant-outline-primary hover:variant-filled-primary" on:click={nextCampaign}>Next</button>
				</div>
			</div>
		</AppRail>
	</svelte:fragment>
	<div class="container h-full p-8">
		<slot />
	</div>
</AppShell>