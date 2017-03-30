function destacar(elem) {
    // alert(elem.innerText);
    // console.log(elem.parentNode.parentNode.parentNode.innerHTML);
    if (elem.innerText === 'destacar') {
        elem.innerText = 'Quitar destacado';
        elem.parentNode.parentNode.className = 'rotado7';
    } else {
        elem.innerText = 'destacar';
        elem.parentNode.parentNode.className = 'rotado0';
    }
}

function finalizar(elem) {
    elem.parentNode.parentNode.style.display = 'none';
}