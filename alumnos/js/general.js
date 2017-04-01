
/*tooltips bootstrap*/
$(function () {
$('[data-toggle="tooltip"]').tooltip()
});

/*Cerrar sesion*/
$("#cerrarsesion").on("click",function(){
bootbox.confirm({
    message: "<h3 class='text-center'><span class='fa fa-sign-out'></span> ¿REALMENTE DESEA SALIR?</h3>",
    buttons: {
        confirm: {
            label: 'SALIR',
            className: 'btn-primary'
        },
        cancel: {
            label: 'CANCELAR',
            className: 'btn-default'
        }
    },
    callback: function (data) {
      if(data==true){
      window.location.href = "../controller/op_seg_catusuarios.php?opcion=salir";
      }
    }
});
});


/*Mostrar contraseña*/
$("#mostrar_pass").on("click",function(){
if( $('#mostrar_pass').prop('checked') ) {
$("#pass_actual").attr("type","text");
}else{
$("#pass_actual").attr("type","password");	
}
});

/*Cambio de contraseña*/
$("#mod_password").on("click",function(){
cambiapass();
});

function cambiapass(){
if( $('#mod_password').prop('checked') ) {
  $(".pass_nueva").show();
  $("#pass_actual").hide();
  $("#btn_guardar").hide();
  $("#pass_actual").removeAttr("name");
  $("#pass1").attr("name","Password");
  $("#pass1").attr("required","");
  $("#pass2").attr("required","");
}else{
  $(".pass_nueva").hide();
  $("#pass_actual").show();
  $("#btn_guardar").show();
  $("#pass1").removeAttr("name");
  $("#pass_actual").attr("name","Password");
  $("#pass1").removeAttr("required");
  $("#pass2").removeAttr("required");
}
}

$(".pass_ver").on("keyup",function(){
if($("#pass1").val().trim()=='' || $("#pass1").val().trim()==''){
$("#btn_guardar").hide();
}else if($("#pass1").val()==$("#pass2").val()){
$("#btn_guardar").show();
}else{
$("#btn_guardar").hide();
}
});

$("#mod_datos").on("click",function(){
if( $('#mod_datos').prop('checked') ) {
$(".edit_datos").removeAttr("readonly");
  $("#btn_guardar").show();
}else{
$(".edit_datos").attr("readonly","");
  $("#btn_guardar").hide();
}
});	


/*Buscar empleado por nombre*/
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

/*buscar empleado por codigo*/
$(function(){
$("#buscar_empl_cod").autocomplete({
source:function(req,res){
$.ajax({
type:'POST',
url:'../controller/op_nom_catempleados.php',
dataType:"json",
data:{Codigo:req.term,opcion:"buscarempleado_cod",UsuarioID:$("#UsuarioID").val()},
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

   
