const hobbies = [];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function create(hobby) {
  hobbies.push(hobby);
}

function getOne(id) {
  return hobbies[id];
}

function getAll() {
  return hobbies;
}

function deleteOne(id) {
  hobbies.splice(id, 1);
}

function update(id, hobby) {
  hobbies.splice(id, 1, hobby);
}