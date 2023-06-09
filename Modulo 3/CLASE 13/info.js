/*
En las dos clases que componen este módulo nos enfocaremos en aprender a usar Git como herramienta y conocer la metodología Scrum.

"Primero veremos Git"

Es un sistema cuya principal ventaja radica en que trabaja con un sistema de versiones, pero, al principio, este sistema puede traernos algunos problemas. Por eso, aprenderemos a solucionarlos.

Vamos a trabajar con Git a lo largo de toda la cursada para subir las entregas del proyecto integrador. También podremos usar un repositorio propio (tranquilos, ya vamos a ver qué es un repositorio) donde podremos guardar nuestros proyectos.

El trabajo con Git requiere tener muy en claro la secuencia de pasos necesaria para manejar un repositorio. En los contenidos vamos a encontrar información que nos permitirá conocer estos pasos. Recomendamos armar un paso a paso propio para poder tenerlo a mano siempre que lo necesitemos.

"Seguiremos con Scrum"

Es una metodología de trabajo que forma parte de lo que se denomina metodologías ágiles. Conoceremos sus ventajas y desventajas, y aplicaremos algunas de sus herramientas al desarrollo del proyecto integrador.

Trabajaremos con Scrum directamente en la clase presencial y en esa misma clase definiremos los equipos con los cuales llevarán adelante el proyecto integrador.

Objetivos del módulo

-Identificar las ventajas de un sistema de versionado.
-Conocer los potenciales problemas y ventajas que surgen al utilizar un sistema de versionado.
-Diagramar la secuencia de pasos que suceden al manejar un repositorio como Git.
-Realizar los pasos básicos y comunes del uso de Git a través de alguna herramienta, ya sea la terminal o un aplicativo.
-Conocer las ventajas y desventajas de las metodologías de trabajo.
-Implementar prácticas de distintas metodologías de trabajo, puntualmente enfocando metodologías ágiles y Scrum.

INTRODUCION AL GIF

¿Cómo se trabaja en forma colaborativa en un ambiente profesional? ¿Nos mandamos mails con código?, ¿mensajes de WhatsApp?, ¿usamos Google Drive? Mmm... ¿Medio raro, no?

Definitivamente no usamos nada de esto, pero utilizamos una herramienta que tiene muchos de los beneficios que nos dan las que nombramos anteriormente: trabajar en grupo de forma colaborativa, comunicar cambios, manejar distintas versiones. Como dijimos al principio del módulo, vamos a conocer una herramienta que nos va a servir durante toda la cursada.

GIT es un software  de control de versiones, mantiene efecientemente las actualizaciones sobre el codigo fuente 

Fx: llevar regristro de los cambios y coordinar el trabajo de varias personas

GIThub
no es lo mismo que GIT, ya que Git Hub es un lugar en la nube donde se almacena info 

En GitHub se crean REPOSOTORIOS, Q es? Es un lugar en donde se almacena los archivos del proyecto y atraves de este se hace un seguimento del mismo
1 proyecto = 1 repositorio

En GitHub son repositorios remotos

palabras y conceptos claves del video sobre GitHub:

-GitHub es un lugar en la nube.
-Repositorio: lugar en donde se irán almacenando los archivos de nuestro proyecto y a través del cual podremos hacer seguimiento de los mismos.
-Remotos: viven en la nube, es decir, en GitHub.
-Locales: viven en nuestra computadora.

Como crear un repositorio local? Poner en comando "git init", en la terminal

Un repsoitorio es un almacen de archivos, q se almacenan en "Commits", estos son paquetes q permiten hacer un seguimiento de los cambios q se realizan. Es como un hisotrial de cambio

2 comandos de git para agregar la identidad
1ro para indicar el nombre de ususario: git config user.name "mi usuario"
2do para indicar el mail : git config user.email "mi mail"

git config --global user.name/email para dejar permanentemente el usuario y el mail en la terminal configurado


*/

/*
COMANDOS PARA GIT
+Git clone: es un comando para descargar el código fuente existente desde un repositorio remoto (como Github, es decir, hace una copia identica de la ultima versiond del proyecto
    "git clone https://name-of-the-repository-link"

+Git branch: para crear, enumerar y eliminar ramas. 
      -Crear nueva rama: git branch <branch-name>
      -insertar la nueva rama en el repositorio remoto: git push -u <remote> <branch-name>
      -Para ver las ramas: git branch or git branch --list
      -Para borrar las ramas: git branch -d <branch-name>
+Git checkout: para cambiar de una rama a otra. También podemos usarlo para verificar archivos y confirmaciones.
      -git checkout <name-of-your-branch>

+Git status: nos brinda toda la información necesaria sobre la rama actual.

+Git add: para incluir los cambios de un archivo(s) en nuestro próximo commit.
     -git add <file> (Para agregar un solo archivo)
     -git add -A (Para añadir todo de una vez)
     -git add. agrega todos los archivos del repositorio

+Git commit :es como establecer un punto de control en el proceso de desarrollo al que puede volver más tarde si es necesario. También necesitamos escribir un mensaje corto para explicar lo que hemos desarrollado o cambiado en el código fuente
    -git commit -m "commit message"

+Git push:enviar estos cambios al servidor remoto
     -git push <remote> <branch-name>
    Sin embargo, si tu rama se creó recientemente, también debes cargar la rama con el siguiente comando:
    -git push --set-upstream <remote> <name-of-your-branch>
+Git pull: se usa para obtener actualizaciones del repositorio remoto.
    -git pull <remote>

+Git revert: forma más segura de deshacer nuestras confirmaciones

+Git merge: fusionar la rama con la rama principal (dev o master branch). Esto se hace con el comando git merge,
básicamente integra su rama de características (feature branch) con todas sus confirmaciones en la rama dev (o master).

$Primero debes cambiar a la rama dev:

git checkout dev

$Antes de hacer la fusión, debes actualizar la rama de desarrollo local:

git fetch

$Finalmente, puedes hacer la fusión:

git merge <branch-name>

CONFIRMAR ARCHIVOS EN GIT

Con commits!!
-git commit -m "msj", senial en la linea de tiempo de los commits
- git log (Hisotial de commits)

SUBIR ARCHIVOS A LA NUBE

-git push origin master

BAJANDO ARCHIVOS

-git clone url exacto
crea una copia ecaxta en la computadora de todos los archivos existentes en un repositorio remoto
Como mantener sincronizado los archivos: 
-git pull origin main 


RESUMEN
Para ir terminando esta clase compartiremos algunas herramientas que serán útiles para empezar a trabajar con Git:

-Paso a paso descargable con los comandos.
-Una guía de uso de Git.
-Un flow que será útil para entender los múltiples caminos y procesos que se pueden seguir a la hora de usar Git.
-Una documentación y glosario descargables con las palabras claves y conceptos a tener en cuenta.
*/