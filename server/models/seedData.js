const { db, Pug, Coffee, Child, Parent } = require('./index');


async function addData () {
  // ADD PUG DATA
  // ------------------------------------------------------------------
  const penny = await Pug.create({
    name: 'Penny',
    age: 2,
    biography: 'Penny is a lovely pug! She is very sweet.'
  })

  const dorothy = await Pug.create({
    name: 'Dorothy',
    age: 9,
    biography: 'Dorothy is an old lady dog. She likes to sleep all day long'
  })
  const scott = await Pug.create({
    name: 'Scott',
    biography: 'Is your name Scott? Scott is a funny puppy.'
  })

  // ADD COFFEE DATA
  // ------------------------------------------------------------------
  const puppacino = await Coffee.create({
    name: 'Puppacino',
    ingredients: ['espresso', 'frothed milk', 'love'],
  })
  const frappe = await Coffee.create({
    name: 'Frappe alla Pug',
    ingredients: ['espresso', 'ice', 'sugar']
  })

  // penny.setFavoriteCoffee(puppacino)
  // dorothy.setFavoriteCoffee(frappe)
  // scott.setFavoriteCoffee(puppacino);

  // penny.addFriend(dorothy);
  // scott.addFriend(penny);
  // scott.addFriend(dorothy);
}

// addData();

module.exports = { db, Pug, Coffee, Child, Parent }




