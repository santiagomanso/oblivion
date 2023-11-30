# Biocom - MyPokeAPI

Una RESTapi de Pokemones lista para servir recursos

## Stack Tecnológico 🛠️

Node, Express, Prisma (PostgreSQL), TypeScript, Zod, Docker

## Instalación

Instalar el proyecto con with npm

```bash
  cd biocom
  npm install
```

## Variables de Entorno

Para ejecutar este proyecto, se necesitan las siguientes variables de entorno dentro del archivo .env

`DATABASE_URL="postgresql://postgres:NyN$$123@!fibonacci@db.ghavzwsedcybunspielj.supabase.co:5432/postgres"`

`SERVER_PORT=4000`

## Ejecutar Localmente 🏚️

Ejecutar ALL-IN-ONE `recomendado⭐`

```bash
  npm run dev
```

Este comando ejecutará el script dev, ubicado dentro del fichero `package.json`, el cual tiene las siguientes 3 comandos concatenados:

- `npx prisma generate`: se encarga de la generación del cliente Prisma.
- `npm run data:import`: sirve para llamar la funcion `dataImport`, que carga dinámicamente los pokemones de la POKEAPI y los transforma para insertarlos dentro de nuestra Mypokeapi🔥. _(ver fichero `src/ seeder.ts`)_
- `npx tsx watch src/index.ts`: este ultimo script sirve para iniciar el servidor, en este momento esta listo para recibir peticiones y responder acordemente.

## Docker 🐋

Esta solucion esta dockerizada, para clonar la imagen ejecutar el siguiente comando

```bash
docker pull santiagomanso/biocom:0.0.1.RELEASE
```

Una vez clonada la imagen, correr el contenedor con el siguiente comando

```bash
docker run -d -p 4000:4000 santiagomanso/biocom:0.0.1.RELEASE
```

Una vez hecho esto, la API se encontrará lista para procesar peticiones🚀

## Features

- CRUD / ABM completo (`GET`, `POST`, `PATCH`, `DELTE`)
- Validaciones en todos los endpoints
- Fetch de datos desde API externa _(Poke API)_, transformacion e insersión de dichos datos en la BBDD🔥
- Patrón de diseño M.V.C

## API Reference

#### Obtener todos los Pokemones

```bash
  GET /mypokeapi/
```

Este endpoint no requiere parámetros de ningun tipo.

#### Obtener un único Pokemon por ID 🪪

```bash
  GET /mypokeapi/id
```

| Parameter | Type  | URL | BODY | OBLIGATORIO   | Description         |
| :-------- | :---- | :-- | :--- | :------------ | :------------------ |
| `id`      | `int` | SI  | NO   | `obligatorio` | identificador único |

#### Crear un nuevo Pokemon

```bash
  POST /mypokeapi/new
```

| Parameter | Type       | URL | BODY | OBLIGATORIO   | Description         |
| :-------- | :--------- | :-- | :--- | :------------ | :------------------ |
| `id`      | `int`      | NO  | SI   | `obligatorio` | identificador único |
| `name`    | `string`   | NO  | SI   | `obligatorio` | nombre              |
| `weight`  | `int`      | NO  | SI   | `obligatorio` | peso                |
| `types`   | `string[]` | NO  | SI   | `obligatorio` | tipos (_ver enums_) |

#### Actualizar un Pokemon por ID 🪪

```bash
  PATCH /mypokeapi/update/id
```

| Parameter | Type       | URL | BODY | OBLIGATORIO   | Description         |
| :-------- | :--------- | :-- | :--- | :------------ | :------------------ |
| `id`      | `int`      | SI  | NO   | `obligatorio` | identificador único |
| `name`    | `string`   | NO  | SI   | NO            | nombre              |
| `weight`  | `int`      | NO  | SI   | NO            | peso                |
| `types`   | `string[]` | NO  | SI   | NO            | tipos (_ver enums_) |

#### Eliminar un Pokemon por ID 🪪

```bash
  DELTE /mypokeapi/delete/id
```

| Parameter | Type  | URL | BODY | OBLIGATORIO   | Description         |
| :-------- | :---- | :-- | :--- | :------------ | :------------------ |
| `id`      | `int` | SI  | NO   | `obligatorio` | identificador único |

## Como usar / Ejemplos

Haciendo un curl a la API

```bash
 curl localhost:4000/mypokeapi/4
```

Nos da como resultado un objeto JSON con la siguiente forma

```
{
  "pokemon":
    {
      "id":4,
      "name":"charmander",
      "weight":85,
      "types":["fire"]
    }
}
```

Ejemplos sin CURL: para simplificar la demostración del funcionamiento de esta API he incluido un fichero "**src /api.http** cuyo propósito es de tener pre-cargadas las diferentes peticiones a nuestra API, para ello solamente basta con hacer click en _send request_ y se pintará el resultado en nueva pestaña de VSCODE.
Para poder hacer eso de esta funcionalidad hay que instalar la siguiente extension en VSCODE: **REST CLIENT**
![REST CLIENT screenship](https://i.ibb.co/4NKtVsv/image.png 'Con esta extension podemos ver los resultados en el momento')

### Ejemplo Obtener Pokemon Pikachu con `id` 25

![ejemplo getPokemonById pikachu](https://i.ibb.co/XZvQWFV/image.png 'Con esta extension podemos ver los resultados en el momento')

### Creando pokemon nuevo

![creamos un nuevo pokemon](https://i.ibb.co/VDzVdZw/image.png 'creamos un pokemon nuevo, terreneitor')

En el ejemplo podemos observar como se crea un pokemon, como tambien podemos observar como en la petición, tanto el nombre como los tipos no estan formateados correctamente y luego al introducir el nuevo pokemon a la base de datos, estos campos estan correctamente formateados.

### Actualizando el mismo pokemon por su id

![actualizando pokemon por id](https://i.ibb.co/6PTXbxm/image.png 'actualizamos el nombre de terreneitor')

## Funcionamiento en Detalles 💻

#### SEEDER

fichero **src /seeder.ts**: Se encarga de actuar como semillador, contiene dos funciones

- _importData_: popular la base de datos hosteada en SUPABASE.
- _destroyData_: realizar un DROP (_eliminar_) todos los recursos de la base de datos.

fichero: **utils /fetchAndParseFromPokeAPI.ts**. Contiene dos funciones auxiliares que se encargan de hacer un `fetch()` a la pokeapi, para obtener los 151 (los pokemones originales💓) y para luego despojarlos de propiedades ajenas a nuestro interés llamando a la segunda funcion auxliiar `sanitizePokemons()`.

- `fetchAndParseFromPokeAPI()` : Esta funcion es la responsable de hacer el fetch a la api de pokeapi con la siguiente url ***https://pokeapi.co/api/v2/pokemon?limit=151*** _(nos trae los originales 151 pokemones💓)_, una vez obtenidos los pokemones llama a la siguiente funcion auxiliar.
- `sanitizePokemons( pokemonArray: InitialPokemon [ ] )` :Esta funcion recibe un arreglo de pokemones con el siguiente tipado _InitialPokemon_. la forma de todos los objetos es la que se detalla a continuacion: `initialPokemon: {
name: string
url: string }`
  . los 151 pokemones poseen esa forma. Sin embargo es de nuestro interes una lista con pokemones con la siguientes propiedades: `ID`, `NAME`, `WEIGHT`, `TYPES` (arreglo de caracteres), por lo que debemos realizar un nuevo FETCH por cada pokemon aprovechando que estos objetos de tipo(InitialPokemon) poseen la propiedad URL.

A continuacion la funcion `sanitizePokemons()` crea un arreglo de promesas de tipo `SinglePokemon[ ]`, y este arreglo se define usando un map, y el objeto que retorna el map para almacenar dentro de la promesa tiene la forma `SinglePokemon [ ]` desechando asi las propiedades que no son de nuestro interes y unicamente conservando aquellas que sean de importancia para esta api.
Luego para resolver todas las promesas juntas se utiliza el metodo `Promise.all()` y se retorna un nuevo arreglo llamado parsedPokemons de tipo `SinglePokemon []` que finalmente es retornado por la primera funcion `getAllPokemons()`, y de allí es invocada por la funcion importData del fichero `src /seeder.ts`

#### CONFIGURACION DE PRISMA

fichero **prisma /schema.prisma**

- _`client`_: este fichero la configuracion de el cliente de prisma, el string de conexion a la base de datos y los modelos de las tablas de la anterior mencionada.

- _`generatorClient`_: se encarga de generar el cliente javascript de prisma (tambien prisma genera clientes para otros lenguajes, pero unicamente nos interesa JS).

- _`datasourceDB`_: objeto de configuracion donde se almacena el string unico de conexion a la base de datos (en este caso esta ubicada en el fichero `.env`), y el proveedor de la BBDD, en este caso postgresql 🐘.

#### PRISMA CLIENT

fichero **config /prismaClient.ts**: Aqui se crea una nueva instancia del cliente de prisma y se lo exporta para ser usado en los distintos controllers de la API, sin este fichero se crearian multiples instancias por cada funcion de cada controller. De esta manera se lo crea una única vez y se lo exporta de la siguiente forma _`export const prisma = new PrismaClient()`_ y luego se lo usa en donde sea necesario unicamente importandolo e invocando sus métodos directamente: **prisma.pokemons.findById()** o **prisma.pokemons.create()**

#### SCHEMAS DE ZOD

Zod es una biblioteca para declarar y validar esquemas en `TypeScript` 💓. Facilita la definición y validación de estructuras de datos al proporcionar una sintaxis concisa y capacidades robustas de validación.

fichero: **validations /pokemon-schemas.ts**: Aqui encontramos los schemas que se usarán para validar los cuerpos y parámetros de las peticiones HTTP que reciba nuestra API. Como esta hecha con `TypeScript` podemos aprovechar los tipos e interfaces para definir los argumentos que recibirán las funciones que validen los schemas, por ejemplo:

```typescript
const patchBodySchema = z.object({
  name: z.string().min(1, 'At least one char').optional(),
  weight: z.coerce
    .number({ invalid_type_error: 'weight must be a number' })
    .int()
    .min(1)
    .optional(),
  types: z.array(z.nativeEnum(PokemonEnums)).optional(),
})
```

Este schema es un objeto que debe cumplir con la siguiente forma 🔹:

- `NAME`: debe ser un `string` con al menos 1 caracter y puede ser opcional.
- `WEIGHT`: debe ser un `INT` (no puede ser negativo), de mínimo 1 y puede ser opcional
- `TYPES`: es un arreglo de caracteres que vienen de los ENUMS que estan definidos en _`types /pokemon-interfaces.ts`_, si se le pasa un `string` que no coincida con alguno de los enums provistos dará un error.

Validación de los schemas: para validar un parámetro se llama una funcion que a su vez invocara al `schema.safeParse`, esta se encarga de validar las propiedades del objeto que recibe contra las propiedades del schema definido.

```typescript
export const validatePatchBody = (input: SinglePokemon) => {
  input.name ? (input.name = input.name.trim().toLowerCase()) : ''
  if (input.types.length > 0) {
    const transformedInput = {
      ...input,
      types: input.types.map((type) => type.toLowerCase().trim()),
    }
    return patchBodySchema.safeParse(transformedInput)
  } else return patchBodySchema.safeParse(input)
}
```

Esta funcion recibe un objeto input, que es de tipo `SinglePokemon`, aqui aprovechamos el uso de `TypeScript` para facilitar la labor de validar.
Si existe la propiedad name, le realizamos un _`.trim()`_ para remover espacios vacios al final y al principio y luego un _`.toLoverCase()`_ para garantizar la consistencia de datos, puesto que los nombres se almacenan en minúsculas y si espacios; no sabemos como puede introducir los valores el operador y posteriormente podría ser de vital importancia para una busqueda por nombre. Lo mismo ocurre al detectar que se le pasa un arreglo de tipos al objeto input, se realizara un bucle y se transformará a minusculas y se removeran espacios blancos al inicio y final, manteniendo las demas propiedades del objeto iterado con el spread operator

#### TYPES / INTERFACES ⚡

Para asegurar la consistencia de datos a travez de la aplicación, existen distintas interfaces y tipos de `TypeScript` que son aplicadas a distintas estructuras de datos como objetos y/o arreglos, estas se detallan a continuacion.
`types /pokemon-interfaces.ts`

- _interface `InitialPokemon`_: objeto con la siguiente forma `name:string, url:string`. Esta interfaz es usada dentro de la funcion auxiliar getAllPokemons para tipar el fetch inicial de los 151 pokemones.
- _interface `SinglePokemon`_: se usa en la funcion `sanitizePokemons()` para despojar al pokemon de las propiedades que no son de nuestro interes. Tambien es usada por los schemas de zod para tipar los inputs de las peticiones en los metodos POST y PATCH,
- _type `SinglePokemon`[ ]_: tipo de arreglo con forma de `SinglePokemon`. Este tipo es usado en la funcion auxiliar getAllPokemons()
- _`enum PokemonEnums`_: objeto de enums que representan el atributo TYPE que no es mutable, se utilizan estos enums en los schemas de zod para validar los parametros y el cuero de las peticiones HTTP `POST` y `PATCH`, al no pasarle un TYPE que se corresponda con al menos uno de estos enums arroja un error de zod indicando informaicon pertinente al campo.

##

#### PETICIONES Y RESPUESTAS 📦

La API escucha la ruta ' /mypokeapi ' y pone a disposición un router llamado pokemonRouter, que gracias a express se logra facilitar el enrutado y el switch de la URL, permitiendonos organizar de forma mas sencilla las rutas bajo el enrutador llamado `pokemonRouter`; tambien responde por las siguientes rutas.

- Root `'/'`, al consultar la raiz la API respondera con un index.html estilado con `Tailwind CSS` que sirve de HomePage.
- `*`: Cualquier Ruta que no sea `/mypokeapi` o `/` la api respondera con un `404 - Not Found`.

#### PokemonRouter

Este enrutador de express sirve metodos `.get()` `.post()` `.patch()` `.delete()` y una vez hecha una peticion a cualquiera de estos el enrutador, llama a la clase _PokemonController🔄️_ y hace uso de una funcion declarada dentro de esta clase, ver _pokemon-controller.ts_
ejemplo: una peticion GET realizada sobre el siguiente endpoint: **GET http://localhost:4000/mypokeapi/** provocará la siguiente llamada del enrutador:

```typescript
pokemonRouter.get('/', PokemonController.getAll)
```

_getAll_: esta funcion declarada en _PokemonController🔄️_ se encargara de llamar al Modelo _PokemonModel🔄️_ para recibir los pokemones de la siguiente forma:

```typescript
const pokemons = await PokemonModel.getAll()
```

El Modelo se encarga unicamente de interactuar con la base de datos mediante **Prisma** y retornar un arreglo de Pokemones hacia el Controller, es allí donde continúa el flujo de datos; luego de validar que existan los pokemones que ha recibido por parte del Modelo, la respuesta `res` del controler será un arreglo de todos los pokemones con los que esta populada la base de datos al momento de realizar dicha peticion `req` _Nota opinionada del autor: La VISTA en este caso es el propio objeto JSON puesto que es una forma de representar la informacion procesada, pero bien podría ser una pantalla de alguna app hecha con React.js, React-Native, Angular, etc_.
Conclusión: El MVC es un patrón de arquitectura que se centrá en separar la responsabilidad en 3 partes bien definidas MODELO-VISTA-CONTROLADOR, ellos no necesitan saber como funciona el otro, solo se encargan de su propia responsabilidad.

- Modelo: se encarga de acceder a la base de datos, actualizar datos. Es la Lógica de negocio.
- Vista: esta define cómo se deben mostrar los datos de la aplicación.
- Controlador: Actúa como un intermediario entre el Modelo y la Vista; contiene una lógica que actualiza el modelo y/o vista en respuesta a las entradas de los usuarios de la aplicación.

  ![MVC](mvc-chart.png.png 'diagrama del MVC')

### Veamos con detalle el método PATCH

endpoint: `bash://localhost:4000/mypokeapi/update/:id`: Una peticion _req_ a este endpoint provocará que el enrutador de express, llame a la funcion _update_ definida dentro de la clase _PokemonController.ts_ que recibe como parámetro un _id_, debido a que la req esta tipada con typescript y validada con zod, lo primero que se deberá hacer será llamar a la funcion que valida el `id` con el schema correspondiente de zod, la funcion se llama `validateId()` y recibe un objeto como parámetro. Dentro de esta función, Zod valida el ID, lo convierte a un número y asegura que sea un número entero, un INT.

```typescript
const getByIdSchema = z
  .object({
    id: z.coerce
      .number({ invalid_type_error: 'id must be a number' })
      .int({
        message: 'id must be positive',
      })
      .min(1, {
        message: 'id must be at least 1',
      }),
  })
  .required()
```

la funcion `safeParse(input)` retorna on objeto que tiene una propiedad en caso que la validación haya resultado exitosa, o dos propiedades en caso que exista un error. Para el correcto manejo de errores debemos preguntar si la propiedad `!success` es falsa, y unicamente en ese momento obtendremos accesso a la propiedad error, esto es un comportamiento propio de **TypeScript**, recordemos que zod esta construido en su total en dicho lenguaje.

```typescript
export const validateId = (input: { id: number }) => {
  return getByIdSchema.safeParse(input)
}
```

El flujo de datos continua de la siguiente forma: ya tenemos un `id` correctamente convertido en INT, y podemos buscar el deseado pokemon💓 para actualizarlo!. Recordando la arquitectura MVC, el controller no se preocupa como recuperar a nuestro querido pokemon, el unico que sabe como dar con el es el MODELO, el PokemonModel. Pediremos a este modelo que buque un pokemon donde el id coincida con el id que tenemos almacenado en el objeto `parsedId`.

```typescript
const existingPokemon = await PokemonModel.getById(parsedId.data.id)
```

Si el MODELO no se encuentra un pokemon, retornará undefined y por ende la api retornara una respuesta `res` con status 404 indicando que no se encontro dicho pokemon:

```typescript
if (!existingPokemon) {
  return res.status(404).json({
    message: 'Pokemon not found',
  })
}
```

Caso contrario, tenemos un pokemon en existencia💓, entonces procederemos a validar lo que nos ha llegado en el req.body _(este se encuentra inyectado por el midleware de express en el fichero index.ts)_; dicho `req.body` se lo pasamos a una funcion validatePatchBody que se encargara de comprobar que los campos `NAME`, `WEIGHT`, `TYPES` se encuentren en concordancia con el `patchBodySchema` que es un objeto cuyas propiedades. **Antes de validar el req.body** con zod, debemos chequear si existe un arreglo de TYPES dentro de la `req`, en caso de no encontrar el arreglo de TYPES _(electrico, lucha, voldaor etc.)_ debemos asignarlo, puesto que lo tenemos dentro de nuestro pokemon existente existingPokemon, esto es debido a que el esquema de zod espera los types.

```typescript
if (!req.body.types) {
  req.body.types = existingPokemon.types
}
```

Ahora si podemos validar y una vez que tengamos lista la validacion, se almacenará en un objeto llamado `parsedBody`. Es en este momento que podemos volver a pedirle al MODELO que nos actualice el pokemon con la data proveniente de la peticion, con el id ubicado en parsedId y el body en parsedBody

```typescript
const updatedPokemon = await PokemonModel.updateById({
  id: parsedId.data.id,
  input: parsedBody.data,
})
```

De existir un error al momento de actualizar el pokemon, retornariamos una respuesta con código 500 y un mensaje indicando del error.
En caso contrario, estamos ante la situacion que el pokemon ha sido correctamente actualizado y entonces retornaremos un codigo 200, indicando que la `req` fue correctamente procesada, y tambien retornaremos el pokemon actualizado

```typescript
return res.status(200).json({
  updatedPokemon: updatedPokemon,
})
```

**Como afrontar el potencial cambio de ID**: en este update, no queremos que se permita cambiar el `ID` del pokemon, recordemos que el objeto SinglePokemon, tiene una propiedad id declara en dicha interfaz y es esta interfaz que usamos para tipar el input que recibe la funcion que valida el esquema del metodo patch

```typescript
export interface SinglePokemon {
  id: number
  //...resto de la interfaz
}
```

```typescript
export const validatePatchBody = (input: SinglePokemon) => {
  input.name ? (input.name = input.name.trim().toLowerCase()) : ''
  if (input.types.length > 0) {
    const transformedInput = {
  //...resto del codigo
}
```

entonces surge la pregunta ¿Como evitamos el cambio de ID? con el mismo schema de zod, el `patchBodySchema`, si nos fijamos bien no existe la propiedad `id` en dicho objeto, entonces a ZOD no le importa que se le pueda pasar propiedades como `id`, `sql` `password`, cualquier propiedad extra que se le pase, Zod simplemente va a ignorarla.

```typescript
const patchBodySchema = z.object({
  // no existe la propiedad ID
  name: z.string().min(1, 'At least one char').optional(),
  weight: z.coerce
    .number({ invalid_type_error: 'weight must be a number' })
    .int()
    .min(1)
    .optional(),
  types: z.array(z.nativeEnum(PokemonEnums)).optional(),
})
```

## Autor

- [@Santiago Manso Castro](https://github.com/santiagomanso)
