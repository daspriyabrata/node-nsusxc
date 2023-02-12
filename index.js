class BurritoRestaurant {
  constructor(name, location, menu) {
    this.name = name;
    this.location = location;
    this.menu = menu;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getLocation() {
    return this.location;
  }

  setLocation(location) {
    this.location = location;
  }

  getMenu() {
    return this.menu;
  }

  addToMenu(item) {
    this.menu.push(item);
  }

  findItemInMenu(itemName) {
    return this.menu.find(
      (item) => item.toLowerCase() === itemName.toLowerCase()
    );
  }

  updateItemInMenu(oldItemName, newItem) {
    const oldItemIndex = this.menu.findIndex(
      (item) => item.toLowerCase() === oldItemName.toLowerCase()
    );
    if (oldItemIndex !== -1) {
      this.menu[oldItemIndex] = newItem;
    }
  }

  removeItemFromMenu(itemName) {
    this.menu = this.menu.filter(
      (item) => item.toLowerCase() !== itemName.toLowerCase()
    );
  }

  calculateAverageItemPrice() {
    let totalPrice = 0;
    this.menu.forEach((item) => {
      const itemPrice = item.price || 0;
      totalPrice += itemPrice;
    });
    return totalPrice / this.menu.length;
  }
}

// Tests
// TODO
// tap.test(async (t) => {
//   console.log('Hello');
// });
export default BurritoRestaurant;
