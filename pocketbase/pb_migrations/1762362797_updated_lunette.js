/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_340737475")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1819170229",
    "max": 0,
    "min": 0,
    "name": "nom",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor3949269562",
    "maxSize": 0,
    "name": "code_svg",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number1396272600",
    "max": null,
    "min": null,
    "name": "largeur_pont",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number4105839681",
    "max": null,
    "min": null,
    "name": "taille_verre",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2908682255",
    "hidden": false,
    "id": "relation1223666153",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "couleur_branche",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2908682255",
    "hidden": false,
    "id": "relation345886070",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "couleur_monture",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation488399795",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "utilisateur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_340737475")

  // remove field
  collection.fields.removeById("text1819170229")

  // remove field
  collection.fields.removeById("editor3949269562")

  // remove field
  collection.fields.removeById("number1396272600")

  // remove field
  collection.fields.removeById("number4105839681")

  // remove field
  collection.fields.removeById("relation1223666153")

  // remove field
  collection.fields.removeById("relation345886070")

  // remove field
  collection.fields.removeById("relation488399795")

  return app.save(collection)
})
