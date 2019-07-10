############################################################
# Dockerfile para configurar aplicación en node.js - Express
############################################################

# Establece la imagen base
FROM node:10

# Información de Metadata
LABEL "cl.apgca.appNode"="RUC SUNAT API"
LABEL maintainer="sebastian.luque.pl@gmail.com"
LABEL version="1.0"


# Crear directorio de trabajo
RUN mkdir -p /opt/app

# Se estable el directorio de trabajo
WORKDIR /opt/app

# Instala los paquetes existentes en el package.json
COPY package.json .
RUN npm install --quiet

# Instalación de Nodemon en forma Global
# Al realizarse cambios reiniciar el servidor
RUN npm install nodemon -g --quiet

# Copia la Aplicación
COPY . .

# Expone la aplicación en el puerto 8000
EXPOSE 3000

# Inicia la aplicación al iniciar al contenedor

# para developing
#CMD nodemon -L --watch . index.js

# production
CMD npm start