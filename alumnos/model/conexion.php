<?php



class conexion{

var $servidor="localhost";

var $usuario="root";

var $pass="";

var $nombd="escuela";



function conectar(){

	@$con = mysqli_connect($this->servidor,$this->usuario,$this->pass,$this->nombd);

	if (!$con) {

		echo "error de conexion";

    }else{

    return $con;
}
    }

}

function ejecutarconsulta($consulta){

	$resp=mysqli_query($this->conectar(),$consulta);

     return $resp;

}

	

}

?>