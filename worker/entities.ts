/**
 * This file is reserved for creating data entities that interact with the Durable Object storage.
 * The demo entities have been removed as they are not used in this application.
 * You can add new IndexedEntity classes here as your application grows.
 */
import { IndexedEntity } from "./core-utils";
import type { Product } from "@shared/types";
// Example of a new entity if needed in the future.
// export class ProductEntity extends IndexedEntity<Product> {
//   static readonly entityName = "product";
//   static readonly indexName = "products";
//   static readonly initialState: Product = { 
//     id: "", 
//     name: "", 
//     description: "", 
//     image: "", 
//     categories: [], 
//     cost: 1, 
//     difficulty: 0 
//   };
// }