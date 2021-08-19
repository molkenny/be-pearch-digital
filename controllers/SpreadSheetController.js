//Models
const SpreadSheet = require('../models/SpreadSheet');

const list = async(id_user) => {
    try {
        return await SpreadSheet.findAll({ where: { id_user }, attributes: ['id', 'name', 'createdAt', 'updatedAt'] });
    } catch (error) {
        throw error;
    }
};

const get = async(id_user, id_spreadsheet) => {
    try {
        let spreadSheetDB = await SpreadSheet.findOne({ where: { id_user, id: id_spreadsheet } })

        return spreadSheetDB;
    } catch (error) {
        throw error;
    }
};

const add = async(id_user, name) => {
    try {
        let result = await SpreadSheet.create({
            id_user,
            name
        });
        if (!result) throw new Error("Error al crear");

        return list(id_user);

    } catch (error) {
        throw error;
    }
};

const del = async(id_user, id) => {
    try {
        let result = await SpreadSheet.destroy({ where: { id_user, id } });
        if (!result) throw new Error("Error al borrar");

        return list(id_user);

    } catch (error) {
        throw error;
    }
};

const edit = async(id_user, id_spreadsheet, name) => {
    try {

        //Verifico si existe ese id
        let spreadSheetDB = await SpreadSheet.findOne({ where: { id_user, id: id_spreadsheet } });
        if (!spreadSheetDB) throw new Error("No existe ese spreadsheet");

        let result = await spreadSheetDB.update({ name });
        if (!result) throw new Error("Error al editar");

        return list(id_user);

    } catch (error) {
        throw error;
    }
};

const upsert = async(id_user, data, id_spreadsheet) => {
    try {

        //Verifico si existe ese id
        let spreadSheetDB = id_spreadsheet ? await SpreadSheet.findOne({ where: { id: id_spreadsheet } }) : null;

        if (spreadSheetDB) {
            //Debo editar
            let result = await spreadSheetDB.update({ data });
            if (!result) throw new Error("Error al guardar");
        } else {
            //Debo crear
            let result = await SpreadSheet.create({
                id_user,
                name: `SP-${Date.now()}`,
                data
            });
            if (!result) throw new Error("Error al crear");
        }

        return true;

    } catch (error) {
        throw error;
    }
};

module.exports = {
    list,
    get,
    add,
    del,
    edit,
    upsert
};