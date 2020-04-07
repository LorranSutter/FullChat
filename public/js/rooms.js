$(document).ready(() => {
    const socket = io.connect(window.location.origin);

    const username = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    socket.emit('connected', { username });

    $('#change-username').on('click', () => {
        socket.emit('disconnected', { username });
    });
});