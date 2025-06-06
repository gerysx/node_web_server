const { envs } = require('./config/env')
const {startServer} = require('./server/server')

const main = () => {
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH
  })
};

//Función agnostica autoconvocada
//Agnóstica por que no tiene nombre
// Autoconvocada (se autoconvoca con el cierre de parentesis final)
(async () => {
  main();
})();
