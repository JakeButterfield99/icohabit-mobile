import { List, ListEntry, ListItem } from "../../types";

export const AddItemToList = (
    list: List, item: ListItem
) => {
    let newList: List = list;

    if (!newList.entries)
        newList.entries = {};

    // We already have that entry
    if (newList.entries.hasOwnProperty(item.id)) {
        const entry = newList.entries[item.id];
        entry.quantity = entry.quantity + 1;
        newList.entries[item.id] = entry;
    }
    // new entry
    else {
        const entry: ListEntry = {
            item_id: item.id,
            list_id: newList.id,
            quantity: 1,
            checked: false,
            created_at: new Date().toISOString(),
            item: item,
        }
        newList.entries[item.id] = entry;
    }

    return newList;
}