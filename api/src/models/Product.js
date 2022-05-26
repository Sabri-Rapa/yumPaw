const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
        type: DataTypes.ENUM('alimento', 'accesorios', 'salud y bienestar'),
        allowNull: false,
    },
    weight:{
        type: DataTypes.ENUM('1kg', '5kg', '7,5kg', '10kg', '20kg')
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    photos:{
        type:DataTypes.ARRAY(DataTypes.STRING)
    },
    profilePicture:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    targetAnimal:{
        type: DataTypes.ENUM('Perro', 'Gato', 'Tortuga', 'Conejo', 'Pez', 'Hamster', 'Pajaro', 'Otro'),
        allowNull: false,
    },
    tradeMark:{
        type: DataTypes.ENUM('pro plan', 'pedigree', 'vital can', 'eukanuba'),
        allowNull: false,
    },
    sold:{
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }
  })
};