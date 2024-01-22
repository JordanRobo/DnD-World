<script lang='ts'>
    export let data;
    console.log(data);
</script>

<div class="container p-4 md:p-20 space-y-2 m-auto">
    <h1 class="h1">{data.nation.name}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
        <div class="lg:col-span-2 space-y-6">
            <hr />
            <blockquote class="blockquote">{data.nation.description}</blockquote>
            <p>{data.nation.overview}</p>
        </div>
        <div class="justify-self-center">
            <img src={data.nation.banner} alt={data.nation.name} class="w-48"/>
        </div>
        <div class="card variant-ghost-secondary p-4 space-y-2">
            <h3 class="h3">{data.nation.section_1[0]}</h3>
            <hr />
            <p>{data.nation.section_1[1]}</p>
        </div>
        <div class="card variant-ghost-secondary p-4 space-y-2">
            <h3 class="h3">{data.nation.section_2[0]}</h3>
            <hr />
            <p>{data.nation.section_2[1]}</p>
        </div>
        <div class="card variant-ghost-secondary p-4 space-y-2">
            <h3 class="h3">{data.nation.section_3[0]}</h3>
            <hr />
            <p>{data.nation.section_3[1]}</p>
        </div>
        <div class="card variant-ghost-secondary p-4 space-y-2">
            <h3 class="h3">{data.nation.section_4[0]}</h3>
            <hr />
            <p>{data.nation.section_4[1]}</p>
        </div>
        <div class="card variant-ghost-secondary p-4 space-y-2">
            <h3 class="h3">{data.nation.section_5[0]}</h3>
            <hr />
            <p>{data.nation.section_5[1]}</p>
        </div>
        <div class="card variant-ghost-secondary p-4 space-y-2">
            <h3 class="h3">{data.nation.section_6[0]}</h3>
            <hr />
            <p>{data.nation.section_6[1]}</p>
        </div>
    </div>
    <hr />
    <div class="pt-4">
        <nav class="list-nav">
            <h2 class="h2">Towns & Cities</h2>
            <ul class="pt-4">
                {#each data.nation.towns as town}
                    <li>
                        <a href="/">
                            <span class="badge bg-primary-500"><iconify-icon icon="mdi:home"></iconify-icon></span>
                            <span class="flex-auto">{town.name}</span>
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>
        
    </div>
</div>
