<script lang="ts">
    
    let desert_encounter: string[] = [
        "A violent sandstorm sweeps across your path, reducing visibility to near-zero.",
        "An oasis looms in the distance, but it's guarded by a nest of deadly, venomous vipers.",
        "A sandworm bursts from the ground, its gaping maw ready to swallow you whole.",
        "A group of bandits rise up out of the sand and ambush you, demanding you hand over your supplies.",
        "A solitary merchant, his camel laden with exotic goods, crosses your path offering rare desert herbs that can heal or poison.",
        "A group of nomads offers you shelter from the sun and a meal of roasted lizard."
    ];

    let encounterMessage: string = "";

    function randomEncounter() {
        let index = Math.floor(Math.random() * desert_encounter.length);
        encounterMessage = desert_encounter[index];
    }

</script>

<div class="space-y-4">
    <h2 class="h2">The Desert Journey to Artimenia</h2>
    <p class="blockquote">As you pass through the mouth of the tunnel, you're greeted by the harsh expanse of the Artimenian desert. The unforgiving sun beats down on you, its rays reflecting off the endless waves of sand. Your lips begin to crack and your skins feel parched. However, there's no turning back. Your footsteps mark a winding path through this beautiful yet brutal wilderness.</p>
    <img src="https://via.placeholder.com/1280x720" alt="placeholder" class="w-full" />
    <div class="card variant-outline-secondary p-4 space-y-4">
        <p class="blockquote">After walking for what seems days you decide to set up camp and wait out the intense heat of the day. You begin to survey the barren, scorched wasteland around you just as...</p>
        <p class="blockquote">{encounterMessage}</p>
        <button class="btn variant-outline-warning hover:variant-filled-warning" on:click={randomEncounter}>Random Encounter</button>    
    </div>
</div>