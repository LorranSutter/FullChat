// API for random login info
// https://randomuser.me/
// https://randomuser.me/api/?inc=login
//fetch('https://randomuser.me/api/?inc=login').then(res => res.json().then(data => console.log(data.results[0].login.username)))

// API for random avatars
// https://avatars.dicebear.com/
// https://avatars.dicebear.com/v2/gridy/username.svg?options[width][]=100&options[height][]=100

$(document).ready(() => {

    function avatarAspectRatio() {
        const h = $('.login-container .content .avatar').height();
        $('.login-container .content .avatar').css({ 'width': h + 'px' });
    }

    window.onresize = avatarAspectRatio;

    avatarAspectRatio();

    fetch('https://randomuser.me/api/?inc=login')
        .then(res => {
            res.json()
                .then(data => {
                    const username = data.results[0].login.username;

                    $('#username').val(username)
                    $('#avatarImg').attr('src', `https://avatars.dicebear.com/v2/gridy/${username}.svg?options[width][]=500&options[height][]=500`);
                });
        });

    $('#username').on('keyup', () => {
        const username = $('#username').val();
        $('#avatarImg').attr('src', `https://avatars.dicebear.com/v2/gridy/${username}.svg?options[width][]=500&options[height][]=500`);
    })
})