const items = document.querySelectorAll("#categories > .item");
console.log("Number of categories:", items.length);

for (let item of items) {
  const title = item.firstElementChild;
  const subItems = item.lastElementChild.children;
  console.log("Category:", title.textContent);
  console.log("Elements:", subItems.length)
}
