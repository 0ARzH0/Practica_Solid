 $(".pass").on("keyup",function(){
     if($("#pass_1").val().trim() == $("#pass_2").val().trim()){
     $("#btn_add_user").show();
     }else{
     $("#btn_add_user").hide(); 
     }
     });

    $(function(){
    $("#buscar_usuario").autocomplete({
    source:function(req,res){
    $.ajax({
    type:'POST',
    url:'../controller/op_seg_catusuarios.php',
    dataType:"json",
    data:{Usuario:req.term,opcion:"buscarusuario"},
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
    $("#UsuarioID").val(ui.item.value);
    }
    });
    });
    
    $(function(){
    $("#buscar_agrupacion").autocomplete({
    source:function(req,res){
    $.ajax({
    type:'POST',
    url:'../controller/op_nom_catagrupaciones.php',
    dataType:"json",
    data:{Agrupacion:req.term,opcion:"buscar_agrupaciones"},
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
    $("#AgrupacionID").val(ui.item.value);

    $( "#mostrar_areas" ).load( "../controller/op_vistas.php", {AgrupacionID:$("#AgrupacionID").val(),opcion:"buscar_areas"}); 
    $( "#mostrar_deptos" ).load( "../controller/op_vistas.php", {AgrupacionID:$("#AgrupacionID").val(),opcion:"buscar_deptos"}); 
    
    }
    });
    });

    $(function(){
    $("#buscar_concepto").autocomplete({
    source:function(req,res){
    $.ajax({
    type:'POST',
    url:'../controller/op_nom_catconceptos.php',
    dataType:"json",
    data:{Concepto:req.term,opcion:"buscarconcepto_global"},
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
    $("#ConceptoID").val(ui.item.value);
    }
    });
    });

    $("#buscar_agrupacion").on("keyup",function(){
    if($("#buscar_agrupacion").val().trim()==''){
    $("#buscar_concepto").attr("readonly","");  
    $("#btn_agregar").hide();
    }else{
    $("#buscar_concepto").removeAttr("readonly",""); 
    $("#btn_agregar").show();
    }
    });