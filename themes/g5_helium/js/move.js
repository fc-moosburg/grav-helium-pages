console.log("Moving things...");

selector = "fcm-move-to-";

items_to_move = jQuery(`[class*='${selector}']`);
// console.log(items_to_move);

items_to_move.each((i, widget) => {
    let classes = jQuery(widget).attr("class").split(/\s+/);
    let id_to_move_to = classes.filter(c => c.startsWith(selector))[0].replace(selector, "");
    let ids = jQuery(`#${id_to_move_to}`);
    if (ids && ids.length > 0) {
        jQuery(widget).detach();
        ids[0].appendChild(widget);
    } else {
        console.warn("Unable to find", id_to_move_to);
    }
    console.log(i, widget, jQuery(widget), classes, id_to_move_to);
});

