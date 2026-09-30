function recommendStyle() {

    const occasion = document.getElementById("occasion").value;
    const season = document.getElementById("season").value;
    const clothing = document.getElementById("clothing").value;
    const preferredColor = document.getElementById("color").value;

    let style = "";
    let fabric = "";
    let accessory = "";

    // Occasion recommendations

    if (occasion === "casual") {
        style = "Relaxed Minimal Style";
        accessory = "Sneakers, simple watch and crossbody bag";
    }

    else if (occasion === "office") {
        style = "Elegant Professional Style";
        accessory = "Classic watch, formal shoes and structured bag";
    }

    else if (occasion === "party") {
        style = "Modern Glamorous Style";
        accessory = "Statement jewellery, clutch and stylish footwear";
    }

    else if (occasion === "wedding") {
        style = "Traditional Elegant Style";
        accessory = "Jewellery, embroidered clutch and traditional footwear";
    }

    else if (occasion === "festival") {
        style = "Festive Ethnic Style";
        accessory = "Traditional jewellery and decorative accessories";
    }

    // Season recommendations

    if (season === "summer") {
        fabric = "Cotton, Linen or Chiffon";
    }

    else if (season === "winter") {
        fabric = "Wool, Velvet or Knitted Fabric";
    }

    else if (season === "spring") {
        fabric = "Cotton, Silk or Light Georgette";
    }

    else if (season === "rainy") {
        fabric = "Polyester Blend or Quick-Dry Fabric";
    }

    document.getElementById("styleResult").innerHTML =
        capitalize(clothing) + " – " + style;

    document.getElementById("fabricResult").innerHTML =
        "<strong>Recommended Fabric:</strong> " + fabric;

    document.getElementById("accessoryResult").innerHTML =
        "<strong>Accessories:</strong> " + accessory;

    // Main selected color

    document.getElementById("colorPreview").style.backgroundColor =
        preferredColor;

    // Generate matching colors

    const colors = generatePalette(preferredColor);

    document.getElementById("color1").style.backgroundColor = colors[0];
    document.getElementById("color2").style.backgroundColor = colors[1];
    document.getElementById("color3").style.backgroundColor = colors[2];
}


// Generate related colors

function generatePalette(hex) {

    const rgb = hexToRgb(hex);

    const lighter = rgbToHex(
        Math.min(rgb.r + 60, 255),
        Math.min(rgb.g + 60, 255),
        Math.min(rgb.b + 60, 255)
    );

    const darker = rgbToHex(
        Math.max(rgb.r - 60, 0),
        Math.max(rgb.g - 60, 0),
        Math.max(rgb.b - 60, 0)
    );

    return [
        hex,
        lighter,
        darker
    ];
}


// Convert HEX to RGB

function hexToRgb(hex) {

    const value = parseInt(hex.substring(1), 16);

    return {
        r: (value >> 16) & 255,
        g: (value >> 8) & 255,
        b: value & 255
    };
}


// Convert RGB to HEX

function rgbToHex(r, g, b) {

    return "#" +
        [r, g, b]
        .map(value => value.toString(16).padStart(2, "0"))
        .join("");
}


// Capitalize text

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}