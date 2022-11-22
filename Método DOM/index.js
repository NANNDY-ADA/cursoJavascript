//MÉTODO DOM
//Es el modelo de objeto de Documento,es la estructura de la página, es decir, 
//desde un objeto inicial, llamado document parten dos elementos hijos, las etiquetas
//head y body, y de éstas parten todos los demás elementos. A este respecto, 
//el objeto document vendría representado por la etiqueta html de comienzo y final de la página.

//TIPOS DE NODOS
//12 tipos de nodos (solo se necesitan 5)
//Document: nodo raiz del que derivan todos los demas.
//Element: Cada una de las etiquetas HTML. Es unico nodo que puede contener atributos y del 
//         que pueden derivar otros nodos.
//Attr: Cada atributo de una etiqueta genera un nodo Attr, el cual contiene también su valor 
//     (como una propiedad). El nodo Attr es hijo del nodo element que contiene su etiqueta.
//Text: Contiene el texto encerrado por una etiqueta HTML. Los nodos de texto son hijos de 
//      los nodos Element que los contienen.
//Comment: Los comentarios incluidos en la pagina HTML también generan sus nodos.

//ACCESO A LAS ETIQUETAS
//Acceso mediante getElementsByTagName(): Este método permite acceder a todos los elementos 
//       cuya etiqueta sea igual al parámetro proporcionado. Dentro del paréntesis se escribirá 
//       entre comillas el nombre de la etiqueta de la que se quieren ver todos sus elementos. 
//       El resultado es un array en el que cada variable será una etiqueta.
//Acceso mediante getElementsByName(): dentro del paréntesis, y entre comillas debemos poner 
//       el valor del atributo name de la etiqueta a la que queremos acceder.
