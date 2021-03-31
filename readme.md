Hola Bertha Alicia:

Te escribo estas palabras por si nunca has trabajado con Heroku.

Heroku es una plataforma que nos permite correr aplicaciones directamente en una nube.

Eso significaría que nos ayudaría a mostrar avances ya arriba en la interwebs, porque pues no tenemos un ambiente designado para trabajar en esto, como en wordpress que nos dan DEV y STG para hacer pruebas.

Bla bla bla ..

Primero necesitas clonar el repo de Git a tu laptop con el comando:

git clone git@github.com:baronindigo/evolvecorpsite.git

si no hubo problema, el siguiente paso es instalar webpack para compilar los estilos.

Eso se hace con:

npm install

Eso debería crearte una carpeta "node_modules" (que ya está siendo ignorada por git) para poder correr el webpack.

Luego sigue instalar el Heroku CLI (Command Line Interface).

Eso se hace de la siguiente manera, dos puntos..

En tu terminal, escribes:

brew tap heroku/brew && brew install heroku

Ya, una vez instalado, asignas el remote de heroku a tu repo local:

heroku git:remote -a powerful-scrubland-35826

Eso de powerful-scrubland-35826 es un nombre aleatorio que nos asignaron para que sea el identificador del proyecto.

Si todo salió bien, deberías ver la dirección de heroku tecleando:

git remote -v

Si quieres mandar cambios arriba a la nube, commiteas todo en GIT, le haces push al Repo en GIT y luego haces push en Heroku de la siguiente manera:

git push heroku master

Cuando termine, deberías poder ver tus cambios en: https://powerful-scrubland-35826.herokuapp.com/

Y voila, espero te haya gustado este tutorial. Por favor da like y suscribe aquí abajo para estar pendiente de nuevo contenido.

Hasta luego.

