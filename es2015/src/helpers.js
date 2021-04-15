function choice(items) {
    const randomElement = Math.floor(Math.random() * items.length);
    return items[randomElement]
}

function remove(items, item) {
    const idx = items.indexOf(item)
    if (idx) {
        items.splice(idx, 1);
        return items
    } else {
            return undefined
    }
}


export { choice, remove };