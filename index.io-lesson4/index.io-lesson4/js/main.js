document.querySelector('body').addEventListener('click', (e) => {
    let elCl = e.target.className 

    if (elCl == 'nav__menu') {
        document.querySelector('.nav__ul').classList.toggle('nav__ul-active')
    }

    if (elCl == 'products__category' || elCl == 'products__category products__category-active') {
        e.target.classList.toggle('products__category-active')
        document.querySelector('.products__contCategory').classList.toggle('products__contCategory-active')
    } 
    if (elCl == 'products__brand' || elCl == 'products__brand products__brand-active') {
        e.target.classList.toggle('products__brand-active')
        document.querySelector('.products__contBrand').classList.toggle('products__contBrand-active')
    }
     if (elCl == 'products__designer' || elCl == 'products__designer products__designer-active') {
        e.target.classList.toggle('products__designer-active')
        document.querySelector('.products__contDesigner').classList.toggle('products__contDesigner-active')
    } 


})

