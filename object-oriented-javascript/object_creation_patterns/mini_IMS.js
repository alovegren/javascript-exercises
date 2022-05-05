// item creator
// items manager
// reports manager

const ItemCreator = {
  getSKU(name, category) {
    name = name.split(' ').join('');
    return (name.slice(0, 3) + category.slice(0, 2)).toUpperCase();
  },

  isValid(itemName, category, quantity) {
    return itemName.split(' ').join('').length >= 5
    && !(category.split('').includes(' '))
    && category.length >= 5
    && quantity !== undefined;
  },

  init(itemName, category, quantity) {
    this.itemName     = itemName;
    this.category     = category;
    this.quantity     = quantity;
    this.SKU          = this.getSKU(itemName, category);
    this.notValid     = !this.isValid(itemName, category, quantity);
    return this;
  }
}

let ItemManager = {
  items: [],
  create(itemName, category, quantity) {
    let item = Object.create(ItemCreator).init(itemName, category, quantity);
    if (item.notValid) {
      return false;
    } else {
      this.items.push(item);
    }
  },

  getItem(SKU) {
    return this.items.filter(item => item.SKU === SKU)[0];
  },

  update(SKU, updates) {
    let item = this.getItem(SKU);

    Object.keys(updates).forEach(itemProperty => {
      item[itemProperty] = updates[itemProperty];
    }); // Good application for Object.assign
  },

  delete(SKU) {
    this.items = this.items.filter(item => {
      return item.SKU !== SKU;
    }); 
  },

  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },

  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  },
};

let ReportManager = {
  init(itemManager) {
    this.items = itemManager;
  },
  
  createReporter(SKU) {
    let item = this.items.getItem(SKU);

    return {
      itemInfo() {
        Object.keys(item).forEach(itemProperty => {
          console.log(`${itemProperty}: ${item[itemProperty]}`);
        });
      },
    };
  },

  reportInStock() {
    let inStock = this.items.inStock();
    console.log(inStock.map(item => item.itemName).join(', '));
  },
}

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

console.log(ItemManager.items);
// // returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
console.log(ItemManager.inStock());
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// logs football,kitchen pot

console.log(ItemManager.itemsInCategory('sports'));
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
console.log(ItemManager.items);
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10