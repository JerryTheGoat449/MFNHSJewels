document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.downloadble-forms a');
    const popup = document.createElement('div');
    popup.id = 'popup';
    popup.style.display = 'none';
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.padding = '20px';
    popup.style.backgroundColor = 'aqua';  // Match the header background color
    popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    popup.style.zIndex = '1000';
    popup.style.textAlign = 'center';  // Center the text

    const popupContent = document.createElement('div');
    popupContent.id = 'popup-content';
    popupContent.style.display = 'flex';
    popupContent.style.flexDirection = 'column';
    popupContent.style.alignItems = 'center';
    popup.appendChild(popupContent);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });
    popup.appendChild(closeButton);

    document.body.appendChild(popup);

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const href = link.getAttribute('href');
            popupContent.innerHTML = `<a href="${href}" target="_blank">${link.textContent}</a>`;
            popup.style.display = 'block';
        });
    });
});