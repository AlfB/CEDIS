var size = 0;

var styleCache_AGEBS={}
var style_AGEBS = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(12,195,140,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width:2.0}), fill: new ol.style.Fill({color: 'rgba(12,195,140,0.5)'})
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_AGEBS[key]){
        var text = new ol.style.Text({
              font: '10px \'None\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(None, None, None, 255)'
              }),
            });
        styleCache_AGEBS[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_AGEBS[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};