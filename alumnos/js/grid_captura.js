 $(".concepto").on("keyup",function(e){
     e.preventDefault(); 
       TipoNominaID = $("#TipoNominaID").val();
       PeriodoID = $("#PeriodoID").val();
       Codigo = $(this).attr("dir");
       detmov_id = $(this).attr("list");
       quienaprobo = $(this).attr("alt");
       UnidadImporte = $(this).attr("for");
       ConceptoID = $(this).attr("name");
       Valor = $(this).val();
       TipoUsuario = $("#TipoUsuario").val();
       UsuarioID = $("#UsuarioID").val();
      //alert("soy: "+TipoUsuario+" aprobo: "+quienaprobo);
      if(parseInt(TipoUsuario)==3 || parseInt(TipoUsuario) ==2){
       if(parseInt(TipoUsuario) < parseInt(quienaprobo)){
        alert("No tiene permiso de aprobar este concepto"); 
       }else{
         if (e.ctrlKey){
         if (e.keyCode == 65 || e.keyCode == 97) { // 'A' or 'a'
          e.preventDefault();
bootbox.confirm({
    message: "<h3 class='text-center'><span class='fa fa-question-circle'></span> ¿Realmente desea Aprobar el concepto?</h3>",
    buttons: {
        confirm:{
            label: 'APROBAR',
            className: 'btn-success'
        },
        cancel: {
            label: 'CANCELAR',
            className: 'btn-danger'
        }
    },
    callback: function (data) {
      if(data==true){
      aprobar(TipoUsuario,TipoNominaID,ConceptoID,PeriodoID,Codigo,detmov_id,UnidadImporte,Valor,UsuarioID);
      }
    }
})
        }
       }
       } 
     }
     });
 
     function aprobar(TipoUsuario,TipoNominaID,ConceptoID,PeriodoID,Codigo,detmov_id,UnidadImporte,Valor,UsuarioID){
        $.ajax({
         beforeSend: function(){
         $('#barra_proceso_2').modal({
         backdrop: 'static',
         keyboard: false,
         }); 
         },
        type: "POST",
        url: "../controller/op_nom_detmovnom.php",
        data: {Aprobado:TipoUsuario,TipoNominaID:TipoNominaID,ConceptoID:ConceptoID,PeriodoID:PeriodoID,Codigo:Codigo,detmov_id:detmov_id,UnidadImporte:UnidadImporte,Valor:Valor,AprobadoUsuarioID:UsuarioID,opcion:"aprobarconcepto"}, 
        cache: false,
        success: function(info){
        location.reload();
       }
       });
     }


     function guardarcambios(){
     //$("#guardarcambios").on("click",function(){
       var Codigos = [];
       var Valores = [];
       var ConcIDs = [];
       var Unidades_Importes = [];
       var CodigosJson;
       var ValoresJson;
       var ConceptoIDsJson;
       var UnidadesImportesJson;
       
       TipoNominaID = $("#TipoNominaID").val();
       PeriodoID = $("#PeriodoID").val();

        $( ".concepto" ).each(function( index ) {
         Codigos.push($(this).attr("dir"));
         Valores.push($(this).val());
         ConcIDs.push($(this).attr("name"));
         Unidades_Importes.push($(this).attr("for"));
         });

        CodigosJson = JSON.stringify(Codigos);
        ValoresJson = JSON.stringify(Valores);
        ConceptoIDsJson = JSON.stringify(ConcIDs);
        UnidadesImportesJson = JSON.stringify(Unidades_Importes);

       $.ajax({
         beforeSend: function(){
         $('#barra_proceso').modal({
         backdrop: 'static',
         keyboard: false,
         }); 
         },
        type: "POST",
        url: "../controller/op_nom_detmovnom.php",
        data: {UnidadesImportes:UnidadesImportesJson,ConceptoIDs:ConceptoIDsJson,Valores:ValoresJson,TipoNominaID:TipoNominaID,
             Codigos:CodigosJson,PeriodoID:PeriodoID,opcion:"agregarconceptos"}, 
        cache: false,
        success: function(info){
        location.reload();
       }
    });
    // });
     }
   
   
   /*bajar con enter*/
   $(".concepto").on("keyup",function(e){
    e.preventDefault();
   if(e.keyCode == 13) {
    var inputs = $(this).closest('#table_grid').find(':input:visible');
    inputs.eq( inputs.index(this) + parseInt($("#num_conc").val())).focus();
   }
   });
   

    $("#AgrupacionID").on("click change",function(e){
    e.preventDefault();
    $( "#ver_areas" ).load( "../controller/op_vistas.php",
    {AgrupacionID:$("#AgrupacionID").val(),UsuarioID:$("#UsuarioID").val(),opcion:"areasporagrupacion_grid"});
    });