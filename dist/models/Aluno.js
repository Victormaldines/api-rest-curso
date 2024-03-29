"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'nome precisa ter entre 3 e 255 caracteres',
            },
          },
        },
        sobrenome: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'sobrenome precisa ter entre 3 e 255 caracteres',
            },
          },
        },
        email: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          unique: {
            msg: 'email já existe',
          },
          validate: {
            isEmail: {
              msg: 'email inválido',
            },
          },
        },
        idade: {
          type: _sequelize2.default.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'idade precisa ser um número inteiro',
            },
          },
        },
        peso: {
          type: _sequelize2.default.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'peso precisa ser um número real',
            },
          },
        },
        altura: {
          type: _sequelize2.default.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'altura precisa ser um número real',
            },
          },
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'id_aluno' });
  }
} exports.default = Aluno;
