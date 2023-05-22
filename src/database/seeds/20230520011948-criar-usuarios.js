/** @type {import('sequelize-cli').Migration} */
const bcryptjs = require('bcryptjs');

// insere dados no banco de dados
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'forever',
          email: 'forever@email.com',
          password_hash: await bcryptjs.hash('123456', 8), // password, hash length
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'cellbit',
          email: 'cellbit@email.com',
          password_hash: await bcryptjs.hash('123456', 8), // password, hash length
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'richarlyson',
          email: 'richarlyson@email.com',
          password_hash: await bcryptjs.hash('123456', 8), // password, hash length
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down() {},
};
