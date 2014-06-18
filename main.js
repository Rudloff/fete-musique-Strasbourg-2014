/*global $, L*/
/*jslint browser: true*/
var map, points = [], events;

function addPoint(label, point) {
    'use strict';
    var i, desc = '<h2>' + label + '</h2><ul>';
    for (i = 0; i < events.length; i += 1) {
        if (label === events[i].Lieu) {
            desc += '<li title="' + events[i].Description + '"><b>' + events[i]['Début'] + ' - ' + events[i].Fin + '</b>&nbsp;: ';
            if (events[i]["Lien d'écoute"]) {
                desc += '<a target="_blank" href="' + events[i]["Lien d'écoute"] + '">';
            }
            desc += events[i].Groupe;
            if (events[i]["Lien d'écoute"]) {
                desc += '</a>';
            }
            if (events[i].Style) {
                desc += ' (' + events[i].Style + ')';
            }
            desc += '</li>';
        }
    }
    L.marker(point).addTo(map).bindPopup(desc);
}

function addCoords(data) {
    'use strict';
    $.each(data, addPoint);
}

function getCoords(data) {
    'use strict';
    events = data;
    $.getJSON('coords.json', addCoords);
}

function init() {
    'use strict';
    $.getJSON('programme.json', getCoords);
    map = L.map('map').setView([48.58243, 7.74761], 15);
    L.tileLayer('https://carto.rudloff.pro/tiles/layers/background/{z}/{x}/{y}.png', {
        attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a target="_blank" href="https://carto.rudloff.pro/">CartoStras</a>, <a target="_blank" href="http://www.strasbourg.eu/actualites/-/asset_publisher/lG7u/content/programme-complet-de-la-fete-de-la-musique-2014">Communauté urbaine de Strasbourg</a>'
    }).addTo(map);
}

$(document).ready(init);
