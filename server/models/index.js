const db = require('./database');
const Pug = require('./pug.model')
const Coffee = require('./coffee.model')
const Child = require('./child.model');
const Parent = require('./parent.model');


// MODEL ASSOCIATIONS
// Pug.belongsTo(Coffee, {as: 'favoriteCoffee'})
// Pug.belongsToMany(Pug, {as: 'friends', through: 'pugFriends' })


Parent.belongsToMany(Child, {through: 'Parent_Child'});
console.log(Object.keys(Parent.prototype));

module.exports = { db, Pug, Coffee, Child, Parent }


Parent.belongsToMany(Child, { through: 'Parent_Child', foreignKey: 'sourceFK', otherKey: 'targetFK'})
