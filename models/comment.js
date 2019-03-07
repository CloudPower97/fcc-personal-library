'use strict'
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
    {
      text: DataTypes.STRING,
    },
    {}
  )
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Book)
  }
  return Comment
}
