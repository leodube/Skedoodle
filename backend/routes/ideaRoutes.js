const mongoose = require("mongoose");
const Creature = mongoose.model("creatures");
const Verb = mongoose.model("verbs");

module.exports = (app) => {
  app.get(`/api/idea/new`, async (req, res) => {
    let idea = {
      text: []
    };
    let valid = false;

    do {
      let creature = await Creature.aggregate([{ $sample: { size: 1 } }]);
      let verb = await Verb.aggregate([{ $sample: { size: 1 } }]);

      if (creature[0].verbExemptions.includes(verb[0].name)) {
        continue;
      } else {
        valid = true;
        idea.text.push(creature[0].precedeWith, creature[0].name);
      }

      switch(verb[0].followWith) {
        case "none":
          idea.text.push(verb[0].name);
          break;
        case "creature":
          let creature2 = await Creature.aggregate([{ $sample: { size: 1 } }]);
          idea.text.push(verb[0].name, creature2[0].precedeWith, creature2[0].name);
          break;
        case "item":
          let item = verb[0].items[Math.floor(Math.random()*verb[0].items.length)];
          idea.text.push(verb[0].name, item);
          break;
      }
    } while (!valid);

    return res.status(200).send(idea);
  });
};
