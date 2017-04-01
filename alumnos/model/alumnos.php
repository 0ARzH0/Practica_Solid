<?php

include_once 'conexion.php';



class alumno{



	var $idalumno;

	var $nombre;

	var $matricula;


function alumno($idalumno,$nombre,$matricula){



	$this->Codigo=$Codigo;

	$this->ApellidoPaterno=$ApellidoPaterno;

	$this->ApellidoMaterno=$ApellidoMaterno;

}

function get_alumno(){
	$conexion=new conexion();

	$resp=$conexion->ejecutarconsulta(" SELECT * FROM `alumnos`");
    return $resp;
}

function add_alumno(){

	$conexion=new conexion();

	$resp=$conexion->ejecutarconsulta(" INSERT INTO `alumnos`(`idalumno`, `alumno`, `matricula`) VALUES ('$this->idalumno','$this->nombre','$this->matricula') ");
    return $resp;

}

function get_alumno(){
	$conexion=new conexion();

	$resp=$conexion->ejecutarconsulta(" SELECT * FROM `alumnos` WHERE idalumno='$this->idalumno'");
    return $resp;
}

function upd_alumno(){
	$conexion=new conexion();

	$resp=$conexion->ejecutarconsulta(" UPDATE `alumnos` SET `alumno`='$this->nombre',`matricula`='$this->matricula' WHERE `idalumno`='$this->idalumno''");
    return $resp;
}

function sup_alumno(){
	$conexion=new conexion();

	$resp=$conexion->ejecutarconsulta(" DELETE FROM `alumnos` WHERE idalumno='$this->idalumno' ");
    return $resp;
}


}

?>