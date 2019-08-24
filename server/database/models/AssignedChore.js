const Sequelize = require('sequelize');
const db = require('./../db');

const AssignedChore = db.define('assignedChore', {
    completed:{
        type: Sequelize.ENUM(['accepted', 'declined', 'pending']),
        defaultValue: 'pending',
    },
    assignedOn: {
        type: Sequelize.DATE,
        allowNull: false,
    }
})

module.exports = AssignedChore