$(".subir_formato").on("click",function(e){
e.preventDefault();
SolicitudID = $(this).attr("dir");
$("#SolicitudID").val(SolicitudID);
});

$("#NumeroDias").on("keyup",function(){
if($("#NumeroDias").val().trim()==''){
NumeroDias = 0;
}else{
NumeroDias = $("#NumeroDias").val();
}
FechaInicio = $("#FechaInicio").val();
id_date = "FechaTermino";
FechaSiguiente(NumeroDias,FechaInicio,id_date);
    
  
setTimeout(function(){
NumeroDias1 = 1;
FechaInicio1 = $("#FechaTermino").val();
id_date1 = "FechaRegreso";
FechaSiguiente(NumeroDias1,FechaInicio1,id_date1);
}, 150); 
});
    
function FechaSiguiente(NumeroDias,FechaInicio,id_date){
$.ajax({
type:'POST',
url:'../controller/op_nom_vacaciones.php',
data:{NumeroDias:NumeroDias,FechaInicio:FechaInicio,opcion:"FechaTermino"},
}).done(function(data){
$("#"+id_date).val(data);
});
}

$("#FechaInicio").change(function(){
if($("#NumeroDias").val().trim()==''){
NumeroDias = 0;
}else{
NumeroDias = $("#NumeroDias").val();
}
FechaInicio = $("#FechaInicio").val();
id_date = "FechaTermino";
FechaSiguiente(NumeroDias,FechaInicio,id_date);
setTimeout(function(){
NumeroDias1 = 1;
FechaInicio1 = $("#FechaTermino").val();
id_date1 = "FechaRegreso";
FechaSiguiente(NumeroDias1,FechaInicio1,id_date1);
}, 150);
});
    
function FechaSiguiente(NumeroDias,FechaInicio,id_date){
$.ajax({
type:'POST',
url:'../controller/op_nom_vacaciones.php',
data:{NumeroDias:NumeroDias,FechaInicio:FechaInicio,opcion:"FechaTermino"},
}).done(function(data){
$("#"+id_date).val(data);
});
}

$(function(){
$("#buscar_empl_nom").autocomplete({
source:function(req,res){
$.ajax({
type:'POST',
url:'../controller/op_nom_catempleados.php',
dataType:"json",
data:{Empleado:req.term,opcion:"buscarempleado_nom",UsuarioID:$("#UsuarioID").val()},
success: function(info){
res(info);
}
});
},
focus: function(e,ui){
e.preventDefault();
$(this).val(ui.item.label);
},
select: function(e,ui){ 
e.preventDefault();
$(".Codigo").val(ui.item.value);
}
});
});

/*Validaciones de fechas*/
$("#FechaInicio").on("click",function(){
FechaActual  = $("#FechaActual").val(); 
$("#FechaInicio").attr("min",FechaActual);
});  
$("#FechaTermino").on("click",function(){ 
FechaInicio  = $("#FechaInicio").val();
$("#FechaTermino").attr("min",FechaInicio);
});
$("#FechaRegreso").on("click",function(){ 
FechaInicio  = $("#FechaInicio").val();
$("#FechaRegreso").attr("min",FechaInicio);
});
$("#FechaSolicitud").on("click",function(){
FechaActual  = $("#FechaActual").val(); 
$("#FechaSolicitud").attr("min",FechaActual);
});