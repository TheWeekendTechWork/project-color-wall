const GoToTopButton = () => {
    const handleGoToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button onClick={handleGoToTop} className="go-to-top-button">
            Go to Top
        </button>
    );
};

export { GoToTopButton };
