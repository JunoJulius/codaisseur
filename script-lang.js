"use strict";


var languageName =  " JavaScript",

myName = "Juno",
myAge = "30"

document.write(languageName + " ")

document.write(myName + " " + myAge)

document.write(" <h1>my age in months<br> is</h1><br> " + myAge * 12),


var weather = prompt(" How is the weather in degrees ?")

if(weather < 5){
  document.write(" Parka Weather")
}else if(weather > 4 && weather < 18){document.write(" Jacket Weather")}else{
  document.write("<br>Tshirt-weather")
}


if (weather % 2 === 0){
  document.write("<br> your number is even")
}else{document.write(" <br>your number is odd")}


var favLang = prompt("<br> what is your favorite programming language.").toUpperCase()
if (favLang === "JAVASCRIPT"){
  document.write("<br> I Love JavaScript ")
}else if(favLang === "PHP"){
  document.write("<br> I Kinda not love PHP ")
}else{
  document.write("<br> I really just like JS the most. ")
}
