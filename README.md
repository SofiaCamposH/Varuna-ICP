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

# Modelo de Negocios
 # Socios Clave
 1. Instituciones de investigación.
 2. Instancias gubernamentales.
 3. Empresas privadas.
 # Actividades principales
 1. Desarrollar e implementar tecnología para la detección y eliminación de microplásticos.
 2. Establecer alianzas estratégicas.
 3. Realizar campañas de sensibilización.
4. Garantizar la efectividad de la eliminación de microplásticos.
 5. Utilizar la mayor parte de recursos naturales y sustentables como sea posible.
# Propuesta de Valor
La proliferación de microplásticos en el medio ambiente representa una grave amenaza para los ecosistemas y la salud humana. Debido a su pequeño tamaño (menos de 5 mm), la detección y cuantificación de estos fragmentos plásticos resulta un desafío complejo. En este contexto, surge la propuesta de Varuna, un sistema innovador que combina la inteligencia artificial (IA), la impresión 3D y materiales sostenibles para abordar de manera integral la problemática de la contaminación por microplásticos.

Metodología

Varuna se basa en la integración de tres componentes principales:

Detección inteligente: Un microscopio 3D de bajo costo, construido con impresión 3D y acoplado a una Raspberry Pi, permite la captura de imágenes de muestras de agua. La IA, mediante algoritmos de aprendizaje automático entrenados con un conjunto de datos de imágenes de microplásticos, se encarga de identificar y cuantificar automáticamente estos fragmentos en las muestras analizadas.

Filtración física: Varuna incorpora una serie de filtros físicos para la eliminación de microplásticos del agua tratada. Estos filtros, compuestos por materiales sostenibles como carbón de fibra de coco, arena biológicamente activa, carbón activado, óxido de grafeno, grafito y quitina, se seleccionan cuidadosamente por su capacidad para capturar microplásticos de diferentes tamaños y morfologías.

Energía renovable: El sistema se alimenta mediante paneles solares, garantizando un funcionamiento autónomo y sostenible. La energía solar alimenta tanto el microscopio 3D y la Raspberry Pi como los mecanismos de bombeo y filtración de agua.

Ventajas

Varuna ofrece diversas ventajas significativas en comparación con los métodos tradicionales de detección y eliminación de microplásticos:

Eficiencia y precisión: La combinación de IA y microscopía 3D permite una detección rápida, precisa y automatizada de microplásticos, incluso en muestras complejas.

Bajo costo y accesibilidad: La utilización de impresión 3D y materiales sostenibles reduce significativamente los costos de implementación y mantenimiento, haciendo que la tecnología sea accesible a una amplia gama de usuarios.

Sostenibilidad: El uso de energía renovable y materiales ecológicos minimiza el impacto ambiental del sistema.

Eliminación efectiva: Los filtros físicos cuidadosamente seleccionados garantizan la eliminación eficiente de microplásticos del agua tratada.
 # Relación con cliente
 1. Comunidad entre clientes.
 2. Capacitadores, empresa e investigadores.
 3. Colaboración.
 4. Concientización.
 5. Compromiso.
 6. Apoyocontinuo.
 7. Cursos y capacitaciones .
# Canales
 1. Instancias gubernamentales.
 2. Canales digitales.
 3. Campañas nacionales de concientización.
# Segmento de clientes
 1. Autoridades locales.
 2. ONGs.
 3. Empresas privadas.
 4. Instituciones de investigación.
 5. Instancias gubernamentales

# Presentación

A continuación adjunto el link a la presentación usada:
- https://www.canva.com/design/DAGKzQzVXEs/IWsTEr_Ln6rG3vAOi6ML6w/edit

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



