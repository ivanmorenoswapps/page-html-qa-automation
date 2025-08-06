# Usa una imagen oficial de nginx
FROM nginx:alpine

# Elimina los archivos por defecto de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia tus archivos HTML al directorio que nginx sirve
COPY . /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80