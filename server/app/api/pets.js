const db = require('../config/database');

let api = {};

const INSERT_PET = 'INSERT INTO pet(name, race, age, sex) VALUES($1, $2, $3, $4)';
const GET_PETS = 'SELECT * FROM pet';
const EDIT_PET = 'UPDATE pet SET name = $1, race = $2, age = $3, sex = $4 WHERE id = $5';
const DELETE_PET = 'DELETE FROM pet WHERE id = $1';

api.store = (req, res) => {
  const name = req.body.name;
	const race = req.body.race;
	const age = req.body.race;
	const sex = req.body.sex;

  const client = db.getClient();

  client.connect()
  client.query(INSERT_PET, [name, race, age, sex], (error, pet) => {
    if (error) {
      res.json(error);
      return next(error);
    } else res.status(200).json('Pet added');

    client.end();
  });
}

api.index = (req, res) => {
  const client = db.getClient();

  client.connect()
  client.query(GET_PETS, (error, pets) => {
    if (error) {
      res.json(error);
      return next(error);
    } else res.status(200).json(pets.rows);

    client.end();
  });
}

api.modify = (req, res) => {
	const name = req.body.name;
	const race = req.body.race;
	const age = req.body.race;
	const sex = req.body.sex;

  const client = db.getClient();

  client.connect();

	client.query(EDIT_PET, [name, race, age, sex], (error, pet) => {
		if (error) {
			res.json(error);
			return next(error);
		} else res.status(200).json("Pet updated");
	});

	client.end();
}

api.exclude = (req, res) => {
	const id = req.param('id');

	const client = getClient();

	client.query(DELETE_PET, [id], (error, pet) => {
		if (error) {
			res.json(error);
			return next(error);
		} else res.status(200).json('Pet deleted');
	});
}

module.exports = api;
