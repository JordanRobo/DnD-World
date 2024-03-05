<script lang="ts">
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });		

</script>

<div class="h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h3 class="h3">Welcome to</h3>
		<h1 class="h1">Afereon</h1>
	</div>
</div>