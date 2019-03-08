export default {
    Query: {
        allUsers: (parent, args, { models }) => models.User.findAll(),
        getUser: (parent, { username }, { models }) =>
            models.User.findOne({
                where: {
                    username,
                },
            }),

        allPosts: (parent, args, { models }) => models.Post.findAll(),
        getPost: (parent, { title }, { models }) =>
            models.Post.findOne({
                where: {
                    title
                },
            }),
    },

    Mutation: {
        createUser: (parent, args, { models }) => models.User.create(args),
        updateUser: (parent, { username, newUsername }, { models }) =>
            models.User.update({ username: newUsername }, { where: { username } }),
        deleteUser: (parent, args, { models }) => models.User.destroy({ where: args }),

        createPost: (parent, args, { models }) => models.Post.create(args),
        updatePost: (parent, args, { models }) => {
            console.log('******* ', args);
            if (args.newTitle && args.newDescription) {
               return models.Post.update({ title: args.newTitle, description: args.newDescription }, { where: { title: args.title } })
            } else if (args.newTitle) {
                return models.Post.update({ title: args.newTitle }, { where: { title: args.title } })
            } else if (args.newDescription) {
                return models.Post.update({ description: args.newDescription }, { where: { title: args.title } })
            }
        },
        deletePost: (parent, args, { models }) => models.Post.destroy({ where: args }),
    }
};