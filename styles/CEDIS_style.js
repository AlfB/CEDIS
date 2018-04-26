var size = 0;

var styleCache_CEDIS={}
var style_CEDIS = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({radius: 6.4 + size,
            /*stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(51,160,44,1.0)'}),*/
			src:'img/icon-home.png'
			})
    })];	
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_CEDIS[key]){
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
        styleCache_CEDIS[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_CEDIS[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};