import { describe, expect, test } from '@jest/globals';
import BurritoRestaurant from './index';

describe('BurritoRestaurant', () => {
  const burrito = new BurritoRestaurant("Vinny's", 'NY', [
    { item: 'spicy', price: 10 },
    { item: 'sweet', price: 12 },
  ]);
  const BurritoRest = new BurritoRestaurant("Vinny's", 'NY', [
    'spicy',
    'sweet',
  ]);
  test('Get Details', () => {
    // const name = burrito.getName();
    expect(BurritoRest.getName()).toBe("Vinny's");
    expect(BurritoRest.getLocation()).toBe('NY');
    expect(BurritoRest.getMenu()).toContain('spicy');
    expect(BurritoRest.getMenu()).toContain('sweet');
  });
  test('find Item in menu', () => {
    const findItem = BurritoRest.findItemInMenu('Sweet');
    expect(findItem).toBe('sweet');
  });
  test('update Item in menu', () => {
    BurritoRest.updateItemInMenu('sweet', 'garlic');
    expect(BurritoRest.findItemInMenu('garlic')).toBe('garlic');
    expect(BurritoRest.findItemInMenu('sweet')).toBeUndefined();
  });
  test('add Item in menu', () => {
    BurritoRest.addToMenu('pickle');
    expect(BurritoRest.findItemInMenu('pickle')).toBe('pickle');
  });
  test('find avg in menu', () => {
    expect(burrito.calculateAverageItemPrice()).toBeCloseTo(11);
  });
  test('update details', () => {
    BurritoRest.setLocation('DEL');
    BurritoRest.setName("Gusto's");
    expect(BurritoRest.getLocation()).toBe('DEL');
    expect(BurritoRest.getName()).toBe("Gusto's");
  });
});
