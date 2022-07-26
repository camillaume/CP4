const models = require("../models");

class IssueController {
  static browse = (req, res) => {
    models.issue
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.issue
      .findAllIssues(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.status(404).send("Oups pour toi");
        } else {
          res.send(rows);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static readone = (req, res) => {
    const number = parseInt(req.body.number, 10);
    const collectionId = parseInt(req.body.collectionId, 10);
    const { userId } = req.body;
    models.issue
      .findOne(number, collectionId, userId)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.status(204).send("No");
        } else {
          res.send(rows);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const issue = req.body;

    // TODO validations (length, format...)

    issue.id = parseInt(req.params.id, 10);

    models.issue
      .update(issue)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const issue = req.body;

    // TODO validations (length, format...)

    models.issue
      .insert(issue)
      .then(([result]) => {
        res.status(201).send({ ...issue, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.issue
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = IssueController;
