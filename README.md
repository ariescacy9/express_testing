# CRUDS
## postgres y express y migrate

### se instala el paquete 

- install packages 
npm install --save-dev sequelize-cli

- se inicia
npx sequelize-cli init

- se instala mocha, chai y supertest
```bash
npm i mocha chai supertest
```
luego hay que modificar el archivo de migración que se crea en la carpeta migrations

# testing 

```bash
# para correr los cambios en el ambiente test
npx cross-env NODE_ENV=test npx sequelize-cli db:create
npx cross-env NODE_ENV=test npx sequelize-cli db:migrate
```

