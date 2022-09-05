export const getCartItemIds = () => {
    const savedItemIds = localStorage.getItem('saved_items')
    ? JSON.parse(localStorage.getItem('saved_items'))
    : [];

    return savedItemIds;
};

export const saveItemIds = (itemIdArr) => {
    if (itemIdArr.length) {
        localStorage.setItem('saved_items', JSON.stringify(itemIdArr));
    } else {
        localStorage.removeItem('saved_items');
    }
};