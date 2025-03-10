function filterItems() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const items = document.querySelectorAll('.item');

    const selectedCategories = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    items.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        if (selectedCategories.length === 0 || selectedCategories.includes(itemCategory))
            item.style.display = 'block';
        else 
            item.style.display = 'none';
    });
}

function clearFilters() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(x => x.checked = false );

    filterItems();
}