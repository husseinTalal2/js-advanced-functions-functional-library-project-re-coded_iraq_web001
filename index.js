const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: (collection, cb) => {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let i = 0; i < newCollection.length; i++)
        cb(newCollection[i]);

      return collection;
    },

    map: (collection, cb) => {
      if (!(collection instanceof Array))
       collection = Object.values(collection)

     const array = []

     for (let i = 0; i < collection.length; i++)
       array.push(cb(collection[i]))

     return array
    },

    reduce: (c = [], cb = () => {}, acc) => {
			let collection = c.slice(0)
			if (!acc) {
				acc = collection[0]
				collection = collection.slice(1)
			}

			for (let i = 0; i < collection.length; i++) {
				acc = cb(acc, collection[i], collection)
			}
			return acc;
		},

    functions: function() {

    },


  }
})()

fi.libraryMethod()
