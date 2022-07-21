const AbstractManager = require("./AbstractManager");

class IssueManager extends AbstractManager {
  static table = "issue";

  insert(issue) {
    return this.connection.query(
      `insert into ${IssueManager.table} (number, title, author, year, img, description, collection_id, state_id) values (?,?,?,?,?,?,?,?)`,
      [
        issue.number,
        issue.title,
        issue.author,
        issue.year,
        issue.img,
        issue.description,
        issue.collectionId,
        issue.state,
      ]
    );
  }

  update(issue) {
    return this.connection.query(
      `update ${IssueManager.table} set title = ? where id = ?`,
      [issue.title, issue.id]
    );
  }

  findAllIssues(id) {
    return this.connection.query(
      `select i.*, s.name as stateName from  ${IssueManager.table} i LEFT JOIN state s on i.state_id = s.id where collection_id = ?`,
      [id]
    );
  }

  findOne(number, collectionId, userId) {
    return this.connection.query(
      `select i.*, s.name as stateName from  ${IssueManager.table} i LEFT JOIN collection c ON i.collection_id = c.id LEFT JOIN user u ON u.id=c.user_id LEFT JOIN state s ON i.state_id = s.id where i.number = ? AND i.collection_id= ? AND u.id=?`,
      [number, collectionId, userId]
    );
  }
}

module.exports = IssueManager;
