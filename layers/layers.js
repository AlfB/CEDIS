var baseLayer = new ol.layer.Group({
    'title': 'Mapas Base',
    layers: [
new ol.layer.Tile({
    title: 'Bing Map',
    type: 'base',
    visible: true,
	preload: Infinity,
    source: new ol.source.BingMaps({
	key: 'wdvbUCv1pWhiH1XLhtEL~V6uaPy7pIDe8TtJfS7RXrw~AnSHqcr4ZiPTV2oeeohrEIGkIMT6FwU2U0uaZIXT3RcMbDnom-SCMWv3o94MuyxL',
	imagerySet: 'AerialWithLabels',
	maxZoom: 19 
					})
                        }),
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});

var format_CEDIS = new ol.format.GeoJSON();
var features_CEDIS = format_CEDIS.readFeatures(geojson_CEDIS, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CEDIS = new ol.source.Vector();
jsonSource_CEDIS.addFeatures(features_CEDIS);var lyr_CEDIS = new ol.layer.Vector({
                source:jsonSource_CEDIS, 
                style: style_CEDIS,
                title: '<img src="styles/legend/icon-home.png" /> CEDIS'
            });var format_AGEBS = new ol.format.GeoJSON();
var features_AGEBS = format_AGEBS.readFeatures(geojson_AGEBS, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGEBS = new ol.source.Vector();
jsonSource_AGEBS.addFeatures(features_AGEBS);var lyr_AGEBS = new ol.layer.Vector({
                source:jsonSource_AGEBS, 
                style: style_AGEBS,
                title: '<img src="styles/legend/AGEBS_EDOMEX_3.png" /> AGEBS'
            });var format_LocalidadesRurales = new ol.format.GeoJSON();
var features_LocalidadesRurales = format_LocalidadesRurales.readFeatures(geojson_LocalidadesRurales, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalidadesRurales = new ol.source.Vector();
jsonSource_LocalidadesRurales.addFeatures(features_LocalidadesRurales);var lyr_LocalidadesRurales = new ol.layer.Vector({
                source:jsonSource_LocalidadesRurales, 
                style: style_LocalidadesRurales,
                title: '<img src="styles/legend/loc_rurales_2.png" /> Localidades Rurales'
            });var format_LocalidadesUrbanas = new ol.format.GeoJSON();
var features_LocalidadesUrbanas = format_LocalidadesUrbanas.readFeatures(geojson_LocalidadesUrbanas, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalidadesUrbanas = new ol.source.Vector();
jsonSource_LocalidadesUrbanas.addFeatures(features_LocalidadesUrbanas);var lyr_LocalidadesUrbanas = new ol.layer.Vector({
                source:jsonSource_LocalidadesUrbanas, 
                style: style_LocalidadesUrbanas,
                title: '<img src="styles/legend/loc_urbanas_1.png" /> Localidades Urbanas'
            });var format_Regiones = new ol.format.GeoJSON();
var features_Regiones = format_Regiones.readFeatures(geojson_Regiones, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regiones = new ol.source.Vector();
jsonSource_Regiones.addFeatures(features_Regiones);var lyr_Regiones = new ol.layer.Vector({
                source:jsonSource_Regiones, 
                style: style_Regiones,
                title: 'Regiones<br />\
    <img src="styles/legend/reg_mun_3_0_0.png" /> AMECAMECA<br />\
    <img src="styles/legend/reg_mun_3_0_1.png" /> ATLACOMULCO<br />\
    <img src="styles/legend/reg_mun_3_0_2.png" /> CHIMALHUACAN<br />\
    <img src="styles/legend/reg_mun_3_0_3.png" /> CUAUTITLAN IZCALLI<br />\
    <img src="styles/legend/reg_mun_3_0_4.png" /> ECATEPEC<br />\
    <img src="styles/legend/reg_mun_3_0_5.png" /> IXTLAHUACA<br />\
    <img src="styles/legend/reg_mun_3_0_6.png" /> LERMA<br />\
    <img src="styles/legend/reg_mun_3_0_7.png" /> METEPEC<br />\
    <img src="styles/legend/reg_mun_3_0_8.png" /> NAUCALPAN<br />\
    <img src="styles/legend/reg_mun_3_0_9.png" /> NEZAHUALCOYOTL<br />\
    <img src="styles/legend/reg_mun_3_0_10.png" /> OTUMBA<br />\
    <img src="styles/legend/reg_mun_3_0_11.png" /> TEJUPILCO<br />\
    <img src="styles/legend/reg_mun_3_0_12.png" /> TENANCINGO<br />\
    <img src="styles/legend/reg_mun_3_0_13.png" /> TEPOTZOTLAN<br />\
    <img src="styles/legend/reg_mun_3_0_14.png" /> TEXCOCO<br />\
    <img src="styles/legend/reg_mun_3_0_15.png" /> TLALNEPANTLA<br />\
    <img src="styles/legend/reg_mun_3_0_16.png" /> TOLUCA<br />\
    <img src="styles/legend/reg_mun_3_0_17.png" /> TULTITLAN<br />\
    <img src="styles/legend/reg_mun_3_0_18.png" /> VALLE DE BRAVO<br />\
    <img src="styles/legend/reg_mun_3_0_19.png" /> ZUMPANGO<br />'			
            });var format_Municipios = new ol.format.GeoJSON();
var features_Municipios = format_Municipios.readFeatures(geojson_Municipios, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios = new ol.source.Vector();
jsonSource_Municipios.addFeatures(features_Municipios);var lyr_Municipios = new ol.layer.Vector({
                source:jsonSource_Municipios, 
                style: style_Municipios,
                title: "Municipios"
            });


			
lyr_Municipios.setVisible(false);lyr_CEDIS.setVisible(false);lyr_AGEBS.setVisible(false);lyr_LocalidadesRurales.setVisible(false);lyr_LocalidadesUrbanas.setVisible(false);lyr_Regiones.setVisible(true);
var layersList = [baseLayer,lyr_CEDIS,lyr_AGEBS,lyr_LocalidadesRurales,lyr_LocalidadesUrbanas,lyr_Regiones];
lyr_CEDIS.set('fieldAliases', {'GID': 'GID', 'REGION': 'REGION', 'CVE_MUNICIPIO': 'CVE_MUNICIPIO', 'CVE_CEDIS': 'CVE_CEDIS', 'MUNICIPIO': 'MUNICIPIO', 'CEDIS': 'CEDIS', 'DOMICILIO': 'DOMICILIO', 'TELEFONO': 'TELEFONO', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', });
lyr_AGEBS.set('fieldAliases', {'CVE_ENT': 'CVE_ENT', 'CVE_LOC': 'CVE_LOC', 'CVE_MUN': 'CVE_MUN', 'CVE_AGEB': 'CVE_AGEB', });
lyr_LocalidadesRurales.set('fieldAliases', {'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'CVE_LOC': 'CVE_LOC', 'NOM_LOC': 'NOM_LOC', 'CLAVE_LOC': 'CLAVE_LOC', });
lyr_LocalidadesUrbanas.set('fieldAliases', {'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'CVE_LOC': 'CVE_LOC', 'NOMLOC': 'NOMLOC', 'CLAVE_LOC': 'CLAVE_LOC', });
lyr_Regiones.set('fieldAliases', {'GID': 'GID','CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'CLAVEMUN': 'CLAVEMUN', 'NOM_MUN': 'NOM_MUN', 'TOTAL_MUN': 'TOTAL_MUN', 'REGION_NOM': 'REGION_NOM', 'REGION': 'REGION', 'TOTAL_REG': 'TOTAL_REG', });
lyr_Municipios.set('fieldAliases', {'CVE_ENT': 'CVE_ENT', 'NOM_MUN': 'NOM_MUN', 'CVE_MUN': 'CVE_MUN', 'ClaveMun': 'ClaveMun', });
lyr_CEDIS.set('fieldImages', {'GID': 'TextEdit','REGION': 'TextEdit', 'CVE_MUNICIPIO': 'TextEdit', 'CVE_CEDIS': 'TextEdit',  'MUNICIPIO': 'TextEdit', 'CEDIS': 'TextEdit', 'DOMICILIO': 'TextEdit', 'TELEFONO': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_AGEBS.set('fieldImages', {'CVE_ENT': 'TextEdit', 'CVE_LOC': 'TextEdit', 'CVE_MUN': 'TextEdit', 'CVE_AGEB': 'TextEdit', });
lyr_LocalidadesRurales.set('fieldImages', {'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'CVE_LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'CLAVE_LOC': 'TextEdit', });
lyr_LocalidadesUrbanas.set('fieldImages', {'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'CVE_LOC': 'TextEdit', 'NOMLOC': 'TextEdit', 'CLAVE_LOC': 'TextEdit', });
lyr_Regiones.set('fieldImages', {'GID': 'TextEdit','CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'CLAVEMUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'TOTAL_MUN': 'TextEdit', 'REGION_NOM': 'TextEdit', 'REGION': 'TextEdit', 'TOTAL_REG': 'TextEdit', });
lyr_Municipios.set('fieldImages', {'CVE_ENT': 'TextEdit', 'NOM_MUN': 'TextEdit', 'CVE_MUN': 'TextEdit', 'ClaveMun': 'TextEdit', });
lyr_CEDIS.set('fieldLabels', {'GID': 'inline label','REGION': 'inline label','CVE_MUNICIPIO': 'inline label' ,'CVE_CEDIS': 'inline label', 'MUNICIPIO': 'inline label', 'CEDIS': 'inline label', 'DOMICILIO': 'inline label', 'TELEFONO': 'inline label', 'LATITUD': 'inline label', 'LONGITUD': 'inline label', });
lyr_AGEBS.set('fieldLabels', {'CVE_ENT': 'inline label', 'CVE_LOC': 'inline label', 'CVE_MUN': 'inline label', 'CVE_AGEB': 'inline label', });
lyr_LocalidadesRurales.set('fieldLabels', {'CVE_ENT': 'inline label', 'CVE_MUN': 'inline label', 'CVE_LOC': 'inline label', 'NOM_LOC': 'inline label', 'CLAVE_LOC': 'inline label', });
lyr_LocalidadesUrbanas.set('fieldLabels', {'CVE_ENT': 'inline label', 'CVE_MUN': 'inline label', 'CVE_LOC': 'inline label', 'NOMLOC': 'inline label', 'CLAVE_LOC': 'inline label', });
lyr_Regiones.set('fieldLabels', {'GID': 'inline label','CVE_ENT': 'inline label', 'CVE_MUN': 'inline label', 'CLAVEMUN': 'inline label', 'NOM_MUN': 'inline label', 'TOTAL_MUN': 'no label', 'REGION_NOM': 'inline label', 'REGION': 'inline label', 'TOTAL_REG': 'no label', 'GID': 'inline label', });
lyr_Municipios.set('fieldLabels', {'CVE_ENT': 'inline label', 'NOM_MUN': 'inline label', 'CVE_MUN': 'inline label', 'ClaveMun': 'inline label', });
lyr_Regiones.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});