'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('GiaoViens', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      HoTenGV: {
        type: Sequelize.STRING
      },
      MaXaPhuong: {
        type: Sequelize.INTEGER
        },
      MaChuyenMon: {
        type: Sequelize.INTEGER
      },
      MaChucDanh: {
        type: Sequelize.INTEGER
      },      
      MaTonGiao: {
        type: Sequelize.INTEGER
      },
      GioiTinh: {
        type: Sequelize.STRING,
      },
      NgaySinh: {
        type: Sequelize.DATE,
      },
      DiaChi: {
        type: Sequelize.STRING,
      },
      Email: {
        type: Sequelize.STRING,
      },
      SDT: {
        type: Sequelize.STRING,
      },
      Password: {
        type: Sequelize.STRING,
      },
      avatar: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('GiaoViens');
  }
};