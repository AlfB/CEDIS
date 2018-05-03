var size = 0;

var styleCache_LocalidadesUrbanas={}
var style_LocalidadesUrbanas = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(241,108,12,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.5}), fill: new ol.style.Fill({color: 'rgba(241,108,12,0.5)'})
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_LocalidadesUrbanas[key]){
        var text = new ol.style.Text({
              font: '10.725px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_LocalidadesUrbanas[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_LocalidadesUrbanas[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};