// src/utilities/filterUtils.js
export function getFilteredItems(items, searchTerm) {
  return items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
}
