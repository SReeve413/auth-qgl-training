

const { createApolloFetch } = require('apollo-fetch');

const fetch = createApolloFetch({
    uri: 'https://mq53o2dwnzb4bcpslpol3tdljm.appsync-api.us-west-2.amazonaws.com/graphql',
});

fetch({
    query: `listPlayers {
    listPlayers {
        items {
            id
            firstName
            lastName
            graduatingClass
            position
            maxBench
        }
    }
}`,
}).then(res => {
    console.log(res.data);
});

// // You can also easily pass variables for dynamic arguments
// fetch({
//     query: `query PostsForAuthor($id: Int!) {
//     author(id: $id) {
//       firstName
//       posts {
//         title
//         votes
//       }
//     }
//   }`,
//     variables: { id: 1 },
// }).then(res => {
//     console.log(res.data);
// });