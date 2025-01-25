import { useState, useEffect } from "react";
import { allHexCodes } from "../utils/colorHelper";
import { Navbar } from "./Navbar";
import { ColorBlock } from "./ColorBlock";
import { PaginationControls } from "./PaginationControls";
import { GoToBottomButton } from "./GoToBottomButton";
import { GoToTopButton } from "./GoToTopButton";
import { Loader } from "./Loader";

const ColorBlocks = () => {
    const [colors, setColors] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const colorsPerPage = 5000;
    const maxPage = Math.floor(allHexCodes.length / colorsPerPage) - 1;

    useEffect(() => {
        const start = page * colorsPerPage;
        const end = start + colorsPerPage;
        const generatedColors = allHexCodes.slice(start, end);
        setColors(generatedColors.sort());
        setLoading(false);
    }, [page]);

    const handleSearch = (searchTerm) => {
        if (searchTerm.trim() === "") {
            // Reset to initial state if search term is empty
            const start = 0;
            const end = colorsPerPage;
            const generatedColors = allHexCodes.slice(start, end);
            setColors(generatedColors.sort());
            setPage(0);
        } else {
            const filteredColors = allHexCodes.filter((color) =>
                color.includes(searchTerm.toUpperCase())
            );
            setColors(filteredColors);
        }
    };

    const handleReset = () => {
        const start = 0;
        const end = colorsPerPage;
        const generatedColors = allHexCodes.slice(start, end);
        setColors(generatedColors.sort());
        setPage(0);
    };

    return (
        <div>
            <Navbar onSearch={handleSearch} onReset={handleReset} />
            {loading && <Loader />}
            <GoToTopButton />
            <GoToBottomButton />
            <div className="grid-container">
                {colors.map((color, index) => (
                    <ColorBlock key={index} color={color} />
                ))}
            </div>
            <PaginationControls
                page={page}
                setPage={setPage}
                maxPage={maxPage}
                loading={loading}
                setLoading={setLoading}
            />
            <div className="page-number bottom-left">Page: {page + 1}</div>
        </div>
    );
};

export { ColorBlocks };
