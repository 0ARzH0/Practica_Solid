<?php



include_once "../model/alumnos.php";



$op=$_REQUEST['opcion'];

@$idalumno=$_REQUEST['idalumno'];

@$nombre=$_REQUEST['nombre'];

@$matricula=$_REQUEST['matricula'];


$alumno = new alumno($DiaFestivoID,$Fecha,$DiaFestivo);
$alumno_vac = new alumno_vac('','','');



switch($op){

    case 'add_alumno':

    $r=$alumno->add_alumno()

    header("Location:../views/ver_alumnos.php");	

    break;

    case 'get_alumno':

    $r=$alumno->upd_alumno()

    header("Location:../views/ver_alumnos.php");

    break;

    case 'del_alumno':

    $r=$alumno->sup_alumno()

    header("Location:../views/ver_alumnos.php");	

    break;



    default:

    break;

    }

?>