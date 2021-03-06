# Altem-ionic

### 1. Requerimientos
* Requerimientos funcionales
* Requerimientos No funcionales
* Idea General del Proyecto
* Objetivos
* Problema a Solucionar

### 2. Node.js
* ¿Qué es?
* Descargar
* Instalación

### 3. Ionic
* ¿Qué es?
* Instalación
* Crear proyecto
* Ejecutar la aplicación

### 4. Interfaz
* Login
* Vista principal
* Click en asistencia
* Selección de estudiantes
* Confirmar asistencia
* Cerrar sesión

```Definición general del proyecto:``` Se trata de un aplicativo móvil construido bajo estructura IONIC y sus dependencias, con el fin de llevar a cabo el control de asistencias digitalmente en las aulas de clase. El sistema permitirá a un docente consultar el listado de los estudiantes matriculados en el curso que tiene asignado en una hora específica donde podrá seleccionar o marca las siguientes opciones: estudiante asistió a clase, estudiante no asistió a clase o estudiante con excusa.

### 1. Requerimientos 
**Requerimientos funcionales**
* Especificación de los requerimientos del sistema
* Realizar un aplicativo móvil bajo estructura de programación IONIC
* El sistema debe permitir realizar el Login de los profesores para acceder a
cada uno de los cursos en un horario determinado
* El sistema debe emitir un listado de los estudiantes de un curso x, para llevar
a cabo la asistencia.
* Los datos deben ser tomados desde la API suministrada mediante JSON , en
los cuales se encuentra la información necesario para alimentar la aplicación
* El sistema debe permitir al docente mediante múltiples selecciones marcar
cada uno de los estudiantes que asistieron a una clase un una hora x
* Si un estudiante no asistió a una clase y tiene una excusa valida, el sistema
tendrá una opción habilitada para tan justificación.
* Se debe permitir realizar estadísticas donde refleja la cantidad de
asistencias e inasistencias de un estudiante en cada una de las clases
durante un periodo el cual debe ser seleccionado
* El docente podrá ver el perfil de estudiante y la cantidad de inasistencias

**Requerimientos no funcionales**
* El tiempo de consulta y recepción de datos debe ser óptimo teniendo
en cuenta que las horas de clases deben ser aprovechadas al máximo
* El sistema debe permitir realizar las selecciones como (asistencias,
inasistencia y excusas) de la forma más cómoda para el docente.

```Idea General del proyecto:``` Manejo de Asistencia Estudiantil ```MAE``` , sistema para el control de asistencias a los estudiantes de la UTB.

**Objetivos:**
Brindar facilidad y aprovechamiento de la tecnología para realizar el control de asistencia en los salones de clase.
Realizar seguimiento a los estudiantes mediante la toma de asistencia para evaluación de rendimiento y disminuir las faltas a clase de los estudiantes.
Innovar la metodología de toma de asistencias agilizando el proceso para así tener mejor rendimiento de la hora de las horas de clase.

**Problema a Enfrentar:** Se encuentra establecido en el manual de convivencia estudiantil, que una de las razones fuertes para que un estudiante pierda los créditos de una materia matriculada en un periodo especifico es la inasistencia, sin embargo por muchas razones inherentes al mismo proceso de toma de asistencia como: la metodología, tiempo invertido etc, en la mayoría de las cosas este control no se lleva a cabo.
De esa manera es imposible reflejar estadísticas de asistencias e inasistencias, así mismo no es posible apoyar un estudiante si no hay forma de determinar las razones por las cuales en muchas ocasiones falta a clases.
Estos son algunas de los problemas que MAE pretende encarar mediante la gestión que descrita en los requerimientos.

**Procedimiento de Instalación y prueba:** A continuación se muestran detalles sobre el leguaje de programación utilizado, dependencias y proceso de instalación.

### 2. Node.js
* **¿Que es?** Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación ECMAScript, asíncrono, con I/O de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google. Fue creado con el enfoque de ser útil en la creación de programas de red altamente escalables, como por ejemplo, servidores web.

* **Descargar e instalar Node js** - 
 [web de Node js](https://nodejs.org/en/) - 
[npm](https://nodejs.org/es/download/package-manager/)

### 3. Ionic
**a. ¿Que es?**
Ionic es una herramienta, gratuita y open source, para el desarrollo de aplicaciones híbridas basadas en HTML5, CSS y JS. Está construido con Sass y optimizado con AngularJS.

* **Instalar**
```npm install -g cordova ionic```

* **Crear proyecto**
```ionic start myApp```

* **Ejecutar la aplicación**
```cd myApp ionic serve```

### 4. Interfaz.
* **Login: Ingresa usuario y contraseña.**
![login](https://github.com/jdcr1425/Altem-ionic/blob/master/doc/imagenes1.png)

* **Vista principal que tiene un menú para tomar asistencia**
![estudiantes](https://github.com/jdcr1425/Altem-ionic/blob/master/doc/imagenes2.png)

* **Cerrar sesión.** 
* ![cerrar](https://github.com/jdcr1425/Altem-ionic/blob/master/doc/imagenes3.png)
