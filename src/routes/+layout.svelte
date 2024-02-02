<script lang="ts">
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import LeftBar from '$lib/components/LeftBar.svelte';
	import RightBar from '$lib/components/RightBar.svelte';
	import 'iconify-icon'

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	

</script>

<AppShell>
	<svelte:fragment slot="header">

	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<LeftBar />
	</svelte:fragment>
	<svelte:fragment slot="sidebarRight">
		<RightBar />
	</svelte:fragment>
	<div class="bg-homepattern bg-cover bg-center h-screen">
		<div class="container backdrop-brightness-50 h-full">
			<slot />
		</div>
	</div>
</AppShell>