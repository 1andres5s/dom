const $descripcion = document.getElementById("descripcion")
console.log($descripcion)

const $descripcion2 = document.querySelector("#descripcion")
console.log($descripcion2)

const $elementosLi = document.querySelectorAll("li")
console.log($elementosLi)

let cantidadElementos = $elementosLi.length
console.log(`hay ${cantidadElementos} elementos en la lista`)


$elementosLi.forEach((element) => console.log(element));

let texto = `En el año 2008 la competición fue llevada a cabo en el Reino Unido en la Universidad de 
Reading en donde se presentaron 13 candidatos de los cuales se seleccionaron 6 programas 
finalistas: Alice, Brother Jerome, Elbot, Eugene Goostman, Jabberwacky y Ultra Hal. Los seis 
programas tuvieron que interactuar con los 12 jueces manteniendo una conversación 
mediante un computador durante cinco minutos en donde se plantean una serie de preguntas 
con el fin de determinar si es un computador o un humano. En la edición del 2008 ninguno 
logré pasar el Test de Turing, aunque el ganador de la medalla de bronce fue el programa 
Elbot, que estuvo muy cerca de pasar esta prueba ya que consiguió convencer a 3 de los 12 
jueces, es decir el 25% de los jueces pensó que estaba conversando con un ser humano.`
//crear una nueva etiqueta de tipo p y añadirle contenido
document.body.appendChild(document.createElement("p")).textContent = texto




let link = `<a href="#">Enlace principal</a>`
const $a = document.createElement("a")
//$a.setAttribute("href","#")
$a.innerHTML = link
const $ul = document.querySelector("ul")
$ul.insertAdjacentElement("afterbegin", $a)


const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
"Noviembre", "Diciembre"]

const $ulMeses = document.createElement("ul")
document.write(`<h2>meses del año</h2>`)
document.body.appendChild($ulMeses);
meses.forEach((mes) => {
    const $li = document.createElement("li");
    $li.textContent = mes;
    $ulMeses.appendChild($li)
})

