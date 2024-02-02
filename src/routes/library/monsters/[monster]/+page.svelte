<script lang='ts'>
    import showdown from 'showdown';
    export let data;
    
    function formatMarkdown( markdownText: string ) {
        const converter = new showdown.Converter();
        return converter.makeHtml(markdownText);
    }
</script>

<div class="h-full mx-auto flex justify-center items-center">
    <div class="card py-4 px-6 variant-filled-secondary">
        <div class="grid grid-cols-2">
            <div class="space-y-1">
                <h1 class="h1">{data.monster.name}</h1>
                <h3 class="h4 italic">{data.monster.size} {data.monster.type}, <span class="italic">{data.monster.alignment}</span></h3>
                <p><span class="font-bold">Armour Class</span> {data.monster.AC}</p>
                <p><span class="font-bold">Hit Points</span> {data.monster.HP}</p>
                <p><span class="font-bold">Speed</span> {data.monster.speed}</p>
                <table class="table-auto w-42 border-collapse border border-primary-500">
                    <thead>
                        <tr>
                            <th class="border border-primary-500 px-4 py-2">DEX</th>
                            <th class="border border-primary-500 px-4 py-2">STR</th>
                            <th class="border border-primary-500 px-4 py-2">CON</th>
                            <th class="border border-primary-500 px-4 py-2">WIS</th>
                            <th class="border border-primary-500 px-4 py-2">INT</th>
                            <th class="border border-primary-500 px-4 py-2">CHA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-primary-500 px-4 py-2">{data.monster.stats['Dex']}</td>
                            <td class="border border-primary-500 px-4 py-2">{data.monster.stats['Str']}</td>
                            <td class="border border-primary-500 px-4 py-2">{data.monster.stats['Con']}</td>
                            <td class="border border-primary-500 px-4 py-2">{data.monster.stats['Wis']}</td>
                            <td class="border border-primary-500 px-4 py-2">{data.monster.stats['Int']}</td>
                            <td class="border border-primary-500 px-4 py-2">{data.monster.stats['Cha']}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="prose prose-teal prose-sm dark:prose-invert">
                    {@html formatMarkdown(data.monster.description)}
                    {@html formatMarkdown(data.monster.abilities)}
                </div>
            </div>
            <div class="space-y-1 grid">
                <div class="justify-self-end">
                    <img src={data.monster.image} alt={data.monster.name} class="w-64 h-48 object-cover object-center rounded-lg" />
                </div>
                <div class="prose prose-teal prose-sm dark:prose-invert">
                    {@html formatMarkdown(data.monster.actions)}
                    {@html formatMarkdown(data.monster.legendary)}
                </div>
            </div>
        </div>
    </div>
</div>