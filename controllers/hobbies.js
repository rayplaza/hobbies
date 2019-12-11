var Hobby = require('../models/hobby');

module.exports = {
  index,
  show,
  new: newHobby,
  create,
  delete: deleteHobby,
  edit,
  update
};

function update(req, res) {
  Hobby.update(req.params.id, req.body);
  res.redirect(`/hobbies`);
}

function edit(req, res) {
  const hobby = Hobby.getOne(req.params.id)
  res.render('/hobbies', {
  hobby,
  idx: req.params.id
  });
}

function deleteHobby(req, res) {
  Hobby.deleteOne(req.params.id);
  res.redirect('/hobbies');
}

function create(req, res) {
  req.body.done = false;
  Hobby.create( req.body);
  res.redirect('/hobbies')
}

function newHobby(req, res) {
  res.render('hobbies/new');
}

function show(req, res) {
  console.log(req.params.id);
  res.render('hobbies/show', {
    hobby: Hobby.getOne(req.params.id),
    hobbyNum: parseInt(req.params.id) + 1
  });
}

function index(req, res) {
  res.render('hobbies/index', {
    hobbies: Hobby.getAll(),
    time: req.time
  });
}
