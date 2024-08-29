document.addEventListener('DOMContentLoaded', function() {
    const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango', 'Pineapple'];
    const searchInput = document.getElementById('searchInput');
    const itemList = document.getElementById('itemList');

    function displayItems(filteredItems) {
        itemList.innerHTML = ''; // Clear the list
        filteredItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            li.className = 'p-2 border-b border-gray-200 hover:bg-blue-50';
            itemList.appendChild(li);
        });
    }

    function filterItems(query) {
        const filteredItems = items.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        displayItems(filteredItems);
    }

    // Initial display of all items
    displayItems(items);

    // Listen for input changes
    searchInput.addEventListener('input', function() {
        filterItems(this.value);
    });
});
