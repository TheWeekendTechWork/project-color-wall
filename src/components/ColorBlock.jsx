import PropTypes from "prop-types";

const getOppositeColor = (hex) => {
    const r = (255 - parseInt(hex.slice(1, 3), 16))
        .toString(16)
        .padStart(2, "0");
    const g = (255 - parseInt(hex.slice(3, 5), 16))
        .toString(16)
        .padStart(2, "0");
    const b = (255 - parseInt(hex.slice(5, 7), 16))
        .toString(16)
        .padStart(2, "0");
    return `#${r}${g}${b}`;
};

const ColorBlock = ({ color }) => {
    return (
        <div
            className="grid-item"
            style={{
                backgroundColor: color,
                color: getOppositeColor(color),
            }}
            data-opposite-color={getOppositeColor(color)}
        >
            {color}
        </div>
    );
};
ColorBlock.propTypes = {
    color: PropTypes.string.isRequired,
};

export { ColorBlock };
