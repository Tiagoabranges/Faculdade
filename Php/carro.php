<?php

$carros = Array("Fusca", "gol", "Passat");

foreach($carros as $carro){
   echo $carro;
   echo "\n";
}

for ($i = 0; $i < count($carros); $i++) {
   echo $carros[$i];
   echo "\n";
}