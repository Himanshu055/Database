/**
 * QuestionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: function (req, res) {
        let data;
        data = { name: req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1) }
        Category.create(data).fetch().exec(function (err, category) {
          if (err) return (err);
          return res.json(category);
        })
    },

    show: function (req, res) {
        Category.find().exec(function (err, category) {
          return res.json(category);
        });
      },
      edit: function (req, res) {
        let query;
        let data;
        query = { "id": req.param('categoryId') }
        data = { name: req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1) }
        Category.update(query,data).fetch().exec(function (err, category) {
          categoryName = data.name;
          return res.json(category)
        })
      },

      delete: function (req, res) {
        let query;
        query = { "id": req.param('categoryId') }
        Category.destroy(query).fetch().exec(function (err, category) {
          if (err) return(err);
          return res.json(category)
        })
      },

     

};

