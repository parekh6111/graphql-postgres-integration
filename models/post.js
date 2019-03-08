export default (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        title: DataTypes.STRING,
        description: DataTypes.STRING
    });

    return Post;
};