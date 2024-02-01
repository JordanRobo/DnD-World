<script lang='ts'>
    import showdown from 'showdown';
    export let data;

    function formatMarkdown( markdownText: string ) {
        const converter = new showdown.Converter();
        return converter.makeHtml(markdownText);
    }

    console.log(data);
</script>

<div class="container h-full mx-auto flex justify-center items-center">
   {#each data.monsters as monster}
    <div class="card p-4 variant-glass-surface backdrop-brightness-50 space-y-2">
        <h1 class="h1">{monster.name}</h1>
        <h3 class="h3 italic">{monster.type}</h3>
        <div class="grid grid-cols-2">
            <div>
                <table class="table-auto w-36">
                    <thead>
                        <tr>
                            <th class="px-4 py-2">DEX</th>
                            <th class="px-4 py-2">STR</th>
                            <th class="px-4 py-2">CON</th>
                            <th class="px-4 py-2">WIS</th>
                            <th class="px-4 py-2">INT</th>
                            <th class="px-4 py-2">CHA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border px-4 py-2">{monster.stats['Dex']}</td>
                            <td class="border px-4 py-2">{monster.stats['Str']}</td>
                            <td class="border px-4 py-2">{monster.stats['Con']}</td>
                            <td class="border px-4 py-2">{monster.stats['Wis']}</td>
                            <td class="border px-4 py-2">{monster.stats['Int']}</td>
                            <td class="border px-4 py-2">{monster.stats['Cha']}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="prose prose-neutral prose-sm dark:prose-invert">
                    {@html formatMarkdown(monster.description)}
                    {@html formatMarkdown(monster.abilities)}
                </div>
            </div>
            <div>
                <div class="prose prose-neutral prose-sm dark:prose-invert">
                    {@html formatMarkdown(monster.actions)}
                    {@html formatMarkdown(monster.legendary)}
                </div>
            </div>
        </div>
    </div>
    {/each}
</div>