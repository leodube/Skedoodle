const mongoose = require("mongoose");
const Verb = mongoose.model("verbs");

module.exports = (app) => {
  app.get(`/api/verb`, async (req, res) => {
    let verbs = await Verb.find();
    return res.status(200).send(verbs);
  });

  app.get(`/api/verb/random`, async (req, res) => {
    let verb = await Verb.aggregate([{$sample: {size:1}}]);
    return res.status(200).send(verb);
  })

  app.post(`/api/verb`, async (req, res) => {
    let verb = await Verb.create(req.body);
    return res.status(201).send({
      error: false,
      verb,
    });
  });

  app.put(`/api/verb/:id`, async (req, res) => {
    const { id } = req.params;

    let verb = await Verb.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      verb,
    });
  });

  app.delete(`/api/verb/:id`, async (req, res) => {
    const { id } = req.params;

    let verb = await Verb.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      verb,
    });
  });
};
