<script lang="ts">
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import 'iconify-icon'

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

</script>

<AppShell>
	<svelte:fragment slot="header"></svelte:fragment>
	<slot />
</AppShell>