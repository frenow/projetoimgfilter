//
//
function FileFrame(fileArea, fileTitle="sem_nome.jpg") {
  var self = this;

  this.fileArea = fileArea;
  this.fileTitle = fileTitle;
//uso de arrow function
//  this.init = function() {
  this.init = () => {
    // Registrando eventos de drag and drop
    self.fileArea.addEventListener("dragleave", self.dragHover, false);
    self.fileArea.addEventListener("dragover", self.dragHover, false);
    self.fileArea.addEventListener("drop", self.drop, false);
 
  };
//inclusao de arrow function
//  this.dragHover = function(e) {
  this.dragHover = (e) => {
    // Impede possíveis tratamentos dos arquivos
    // arrastados pelo navegador, por exemplo, exibir
    // o conteudo do mesmo.
    e.stopPropagation();  
    e.preventDefault();  

    // Quando o arquivo está sobre área alteramos o seu estilo
    self.fileArea.className = (e.type == "dragover" ? "hover" : "");  
  };

//inclusao de arrow function
//  this.drop = function(e) {
  this.drop = (e) => {
    self.dragHover(e);  

    // Volta um array com os arquivos arratados,
    // porém neste exemplo iremos tratar apenas
    // o primeiro arquivo
    self.file = e.dataTransfer.files[0];  
   
    // Recupera nome do arquivo
    self.fileTitle.innerHTML = self.file.name;


    self.read(self.file);
    
    // Neste ponto podemos implementar uma função para
    // enviar os arquivos via ajax.
    // Irei deixar um exemplo, qualquer dúvida eu peço
    // que utilize o sistema de comentários do site.
    /*
    self.sendFile(self.file);
    */
  };
//uso de arrow function
  // Esse método irá ler o arquivo na memória,
  // depois iremos mostrá-lo no nosso frame
//  this.read = function(file) {
  this.read = (file) => {
    // Iremos ler apenas imagens nesse exemplo
    // e iremos exibi-lo no frame
    if (file.type.match('image.*')) {
      let reader = new FileReader();

      // Callback que será executado após a leitura do arquivo
        reader.onload = function(f) {
          self.fileArea.innerHTML = "";
          self.fileArea.setAttribute("style", `padding: 0px !important;
		                                       border-radius: 20px;
											   border: 1px solid #ddd;`);
        
          // Criação do elemento que será utilizado para exibir a imagem
          let img = document.createElement("img");
          img.setAttribute("id", "img_ori");
          img.setAttribute("src", f.target.result);
          //img.setAttribute("height", "350");

          self.fileArea.appendChild(img);
        }

      // Irá ler o arquivo para ser acessado através de uma url
      reader.readAsDataURL(file);
    }
  }
//uso de arrow function
  // Essa função pode ser utilizada como 
//  this.sendFile = function(file) {
  this.sendFile = (file) => {

    // Criaremos um formulário
    const f = new FormData();
    // Passando o arquivo para o formulário
    f.append("file", file);

    // Chamada async para realizar o upload da imagem
    var request = new XMLHttpRequest();
    request.open("POST", "", true);
    request.send(f);
//    request.onreadystatechange=function(){
    request.onreadystatechange=() => {
      // Término do envio do formulário
      if(request.readyState==4) {
      }
    }
  };
}

// Recupera a div que conterá a imagem
// e o span com o título de nosso arquivo
const area = document.getElementById("image-area");
const title = document.getElementById("title");

const fileFrameArea = new FileFrame(area, title);
fileFrameArea.init();
