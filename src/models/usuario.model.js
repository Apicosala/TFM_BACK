/**
 * 
 * @returns muestra todos los usuarios de la DB
 */
const SelectAllUsuarios = () => {
    return db.query('select * from usuarios')
}
/**
 * 
 * @param {number} id id del usuario
 * @param {any} param1 datos del usuario
 * @returns datos del usuario modificados
 */
const updateUsuarioById = (id, { nombre, apellidos, mail, pass, foto, tel, pxh, experiencia, lat, lon, activo }) => {
    return db.query('update usuarios set nombre=?, apellidos=?, mail=?, pass=?, foto=?, tel=?, pxh=?, experiencia=?, lat=?, lon=?, activo=? where id=?',[nombre, apellidos, mail, pass, foto, tel, pxh, experiencia, lat, lon, activo, id])
}
/**
 * 
 * @param {number} id id del usuario
 * @returns elimina el usuario
 */
const deleteUsuarioById = (id) => {
    return db.query("delete from usuarios where id=?", [id])
}

module.exports = { SelectAllUsuarios, updateUsuarioById,deleteUsuarioById }