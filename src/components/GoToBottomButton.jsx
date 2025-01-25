const GoToBottomButton = () => {
    const handleGoToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    };

    return (
        <button onClick={handleGoToBottom} className="go-to-bottom-button">
            Go to Bottom
        </button>
    );
};

export { GoToBottomButton };
