var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DESA_PATIMUAN_1 = new ol.format.GeoJSON();
var features_DESA_PATIMUAN_1 = format_DESA_PATIMUAN_1.readFeatures(json_DESA_PATIMUAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DESA_PATIMUAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DESA_PATIMUAN_1.addFeatures(features_DESA_PATIMUAN_1);
var lyr_DESA_PATIMUAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DESA_PATIMUAN_1, 
                style: style_DESA_PATIMUAN_1,
                popuplayertitle: "DESA_PATIMUAN",
                interactive: true,
    title: 'DESA_PATIMUAN<br />\
    <img src="styles/legend/DESA_PATIMUAN_1_0.png" /> RW 1<br />\
    <img src="styles/legend/DESA_PATIMUAN_1_1.png" /> RW 10<br />\
    <img src="styles/legend/DESA_PATIMUAN_1_2.png" /> RW 11<br />\
    <img src="styles/legend/DESA_PATIMUAN_1_3.png" /> RW 12<br />\
    <img src="styles/legend/DESA_PATIMUAN_1_4.png" /> RW 13<br />\
    <img src="styles/legend/DESA_PATIMUAN_1_5.png" /> RW 14<br />\
    <img src="styles/legend/DESA_PATIMUAN_1_6.png" /> RW 2<br />\
    <img src="styles/legend/DESA_PATIMUAN_1_7.png" /> RW 3<br />\
    <img src="styles/legend/DESA_PATIMUAN_1_8.png" /> RW 4<br />\
    <img src="styles/legend/DESA_PATIMUAN_1_9.png" /> RW 5<br />\
    <img src="styles/legend/DESA_PATIMUAN_1_10.png" /> RW 6<br />\
    <img src="styles/legend/DESA_PATIMUAN_1_11.png" /> RW 7<br />\
    <img src="styles/legend/DESA_PATIMUAN_1_12.png" /> RW 8<br />\
    <img src="styles/legend/DESA_PATIMUAN_1_13.png" /> RW 9<br />\
    <img src="styles/legend/DESA_PATIMUAN_1_14.png" /> <br />'
        });
var format_Kebun_2 = new ol.format.GeoJSON();
var features_Kebun_2 = format_Kebun_2.readFeatures(json_Kebun_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kebun_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kebun_2.addFeatures(features_Kebun_2);
var lyr_Kebun_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kebun_2, 
                style: style_Kebun_2,
                popuplayertitle: "Kebun",
                interactive: true,
                title: '<img src="styles/legend/Kebun_2.png" /> Kebun'
            });
var format_Ladang_3 = new ol.format.GeoJSON();
var features_Ladang_3 = format_Ladang_3.readFeatures(json_Ladang_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ladang_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ladang_3.addFeatures(features_Ladang_3);
var lyr_Ladang_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ladang_3, 
                style: style_Ladang_3,
                popuplayertitle: "Ladang",
                interactive: true,
                title: '<img src="styles/legend/Ladang_3.png" /> Ladang'
            });
var format_Sawah_4 = new ol.format.GeoJSON();
var features_Sawah_4 = format_Sawah_4.readFeatures(json_Sawah_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sawah_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_4.addFeatures(features_Sawah_4);
var lyr_Sawah_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sawah_4, 
                style: style_Sawah_4,
                popuplayertitle: "Sawah",
                interactive: true,
                title: '<img src="styles/legend/Sawah_4.png" /> Sawah'
            });
var format_Irigasi_5 = new ol.format.GeoJSON();
var features_Irigasi_5 = format_Irigasi_5.readFeatures(json_Irigasi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Irigasi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Irigasi_5.addFeatures(features_Irigasi_5);
var lyr_Irigasi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Irigasi_5, 
                style: style_Irigasi_5,
                popuplayertitle: "Irigasi",
                interactive: true,
                title: '<img src="styles/legend/Irigasi_5.png" /> Irigasi'
            });
var format_Sier_6 = new ol.format.GeoJSON();
var features_Sier_6 = format_Sier_6.readFeatures(json_Sier_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sier_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sier_6.addFeatures(features_Sier_6);
var lyr_Sier_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sier_6, 
                style: style_Sier_6,
                popuplayertitle: "Sier",
                interactive: true,
                title: '<img src="styles/legend/Sier_6.png" /> Sier'
            });
var format_Sungai_7 = new ol.format.GeoJSON();
var features_Sungai_7 = format_Sungai_7.readFeatures(json_Sungai_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_7.addFeatures(features_Sungai_7);
var lyr_Sungai_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_7, 
                style: style_Sungai_7,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_7.png" /> Sungai'
            });
var format_Jalan_8 = new ol.format.GeoJSON();
var features_Jalan_8 = format_Jalan_8.readFeatures(json_Jalan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_8.addFeatures(features_Jalan_8);
var lyr_Jalan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_8, 
                style: style_Jalan_8,
                popuplayertitle: "Jalan",
                interactive: true,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_8_0.png" /> 2<br />\
    <img src="styles/legend/Jalan_8_1.png" /> 3<br />\
    <img src="styles/legend/Jalan_8_2.png" /> 4<br />\
    <img src="styles/legend/Jalan_8_3.png" /> 6<br />\
    <img src="styles/legend/Jalan_8_4.png" /> <br />'
        });
var format_jl_9 = new ol.format.GeoJSON();
var features_jl_9 = format_jl_9.readFeatures(json_jl_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jl_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jl_9.addFeatures(features_jl_9);
var lyr_jl_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jl_9, 
                style: style_jl_9,
                popuplayertitle: "jl",
                interactive: true,
    title: 'jl<br />\
    <img src="styles/legend/jl_9_0.png" /> <br />\
    <img src="styles/legend/jl_9_1.png" /> 2<br />\
    <img src="styles/legend/jl_9_2.png" /> 3<br />'
        });
var format_Makam_10 = new ol.format.GeoJSON();
var features_Makam_10 = format_Makam_10.readFeatures(json_Makam_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Makam_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Makam_10.addFeatures(features_Makam_10);
var lyr_Makam_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Makam_10, 
                style: style_Makam_10,
                popuplayertitle: "Makam",
                interactive: true,
                title: '<img src="styles/legend/Makam_10.png" /> Makam'
            });
var format_lapangan_11 = new ol.format.GeoJSON();
var features_lapangan_11 = format_lapangan_11.readFeatures(json_lapangan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lapangan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lapangan_11.addFeatures(features_lapangan_11);
var lyr_lapangan_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lapangan_11, 
                style: style_lapangan_11,
                popuplayertitle: "lapangan",
                interactive: true,
                title: '<img src="styles/legend/lapangan_11.png" /> lapangan'
            });
var format_polybangunan_12 = new ol.format.GeoJSON();
var features_polybangunan_12 = format_polybangunan_12.readFeatures(json_polybangunan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polybangunan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polybangunan_12.addFeatures(features_polybangunan_12);
var lyr_polybangunan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polybangunan_12, 
                style: style_polybangunan_12,
                popuplayertitle: "polybangunan",
                interactive: true,
                title: '<img src="styles/legend/polybangunan_12.png" /> polybangunan'
            });
var format_Pend_13 = new ol.format.GeoJSON();
var features_Pend_13 = format_Pend_13.readFeatures(json_Pend_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pend_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pend_13.addFeatures(features_Pend_13);
var lyr_Pend_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pend_13, 
                style: style_Pend_13,
                popuplayertitle: "Pend",
                interactive: true,
                title: '<img src="styles/legend/Pend_13.png" /> Pend'
            });
var format_Wirausaha_14 = new ol.format.GeoJSON();
var features_Wirausaha_14 = format_Wirausaha_14.readFeatures(json_Wirausaha_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wirausaha_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wirausaha_14.addFeatures(features_Wirausaha_14);
var lyr_Wirausaha_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wirausaha_14, 
                style: style_Wirausaha_14,
                popuplayertitle: "Wirausaha",
                interactive: true,
                title: '<img src="styles/legend/Wirausaha_14.png" /> Wirausaha'
            });
var format_kes_15 = new ol.format.GeoJSON();
var features_kes_15 = format_kes_15.readFeatures(json_kes_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kes_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kes_15.addFeatures(features_kes_15);
var lyr_kes_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kes_15, 
                style: style_kes_15,
                popuplayertitle: "kes",
                interactive: true,
                title: '<img src="styles/legend/kes_15.png" /> kes'
            });
var format_mrt_16 = new ol.format.GeoJSON();
var features_mrt_16 = format_mrt_16.readFeatures(json_mrt_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mrt_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mrt_16.addFeatures(features_mrt_16);
var lyr_mrt_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mrt_16, 
                style: style_mrt_16,
                popuplayertitle: "mrt",
                interactive: true,
                title: '<img src="styles/legend/mrt_16.png" /> mrt'
            });
var format_pom_17 = new ol.format.GeoJSON();
var features_pom_17 = format_pom_17.readFeatures(json_pom_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pom_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pom_17.addFeatures(features_pom_17);
var lyr_pom_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pom_17, 
                style: style_pom_17,
                popuplayertitle: "pom",
                interactive: true,
                title: '<img src="styles/legend/pom_17.png" /> pom'
            });
var format_instnsi_18 = new ol.format.GeoJSON();
var features_instnsi_18 = format_instnsi_18.readFeatures(json_instnsi_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_instnsi_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_instnsi_18.addFeatures(features_instnsi_18);
var lyr_instnsi_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_instnsi_18, 
                style: style_instnsi_18,
                popuplayertitle: "instnsi",
                interactive: true,
                title: '<img src="styles/legend/instnsi_18.png" /> instnsi'
            });
var format_tmptIbadah_19 = new ol.format.GeoJSON();
var features_tmptIbadah_19 = format_tmptIbadah_19.readFeatures(json_tmptIbadah_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tmptIbadah_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tmptIbadah_19.addFeatures(features_tmptIbadah_19);
var lyr_tmptIbadah_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tmptIbadah_19, 
                style: style_tmptIbadah_19,
                popuplayertitle: "tmptIbadah",
                interactive: true,
                title: '<img src="styles/legend/tmptIbadah_19.png" /> tmptIbadah'
            });
var group_jalan = new ol.layer.Group({
                                layers: [lyr_Jalan_8,lyr_jl_9,],
                                fold: "open",
                                title: "jalan"});

lyr_OpenStreetMap_0.setVisible(true);lyr_DESA_PATIMUAN_1.setVisible(true);lyr_Kebun_2.setVisible(true);lyr_Ladang_3.setVisible(true);lyr_Sawah_4.setVisible(true);lyr_Irigasi_5.setVisible(true);lyr_Sier_6.setVisible(true);lyr_Sungai_7.setVisible(true);lyr_Jalan_8.setVisible(true);lyr_jl_9.setVisible(true);lyr_Makam_10.setVisible(true);lyr_lapangan_11.setVisible(true);lyr_polybangunan_12.setVisible(true);lyr_Pend_13.setVisible(true);lyr_Wirausaha_14.setVisible(true);lyr_kes_15.setVisible(true);lyr_mrt_16.setVisible(true);lyr_pom_17.setVisible(true);lyr_instnsi_18.setVisible(true);lyr_tmptIbadah_19.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DESA_PATIMUAN_1,lyr_Kebun_2,lyr_Ladang_3,lyr_Sawah_4,lyr_Irigasi_5,lyr_Sier_6,lyr_Sungai_7,group_jalan,lyr_Makam_10,lyr_lapangan_11,lyr_polybangunan_12,lyr_Pend_13,lyr_Wirausaha_14,lyr_kes_15,lyr_mrt_16,lyr_pom_17,lyr_instnsi_18,lyr_tmptIbadah_19];
lyr_DESA_PATIMUAN_1.set('fieldAliases', {'fid': 'fid', 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', 'RW': 'RW', 'RT': 'RT', 'RT/RW': 'RT/RW', });
lyr_Kebun_2.set('fieldAliases', {'id': 'id', });
lyr_Ladang_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSLDG': 'JNSLDG', 'TNMLDG': 'TNMLDG', 'TIPLDG': 'TIPLDG', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Sawah_4.set('fieldAliases', {'id': 'id', });
lyr_Irigasi_5.set('fieldAliases', {'id': 'id', });
lyr_Sier_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Sungai_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Jalan_8.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'REMARK': 'REMARK', 'LCODE': 'LCODE', 'SHAPE_Leng': 'SHAPE_Leng', 'lebar': 'lebar', 'NamaJalan': 'NamaJalan', });
lyr_jl_9.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'layer': 'layer', 'lebar': 'lebar', 'NamaJalan': 'NamaJalan', });
lyr_Makam_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_lapangan_11.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_polybangunan_12.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'layer': 'layer', 'tourism': 'tourism', 'health_fac': 'health_fac', 'office': 'office', 'tunnel': 'tunnel', 'man_made': 'man_made', 'aeroway': 'aeroway', 'capacity': 'capacity', 'parking': 'parking', 'staff_coun': 'staff_coun', 'roof_mater': 'roof_mater', 'addr_house': 'addr_house', 'width': 'width', 'military': 'military', 'covered': 'covered', 'building': 'building', 'isced_leve': 'isced_leve', 'operator': 'operator', 'healthcare': 'healthcare', 'natural': 'natural', 'access_roo': 'access_roo', 'health_f_1': 'health_f_1', 'religion': 'religion', 'beds': 'beds', 'shop': 'shop', 'staff_co_1': 'staff_co_1', 'building_m': 'building_m', 'oneway': 'oneway', 'opening_ho': 'opening_ho', 'waterway': 'waterway', 'smoothness': 'smoothness', 'railway': 'railway', 'depth': 'depth', 'toilets_di': 'toilets_di', 'medical_sy': 'medical_sy', 'blockage': 'blockage', 'name': 'name', 'government': 'government', 'bridge': 'bridge', 'operator_t': 'operator_t', 'rooms': 'rooms', 'status': 'status', 'pump': 'pump', 'historic': 'historic', 'addr_stree': 'addr_stree', 'denominati': 'denominati', 'landuse': 'landuse', 'diameter': 'diameter', 'toilets_ha': 'toilets_ha', 'amenity': 'amenity', 'barrier': 'barrier', 'health_f_2': 'health_f_2', 'access': 'access', 'highway': 'highway', 'surface': 'surface', 'emergency': 'emergency', 'water': 'water', 'public_tra': 'public_tra', });
lyr_Pend_13.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Wirausaha_14.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_kes_15.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_mrt_16.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_pom_17.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_instnsi_18.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_tmptIbadah_19.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_DESA_PATIMUAN_1.set('fieldImages', {'fid': 'TextEdit', 'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', 'RT/RW': 'TextEdit', });
lyr_Kebun_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Ladang_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'AQDATE': 'DateTime', 'PUDATE': 'DateTime', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'JNSLDG': 'TextEdit', 'TNMLDG': 'TextEdit', 'TIPLDG': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Sawah_4.set('fieldImages', {'id': 'TextEdit', });
lyr_Irigasi_5.set('fieldImages', {'id': 'TextEdit', });
lyr_Sier_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Sungai_7.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Jalan_8.set('fieldImages', {'NAMRJL': 'TextEdit', 'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'lebar': 'TextEdit', 'NamaJalan': 'TextEdit', });
lyr_jl_9.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'layer': 'TextEdit', 'lebar': 'TextEdit', 'NamaJalan': 'TextEdit', });
lyr_Makam_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_lapangan_11.set('fieldImages', {'id': 'TextEdit', 'nama': '', });
lyr_polybangunan_12.set('fieldImages', {'osm_id': '', 'osm_type': '', 'layer': '', 'tourism': '', 'health_fac': '', 'office': '', 'tunnel': '', 'man_made': '', 'aeroway': '', 'capacity': '', 'parking': '', 'staff_coun': '', 'roof_mater': '', 'addr_house': '', 'width': '', 'military': '', 'covered': '', 'building': '', 'isced_leve': '', 'operator': '', 'healthcare': '', 'natural': '', 'access_roo': '', 'health_f_1': '', 'religion': '', 'beds': '', 'shop': '', 'staff_co_1': '', 'building_m': '', 'oneway': '', 'opening_ho': '', 'waterway': '', 'smoothness': '', 'railway': '', 'depth': '', 'toilets_di': '', 'medical_sy': '', 'blockage': '', 'name': '', 'government': '', 'bridge': '', 'operator_t': '', 'rooms': '', 'status': '', 'pump': '', 'historic': '', 'addr_stree': '', 'denominati': '', 'landuse': '', 'diameter': '', 'toilets_ha': '', 'amenity': '', 'barrier': '', 'health_f_2': '', 'access': '', 'highway': '', 'surface': '', 'emergency': '', 'water': '', 'public_tra': '', });
lyr_Pend_13.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Wirausaha_14.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_kes_15.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_mrt_16.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_pom_17.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_instnsi_18.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_tmptIbadah_19.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_DESA_PATIMUAN_1.set('fieldLabels', {'fid': 'no label', 'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', 'RW': 'no label', 'RT': 'no label', 'RT/RW': 'no label', });
lyr_Kebun_2.set('fieldLabels', {'id': 'no label', });
lyr_Ladang_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSLDG': 'no label', 'TNMLDG': 'no label', 'TIPLDG': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Sawah_4.set('fieldLabels', {'id': 'no label', });
lyr_Irigasi_5.set('fieldLabels', {'id': 'no label', });
lyr_Sier_6.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Sungai_7.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Jalan_8.set('fieldLabels', {'NAMRJL': 'no label', 'REMARK': 'no label', 'LCODE': 'no label', 'SHAPE_Leng': 'no label', 'lebar': 'no label', 'NamaJalan': 'no label', });
lyr_jl_9.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'layer': 'no label', 'lebar': 'no label', 'NamaJalan': 'no label', });
lyr_Makam_10.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_lapangan_11.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_polybangunan_12.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'layer': 'no label', 'tourism': 'no label', 'health_fac': 'no label', 'office': 'no label', 'tunnel': 'no label', 'man_made': 'no label', 'aeroway': 'no label', 'capacity': 'no label', 'parking': 'no label', 'staff_coun': 'no label', 'roof_mater': 'no label', 'addr_house': 'no label', 'width': 'no label', 'military': 'no label', 'covered': 'no label', 'building': 'no label', 'isced_leve': 'no label', 'operator': 'no label', 'healthcare': 'no label', 'natural': 'no label', 'access_roo': 'no label', 'health_f_1': 'no label', 'religion': 'no label', 'beds': 'no label', 'shop': 'no label', 'staff_co_1': 'no label', 'building_m': 'no label', 'oneway': 'no label', 'opening_ho': 'no label', 'waterway': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'depth': 'no label', 'toilets_di': 'no label', 'medical_sy': 'no label', 'blockage': 'no label', 'name': 'no label', 'government': 'no label', 'bridge': 'no label', 'operator_t': 'no label', 'rooms': 'no label', 'status': 'no label', 'pump': 'no label', 'historic': 'no label', 'addr_stree': 'no label', 'denominati': 'no label', 'landuse': 'no label', 'diameter': 'no label', 'toilets_ha': 'no label', 'amenity': 'no label', 'barrier': 'no label', 'health_f_2': 'no label', 'access': 'no label', 'highway': 'no label', 'surface': 'no label', 'emergency': 'no label', 'water': 'no label', 'public_tra': 'no label', });
lyr_Pend_13.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Wirausaha_14.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_kes_15.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_mrt_16.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_pom_17.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_instnsi_18.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_tmptIbadah_19.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_tmptIbadah_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});