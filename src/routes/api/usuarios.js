const router = require('express').Router();
const UsuariosController = require('../../controllers/usuarios.controller');
const { checkRole, preAuthMiddleware, checkToken } = require('../../middlewares/auth.middleware');

router.get('/todos', checkToken, UsuariosController.getAllUsuarios);
router.get('/todos/pag', checkToken, UsuariosController.getAllUsuariosByPage);
router.get('/:usuarioId', checkToken, UsuariosController.getUsuarioById);
router.get('/:usuarioId/clases', UsuariosController.getClasesByUsuarioId);
router.get('/:profesorId/especialidades', checkToken, checkRole(['prof']), UsuariosController.getEspecialidadByProfesorId)
router.get('/:profesorId/chats/:alumnoId', checkToken, checkRole(['prof', 'alumn']), UsuariosController.getChatByUsuariosId)
router.get('/:profesorId/puntuaciones', checkToken, checkRole(['prof']), UsuariosController.getPuntuacionesByProfesorId)
router.get('/:profesorId/clases/:alumnoId', checkToken, checkRole(['prof']), UsuariosController.getClasesByUsuariosId)
router.get('/:profesorId/alumnos',checkToken, checkRole(['prof']), UsuariosController.getAlumnosByProfesorId)
router.post('/register', preAuthMiddleware, UsuariosController.register)
router.post('/login', preAuthMiddleware, UsuariosController.login)
router.post('/:profesorId/especialidades', checkToken, checkRole(['prof']), UsuariosController.insertEspecialidadByProfesor)
router.post('/:profesorId/clases', checkToken, checkRole(['prof']), UsuariosController.insertClaseByProfesor)
router.post('/:profesorId/chats/:alumnoId', checkToken, checkRole(['prof', 'alumn']), UsuariosController.insertChatByUsersId)
router.post(':profesorId&:alumnoId&:especialidadId',checkToken, checkRole(['prof','alumn']), UsuariosController.insertAlumnoByProfesorId)
router.put("/:usuarioId", checkToken, UsuariosController.updateUsuario)
router.put('/:profesorId&:alumnoId&:especialidadId',checkToken, checkRole(['prof','alumn']), UsuariosController.updateAlumnoByProfesorId)
router.delete('/:profesorId&especialidadId', checkToken, checkRole(['prof']), UsuariosController.deleteEspecialidadByUsuario)
router.delete('/:usuarioId', checkToken, checkRole(['admin']), UsuariosController.deleteUsuario)
router.delete('/:profesorId&:alumnoId&:especialidadId&:fecha', checkToken, checkRole(['prof']), UsuariosController.deleteClaseByProfesorId)
router.delete('/:profesorId&:alumnoId&:especialidadId',checkToken, checkRole(['prof','alumn']), UsuariosController.deleteAlumnoByProfesorId)

module.exports = router;
