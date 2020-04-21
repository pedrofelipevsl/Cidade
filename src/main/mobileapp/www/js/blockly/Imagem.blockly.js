window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Imagem = window.blockly.js.blockly.Imagem || {};

/**
 * Imagem
 */
window.blockly.js.blockly.Imagem.ObterFotoMobile = function() {
 var item, enderecoImagem, idAtual, x;
  this.cronapi.cordova.camera.getPicture(function(sender_enderecoImagem) {
      enderecoImagem = sender_enderecoImagem;
    this.cronapi.cordova.file.readFile(enderecoImagem, function(sender_item) {
        item = sender_item;
      this.cronapi.screen.notify('success',enderecoImagem);
    }.bind(this), function(sender_item) {
        item = sender_item;
    }.bind(this), 'ARRAYBUFFER');
  }.bind(this), function(sender_item) {
      item = sender_item;
  }.bind(this), '0', '1', '0', 'false');
}
