## VARUNA

# DESCRIPCION 

Nuestro proyecto se centra en la detección y eliminación de micropartículas de plástico en el agua. Para lograrlo, combinamos procesos químicos y físicos, además de utilizar sensores para monitorear la calidad del agua. Después del tratamiento, analizamos los datos mediante una aplicación descentralizada en blockchain para garantizar seguridad y transparencia.

La detección y eliminación de micropartículas de plástico en el agua es un tema crucial en la actualidad. Nuestro enfoque es combinar procesos químicos y físicos, junto con la automatización y la tecnología blockchain.
La integración de sensores para monitorear la calidad del agua y la presencia de microplásticos antes y después del tratamiento también agrega.

Nuestro objetivo es el saneamiento de las aguas y asegurar que su calidad esté en condiciones óptimas antes de devolverla a los cauces, mediante la eliminación de los sólidos en suspensión, la materia orgánica y los patógenos presentes en el agua. Este proceso se lleva a cabo a través de un complejo sistema.

# Problemática

Los microplásticos son un problema emergente ya que se han encontrado en ecosistemas acuáticos, aéreos y terrestres y estos causan problemas en el ecosistema, en el ambiente, en los animales y daños importantes a la salud humana. Las plantas de tratamiento de agua son las principales fuentes de introducción de microplásticos al ecosistema acuático.

# Implementacion de ICP 
En este proyecto será utilizado el ICP para crear un sistema que funcione como foro o red social la cuál servirá para almacenar y mostrar la información sobre la calidad del agua tratada con nuestro sistema, rev¿cabando datos de las plantas tratadoras de agua que la usen, de esta manera aseguramos la trazabilidad, la transparencia y la seguridad de los datos ingresados.

# Pasos para correr el proyecto:

## 1.- Instalar WSL
Si estás usando Windows, debes instalar el WSL (Windows Subsystem for Linux) para que todo funcione correctamente, a través del siguiente comando en la consola:

```bash
wsl --install
```

## 2.- Instalar DFX

```bash
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
```

## 3.- Clonar repositorio:

```bash
git clone https://github.com/SofiaCamposH/Varuna-ICP.git
```

## 4.- Ingresar al proyecto:

```bash
cd Varuna-ICP.git
```

## 5.- Instalar dependencias de Node:

```bash
npm install
```

## 6.- Levantar réplica

```bash
dfx start –background
```

## 7.- Hacer el deploy del proyecto

```bash 
dfx deploy
```



