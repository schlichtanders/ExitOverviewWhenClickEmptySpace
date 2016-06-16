
/*
 * Exit Overview when clicking on empty space
*/

const Main = imports.ui.main;
const Shell = imports.gi.Shell;

var connectid = null;
var reactiveBefore = null;

function _hideOverview() {
    Main.overview.hide();
}
function init() {
    reactiveBefore=Main.overview.viewSelector.actor.reactive;
    //normal: false. but maybe set by another extension.
}

function enable() {
    Main.overview.viewSelector.actor.reactive=true;
    connectid = Main.overview.viewSelector.actor.connect('button-press-event', _hideOverview);
}

function disable() {
    //set back to default value which is normally false.
    Main.overview.viewSelector.actor.reactive=reactiveBefore;
    Main.overview.viewSelector.actor.disconnect(connectid);
}
