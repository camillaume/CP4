const AbstractManager = require("./AbstractManager");

class CollectionManager extends AbstractManager {
  static table = "collection";

  insert(collection) {
    return this.connection.query(
      `insert into ${CollectionManager.table} (name, author, img, description, user_id) values (?,?,?,?,?)`,
      [
        collection.name,
        collection.author,
        collection.img,
        collection.description,
        collection.userId,
      ]
    );
  }

  update(collection) {
    return this.connection.query(
      `update ${CollectionManager.table} set title = ? where id = ?`,
      [collection.title, collection.id]
    );
  }

  findCollection(id) {
    return this.connection.query(
      `select * from  ${CollectionManager.table} where user_id = ?`,
      [id]
    );
  }
}

module.exports = CollectionManager;
