var vg_1 = "birth_death_bar.vg.json"; 
vegaEmbed("#grouped_bar_chart", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

var vg_2 = "population_line.vg.json";
vegaEmbed("#line_chart", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

var vg_3 = "population_density_map.vg.json";
vegaEmbed("#choropleth_map", vg_3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

var vg_4 = "ethnicity_pie.vg.json";
vegaEmbed("#pie_chart", vg_4).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

var vg_5 = "population_pyramid.vg.json";
vegaEmbed("#population_pyramid", vg_5).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

var vg_6 = "state_pop_heatmap.vg.json";
vegaEmbed("#heatmap", vg_6).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);