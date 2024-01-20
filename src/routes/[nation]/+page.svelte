<script lang='ts'>
    export let data;

    const { 
        name, 
        description, 
        overview, 
        economy, 
        religion, 
        government, 
        culture, 
        relations, 
        banner 
    } = data.nation || {};   
    
</script>

<div class="container p-24 space-y-2 z-10">
    <h1 class="h1">{name}</h1>
    <div class="grid grid-cols-3 gap-6">
        <div class="col-span-2 space-y-6">
            <hr />
            <blockquote class="blockquote">{description}</blockquote>
            <p>{overview}</p>
        </div>
        <div class="justify-self-center">
            <img src={banner} alt={name} class="w-48"/>
        </div>
        <div class="space-y-2">
            <h3 class="h3">Religion</h3>
            <hr />
            <p>{religion}</p>
        </div>
        <div class="space-y-2">
            <h3 class="h3">Economy</h3>
            <hr />
            <p>{economy}</p>
        </div>
        <div class="space-y-2">
            <h3 class="h3">Government</h3>
            <hr />
            <p>{government}</p>
        </div>
    </div>
</div>
