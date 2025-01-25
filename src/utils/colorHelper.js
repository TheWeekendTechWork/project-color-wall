export const generateAllHexCodes = () => {
    const hexChars = "0123456789ABCDEF";
    let hexCodes = [];

    for (let r = 0; r < 256; r++) {
        for (let g = 0; g < 256; g++) {
            for (let b = 0; b < 256; b++) {
                let hex =
                    "#" +
                    hexChars[Math.floor(r / 16)] +
                    hexChars[r % 16] +
                    hexChars[Math.floor(g / 16)] +
                    hexChars[g % 16] +
                    hexChars[Math.floor(b / 16)] +
                    hexChars[b % 16];

                hexCodes.push(hex);
            }
        }
    }
    return hexCodes;
};

// Generate and store all hex codes in a constant list
export const allHexCodes = generateAllHexCodes();
