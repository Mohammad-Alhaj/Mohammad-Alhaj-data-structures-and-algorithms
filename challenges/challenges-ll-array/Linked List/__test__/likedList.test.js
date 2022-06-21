"use strict";
const linkedList = require("../Implementation-linked-list/linkenode");

describe("linkedLis", () => {
  test("empty linked list", () => {
    let element = new linkedList();

    expect(element.head).toBeNull();
  });

  test("insert to linked list", () => {
    let element = new linkedList();
    element.insert(2);
    expect(element.head.value).toEqual(2);
  });
  test("point to the first node in the linked list", () => {
    let element = new linkedList();
    element.insert(2);
    element.insert(5);
    element.insert(8);
    element.insert(10);
    expect(element.head.value).toEqual(2);
  });
  test(" insert multiple nodes into the linked list", () => {
    let element = new linkedList();
    element.insert(2);
    element.insert(5);
    expect(element.length).toEqual(2);
  });
  test("return true when finding a value within the linked list that exists", () => {
    let element = new linkedList();
    element.insert(2);
    element.insert(5);

    expect(element.includes(2)).toEqual(true);
  });

  test("return false when searching for a value in the linked list that does not exist", () => {
    let element = new linkedList();
    element.insert(2);
    element.insert(5);

    expect(element.includes(10)).toEqual(false);
  });

  test("return a collection of all the values that exist in the linked list", () => {
    let element = new linkedList();
    element.insert(2);
    element.insert(5),
    element.insert(7); 
    element.insert(9);
    

    expect(element.toString()).toEqual("{2} -> {5} -> {7} -> {9} -> null");
  });
});
