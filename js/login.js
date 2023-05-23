'use strict'

const LoginContainer = document.getElementById('login-container')

const moveOverlay = () => LoginContainer.classList.add('move')

document.getElementById('open-register').addEventListener('click', moveOverlay);