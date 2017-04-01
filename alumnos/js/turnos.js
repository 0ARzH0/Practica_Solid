$("#form_add").on("submit",function(e){
    e.preventDefault();
      var diasdescanso = [];
      var entradas = [];
      var salidas = [];
      var entradasMD = [];
      var salidasMD = [];
      var RotaTurnoID = 0;
      var TurnoCortado = 0;
      var TraslapaTurno = 0;

    var AgrupacionID = $('#AgrupacionID_add').val(); 
    var Turno = $('input:text[name=Turno]').val();
    var UsuarioID = $("input:hidden[name=UsuarioID]").val();
    var FechaMod = $("input:hidden[name=FechaMod]").val();
    var UsuarioModID = $("input:hidden[name=UsuarioModID]").val();

    if($("input:checkbox[name=TraslapaTurno]").is(":checked")){
    TraslapaTurno = 1;
    }else{
    TraslapaTurno = 0;
    }
    $( ".diasdescanso" ).each(function( i ) {
    if($(this).is(":checked")){
    //diasdescanso.push($(this).val()); 
    diasdescanso.push(1);
    }else{
    diasdescanso.push(0);   
    }  
    });
    $( ".entradas" ).each(function( i ) {
    entradas.push($(this).val());
    });
    $( ".salidas" ).each(function( i ) {
    salidas.push($(this).val());
    });
    if($("input:checkbox[name=TurnoCortado]").is(":checked")){
    TurnoCortado = 1; 
    $( ".entradasMD" ).each(function( i ) {
    entradasMD.push($(this).val());
    });
    $( ".salidasMD" ).each(function( i ) {
    salidasMD.push($(this).val());
    });
    }else{
    TurnoCortado = 0;  
    }
    if($("input:checkbox[name=RotaTurno]").is(":checked")){
    RotaTurnoID = $("#RotaTurnoID").val();
    }else{
    RotaTurnoID = 0;
    }
    var diasdescansojson = JSON.stringify(diasdescanso);
    var entradasjson = JSON.stringify(entradas);
    var salidasjson = JSON.stringify(salidas);
    var entradasMDjson = JSON.stringify(entradasMD);
    var salidasMDjson = JSON.stringify(salidasMD);

        $.ajax({
        beforeSend: function(){
/*      $('#barra_proceso_2').modal({
         backdrop: 'static',
         keyboard: false,
         }); */
         },
        type: "POST",
        url: "../controller/op_bit_catturnos.php",
        data: {diasdescansojson:diasdescansojson,entradasjson:entradasjson,salidasjson:salidasjson,entradasMDjson:entradasMDjson,salidasMDjson:salidasMDjson,UsuarioID:UsuarioID,Turno:Turno,AgrupacionID:AgrupacionID,RotaTurnoID:RotaTurnoID,TurnoCortado:TurnoCortado,TraslapaTurno:TraslapaTurno,FechaMod:FechaMod,UsuarioModID:UsuarioModID,opcion:"agregarturnos"}, 
        cache: false,
        success: function(info){
        window.location.href = "verturnos.php?msj=7";
        },
        error: function(info){
        window.location.href = "verturnos.php?msj=45";
        }
       });
    });
      $("#rotaturno").on("click",function(){
      if($("#rotaturno").is(":checked")){
       $("#verturnos").show();
      }else{
       $("#verturnos").hide(); 
      }
      });
      $("#turnocortado").on("click",function(){
     if($("#turnocortado").is(":checked")){
       $(".horarioMD").show();
       $(".HMD").attr("required","");
     }else{
       $(".horarioMD").hide();
       $(".HMD").removeAttr("required","");
     }
      });
