export default `
    type User {
        id: Int!
        username: String!
        createdAt: String!
        updatedAt: String!
    }

    type Post {
        id: Int!
        title: String!
        description: String!
        createdAt: String!
        updatedAt: String!
    }

    type Query {
        allUsers: [User!]!
        getUser(username: String!): User

        allPosts: [Post!]!
        getPost(title: String!): Post
    }

    type Mutation {
        createUser(username: String!): User
        updateUser(username: String!, newUsername: String!): [Int!]!
        deleteUser(username: String!): Int!

        createPost(title: String!, description: String!): Post
        updatePost(title: String!, newTitle: String, description: String, newDescription: String): [Int!]!
        deletePost(title: String!): Int!
    }
`;