module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('recipients', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            recipient: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            street: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            number: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            complement: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            state: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            city: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            cep: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        }),

    down: (queryInterface) => queryInterface.dropTable('recipients'),
};