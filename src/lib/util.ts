import showdown from 'showdown';
import { alchemist_items, blacksmith_items, artificer_items, general_times, illicit_items, jeweler_items, tavern_items } from '$lib/index';

interface Item {
  id: number;
  name: string;
  description: string;
  price: string; 
  rarity: number;
}

export function formatMarkdown(markdownText: string) {
  const converter = new showdown.Converter();
  return converter.makeHtml(markdownText);
}

export function getStock(shopType: string, townSize: string) {
    let data: Item[] = [];
    if (shopType == "alchemist") {
        data = alchemist_items;
    } else if (shopType == "blacksmith") {
        data = blacksmith_items;
    } else if (shopType == "artificer") {
        data = artificer_items;
    } else if (shopType == "general") {
        data = general_times;
    } else if (shopType == "illicit") {
        data = illicit_items;
    } else if (shopType == "jeweler") {
        data = jeweler_items;
    } else if (shopType == "tavern") {
        data = tavern_items;
    }
    else {
        throw new Error("Invalid shop type");
    }

    let items: Item[] = [];
    if (townSize == "small") {
        items = getRandomItems(data, 1, 4);
    } else if (townSize == "medium") {
        items = [...getRandomItems(data, 1, 3), ...getRandomItems(data, 2, 2)];
    } else if (townSize == "large") {
        items = [...getRandomItems(data, 1, 4), ...getRandomItems(data, 2, 3), ...getRandomItems(data, 3, 2)];
    } else {
        throw new Error("Invalid town size");
    }

    return items;
};

function getRandomItems(data: Item[], rarity: number, count: number) {
    const items = data.filter(item => item.rarity == rarity);
    const result: Item[] = [];
    for (let i = 0; i < count; i++) {
        const index = Math.floor(Math.random() * items.length);
        result.push(items[index]);
        items.splice(index, 1); 
    }
    return result;
}