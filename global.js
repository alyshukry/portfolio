function redirectTo(page) {
    location.href = `${page}`;
}

function closeScreen(event) {
        const screenElement = event.target.parentElement;
        screenElement.style.opacity = "0";
        setTimeout(() => {
            screenElement.style.transform = "translate(-100%, 0)";
        }, 300)
    }