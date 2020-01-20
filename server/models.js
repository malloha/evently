const { Sequelize } = require("sequelize");


const sequelize = new Sequelize({
  database: "evently_db",
  dialect: "postgres",
  define: {
    underscored: true
  }
})

class User extends Sequelize.Model { }

User.init({
  username: Sequelize.STRING,
  password_digest: Sequelize.STRING,
  image_url: Sequelize.STRING,
  description: Sequelize.TEXT,
  interests: Sequelize.STRING,
  join_date: Sequelize.STRING,


}, {
  sequelize,
  modelName: 'user'

})

class Event extends Sequelize.Model { }

Event.init({
  title: Sequelize.STRING,
  date: Sequelize.STRING,
  description: Sequelize.TEXT,
  location: Sequelize.STRING,
  startTime: Sequelize.STRING,
  endTime: Sequelize.STRING,
  image_url: Sequelize.STRING,
  category: Sequelize.STRING


}, {
  sequelize,
  modelName: 'event'
})

User.hasMany(Event, { onDelete: 'cascade' });
Event.belongsTo(User);

Attending = sequelize.define('attending');

User.belongsToMany(Event,{through:Attending});
Event.belongsToMany(User,{through:Attending});

module.exports = {
  User,
  Event,
  Attending,
  sequelize
}
