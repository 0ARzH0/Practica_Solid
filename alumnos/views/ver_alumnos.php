<?php 
include_once "../model/alumnos.php";
include_once "../controller/op_alumnos.php";
 ?>
<!DOCTYPE html>
<html>
<head>
	<title>alumnos</title>
	<link href="../components/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="../components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="../css/estilo.css" rel="stylesheet">
</head>
<body>
<section class="container text-center">
	<h1>Registro de alumnos</h1>
	<section class="registro text-center">
		<form action="../controller/op_alumnos.php" method="POST">
			<article class="form-group col-lg-4">
				<input placeholder="Nombre" id="nombre">
			</article>
			<article class="form-group col-lg-4">
				<input placeholder="Mtriclua" id="matricula">
			</article>

			<button class="btn btn-success" name="opcion" value="add_alumno">Agregar</button>
		</form>
	</section>

</section>
</body>
<script src="../components/jquery/jquery.js"></script>
<script src="../components/bootstrap/js/bootstrap.min.js"></script>
</html>