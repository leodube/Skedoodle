const mongoose = require("mongoose");
const Creature = mongoose.model("creatures");

module.exports = (app) => {
  app.get(`/api/creature`, async (req, res) => {
    let creatures = await Creature.find();
    return res.status(200).send(creatures);
  });

  app.post(`/api/creature`, async (req, res) => {
    let creature = await Creature.create(req.body);
    return res.status(201).send({
      error: false,
      creature,
    });
  });

  app.put(`/api/creature/:id`, async (req, res) => {
    const { id } = req.params;

    let creature = await Creature.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      creature,
    });
  });

  app.delete(`/api/creature/:id`, async (req, res) => {
    const { id } = req.params;

    let creature = await Creature.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      creature,
    });
  });
};
