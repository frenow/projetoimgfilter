function readURL(input) {
	 $('#errors').html('');
     for(var i =0; i< input.files.length; i++){
         if (input.files[i]) {
            var reader = new FileReader();

            reader.onload = function (e) {
               var img = $('<img id="dynamic">');
               img.attr('src', e.target.result);
               img.attr('id', 'img_ori');
               img.appendTo('#form1');  
            }
            reader.readAsDataURL(input.files[i]);
           }
		   else {
				$('#errors').append('<p>Imagem não encontrada, escolha a imagem.</p>');
		   }
        }
    }

    $("#imgUpload").change(function(){
        readURL(this);
    });
	
	export { readURL } 