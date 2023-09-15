class Snackbar {
    id = 0;

    show(contentHtml) {
        const snackbarEl = document.createElement('div');
        snackbarEl.style.display = 'block';
        snackbarEl.id = `snackbar-${this.id}`;
        snackbarEl.classList.add('snackbar');

        const snackbarBoxEl = document.createElement('div');
        snackbarBoxEl.classList.add('snackbar-box');
        snackbarBoxEl.innerHTML = contentHtml;

        const closeIconEl = document.createElement('span');
        closeIconEl.id = `bt-close-${this.id}`;
        closeIconEl.onclick = () => snackbarEl.remove();
        closeIconEl.classList.add('snackbar-icon', 'close');

        snackbarBoxEl.appendChild(closeIconEl);
        snackbarEl.appendChild(snackbarBoxEl);

        const snackbarAreaEl = document.querySelector('.snackbarArea');
        snackbarAreaEl.insertBefore(snackbarEl, snackbarAreaEl.firstChild);
        $(`#snackbar-${this.id}`)
            .fadeIn(0)
            .delay(4000)
            .fadeOut(300, "linear", function () {
                    while (snackbarAreaEl.firstChild) {
                        snackbarAreaEl.removeChild(snackbarAreaEl.firstChild);
                    }
                }
            );
        this.id++
    }
}