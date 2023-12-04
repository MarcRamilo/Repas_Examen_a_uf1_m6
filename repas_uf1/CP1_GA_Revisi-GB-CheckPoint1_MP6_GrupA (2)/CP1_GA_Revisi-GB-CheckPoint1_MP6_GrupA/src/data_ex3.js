module.exports = {
  users: [
    {
      id: 1,
      name: 'John',
      age: 30,
      gender: 'male',
      hobbies: ['reading', 'running', 'traveling'],
      friends: [
        {
          id: 2,
          name: 'Jane',
        },
        {
          id: 3,
          name: 'Bob',
        },
      ],
    },
    {
      id: 2,
      name: 'Jane',
      age: 25,
      gender: 'female',
      hobbies: ['painting', 'hiking', 'cooking'],
      friends: [
        {
          id: 1,
          name: 'John',
        },
        {
          id: 3,
          name: 'Bob',
        },
        {
          id: 4,
          name: 'Alice',
        },
      ],
    },
    {
      id: 3,
      name: 'Bob',
      age: 35,
      gender: 'male',
      hobbies: ['swimming', 'gardening', 'photography'],
      friends: [
        {
          id: 1,
          name: 'John',
        },
        {
          id: 2,
          name: 'Jane',
        },
      ],
    },
    {
      id: 4,
      name: 'Alice',
      age: 28,
      gender: 'female',
      hobbies: ['reading', 'yoga', 'cooking'],
      friends: [
        {
          id: 5,
          name: 'Charlie',
        },
      ],
    },
    {
      id: 5,
      name: 'Charlie',
      age: 32,
      gender: 'male',
      hobbies: ['reading', 'running', 'biking'],
      friends: [
        {
          id: 4,
          name: 'Alice',
        },
        {
          id: 1,
          name: 'John',
        },
      ],
    },
  ],
};
