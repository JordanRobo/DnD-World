<script lang="ts">
    export let data;

</script>

<div class="h-full p-8">
	<div class="grid grid-cols-10 gap-4">
        {#each data.books as book}
        <a href={book.path}>
            <div class="card p-4 variant-filled-secondary h-96 flex justify-center items-center">
                <h2 class="h2 -rotate-90 text-nowrap">{book.name}</h2>
            </div>
        </a>
        {/each}
	</div>
</div>