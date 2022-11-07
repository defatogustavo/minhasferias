<?php

//   $nome = $_GET["nome"];
//    $idade = $_GET["idade"];






if(array_key_exists('button1', $_POST)) {
    button1();
}
else if(array_key_exists('button2', $_POST)) {
    button2();
}
function button1() {
    echo "This is Button1 that is selected";
    $nome = $_GET["nome"];
    $idade =  $_GET["idade"];

    $pas1 = fopen("pas.txt","w", "a+");
    echo fwrite($pas1,
     "$nome $idade"
 );

fclose($pas1);
 return 0;

    
}
function button2() {
    echo "This is Button2 that is selected";
}
?>






