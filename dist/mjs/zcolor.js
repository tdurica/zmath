export function adjustBrightness(colorHex, amt255) {
    var usePound = false;
    if (colorHex[0] === "#") {
        colorHex = colorHex.slice(1);
        usePound = true;
    }
    var R = parseInt(colorHex.substring(0, 2), 16);
    var G = parseInt(colorHex.substring(2, 4), 16);
    var B = parseInt(colorHex.substring(4, 6), 16);
    // to make the colour less bright than the input
    // change the following three "+" symbols to "-"
    R = R + amt255;
    G = G + amt255;
    B = B + amt255;
    if (R > 255)
        R = 255;
    else if (R < 0)
        R = 0;
    if (G > 255)
        G = 255;
    else if (G < 0)
        G = 0;
    if (B > 255)
        B = 255;
    else if (B < 0)
        B = 0;
    var RR = ((R.toString(16).length === 1) ? "0" + R.toString(16) : R.toString(16));
    var GG = ((G.toString(16).length === 1) ? "0" + G.toString(16) : G.toString(16));
    var BB = ((B.toString(16).length === 1) ? "0" + B.toString(16) : B.toString(16));
    const rv = (usePound ? "#" : "") + RR + GG + BB;
    console.log(rv);
    return rv;
}
// adjustBrightness('#ffffff', -254); // expect "#808080"
// adjustBrightness('000000', 10); // "a0a0a"
