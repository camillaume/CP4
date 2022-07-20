const AbstractManager = require("./AbstractManager");

class StateManager extends AbstractManager {
  static table = "state";

  insert(item) {
    return this.connection.query(
      `insert into ${StateManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${StateManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = StateManager;
