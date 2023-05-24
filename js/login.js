'use strict'

const LoginContainer = document.getElementById('login-container')

const moveOverlay = () => LoginContainer.classList.toggle('move')

document.getElementById('open-register').addEventListener('click', moveOverlay);

document.getElementById('open-login').addEventListener('click', moveOverlay);

document.getElementById('open-register-mobile').addEventListener('click', moveOverlay);

document.getElementById('open-login-mobile').addEventListener('click', moveOverlay);