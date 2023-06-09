const { underscoredIf } = require("sequelize/types/utils");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Movie';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3,1),
            allowNull: false
        },
        length: {
            type: dataTypes.BIGINT(10)
        },
        awards: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        release_date: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        genre_id: dataTypes.BIGINT(10)
    };
    let config = {
        tableName: 'movies',
        timestamps: false,
        underscored: true
    };
    const Movie = sequelize.define(alias, cols, config)

    return Movie
}