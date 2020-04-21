window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.maps = window.blockly.js.blockly.maps || {};
window.blockly.js.blockly.maps.MeuLocal = window.blockly.js.blockly.maps.MeuLocal || {};

/**
 * MeuLocal
 */
window.blockly.js.blockly.maps.MeuLocal.obterCoordenadas = function() {
 var item, meuLocal;
  this.cronapi.cordova.geolocation.getCurrentPosition(function(sender_meuLocal) {
      meuLocal = sender_meuLocal;
    this.cronapi.screen.changeValueOfField("vars.lat", this.cronapi.object.getProperty(meuLocal, 'coords.latitude'));
    this.cronapi.screen.changeValueOfField("vars.long", this.cronapi.object.getProperty(meuLocal, 'coords.longitude'));
  }.bind(this), function(sender_meuLocal) {
      meuLocal = sender_meuLocal;
    this.cronapi.screen.notify('error','Não foi possível obter as coordenadas');
  }.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.maps.MeuLocal.desenharMapa = function() {
 var item, meuLocal;
  meuLocal = this.cronapi.maps.createLatLngPoint(this.cronapi.screen.getValueOfField("vars.lat"), this.cronapi.screen.getValueOfField("vars.long"));
  this.cronapi.maps.init("map9820", 'roadmap', meuLocal, '16', function(sender_item) {
      item = sender_item;
    this.cronapi.maps.createMarker("map9820", 'meulocal', 'Você está aqui!', meuLocal, '', 'Você está aqui!', '');
  }.bind(this));
}
