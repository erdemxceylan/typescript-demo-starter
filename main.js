// Product - Category
// Servisler
// CRUD operasyonları Create Read Update Delete
// GetAll, GetById, Add, Delete, Update
// Bütün servisleri ve bütün aksiyonlarını main.ts'de test et.
import { CategoryService } from "./services/category.js";
import { ProductService } from "./services/product.js";
var categories = new CategoryService();
categories.add({ id: 1, name: "teknoloji", desc: "elektronik eşyalar" });
categories.add({ id: 2, name: "mutfak", desc: "mutfak eşyaları" });
console.log(categories.getAll());
console.log("----------");
categories.update(1, { desc: "teknolojik ürünler" });
console.log(categories.getAll());
console.log("----------");
var products = new ProductService();
var teknoloji = categories.getById(1);
var mutfak = categories.getById(2);
products.add({ id: 1, name: "laptop", price: 100, category: teknoloji });
products.add({ id: 2, name: "fırın", price: 150, category: mutfak });
products.add({ id: 3, name: "televizyon", price: 200, category: teknoloji });
products.add({ id: 4, name: "buz dolabı", price: 300, category: mutfak });
console.log(products.getAll());
console.log("----------");
products.update(2, { name: "lüks fırın", price: 800 });
console.log(products.getAll());
console.log("----------");
products["delete"](3);
console.log(products.getAll());
