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

var lyr_CEDIS_5km = new ol.layer.Image({
                            opacity: 0.8,
                            title: "CEDIS_5km",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CEDIS_5km.png",
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [472, 500],
                                imageExtent: [-11184482.798400, 2079152.385694, -10983152.599141, 2305156.468612]
                            })
                        });var lyr_CEDIS_10km = new ol.layer.Image({
                            opacity: 0.8,
                            title: "CEDIS_10km",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CEDIS_10km.png",
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [474, 500],
                                imageExtent: [-11189516.490752, 2073849.560878, -10977770.190716, 2310544.804374]
                            })
                        });var lyr_CEDIS_15km = new ol.layer.Image({
                            opacity: 0.8,
                            title: "CEDIS_15km",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CEDIS_15km.png",
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [475, 500],
                                imageExtent: [-11194550.183104, 2068548.120752, -10972773.979084, 2315934.721118]
                            })
                        });var lyr_CEDIS_20km = new ol.layer.Image({
                            opacity: 0.8,
                            title: "CEDIS_20km",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CEDIS_20km.png",
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [476, 500],
                                imageExtent: [-11199583.875455, 2063248.061292, -10967737.417213, 2321326.223156]
                            })
                        });var format_CEDIS = new ol.format.GeoJSON();
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
                title: '<img src="styles/legend/AGEBS_EDOMEX_3.png" /> AGEBS_EDOMEX'
            });var format_LocalidadesRurales = new ol.format.GeoJSON();
var features_LocalidadesRurales = format_LocalidadesRurales.readFeatures(geojson_LocalidadesRurales, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalidadesRurales = new ol.source.Vector();
jsonSource_LocalidadesRurales.addFeatures(features_LocalidadesRurales);var lyr_LocalidadesRurales = new ol.layer.Vector({
                source:jsonSource_LocalidadesRurales, 
                style: style_LocalidadesRurales,
                title: '<img src="styles/legend/loc_rurales_2.png" /> loc_rurales'
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

var group_group1 = new ol.layer.Group({
                                layers: [lyr_CEDIS_5km,lyr_CEDIS_10km,lyr_CEDIS_15km,lyr_CEDIS_20km,lyr_Municipios],
                                title: "Mapas de Calor"});
			
lyr_Municipios.setVisible(false);lyr_CEDIS_5km.setVisible(false);lyr_CEDIS_10km.setVisible(false);lyr_CEDIS_15km.setVisible(false);lyr_CEDIS_20km.setVisible(false);lyr_CEDIS.setVisible(false);lyr_AGEBS.setVisible(false);lyr_LocalidadesRurales.setVisible(false);lyr_LocalidadesUrbanas.setVisible(false);lyr_Regiones.setVisible(true);
var layersList = [baseLayer,group_group1,lyr_CEDIS,lyr_AGEBS,lyr_LocalidadesRurales,lyr_LocalidadesUrbanas,lyr_Regiones];
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