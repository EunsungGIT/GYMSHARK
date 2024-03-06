/* popup */
const popup_close = document.querySelector('.popup .close')
const popup = document.querySelector('.popup')
const lang_left = document.querySelector('.lang_left')
const lang_left_a = document.querySelector('.lang_left > a')
const lang_left_more = document.querySelector('.lang_left > a .more')
const lang_or = document.querySelector('.lang_sel > span')
const lang_right = document.querySelector('.lang_right')
const lang_right_a = document.querySelector('.lang_right > a')
const header = document.querySelector('header')

popup_close.addEventListener('click',()=>{
    popup.style.display = 'none'
    header.style.top = '0'
})
lang_left.addEventListener('click',()=>{
    lang_right_a.innerHTML = 'English'
    lang_right.style.width = '150px'
    lang_left.style.width = '150px'
    lang_left_more.style.display = 'block'
    lang_or.style.display = 'none'
})

/* header top lang */
const top_a = document.querySelectorAll('.top > a')
const top_lang = document.querySelector('.top .lang')
const lang_a = document.querySelectorAll('.top_lang li')

let select = true
top_lang.style.display = 'none'
top_a[5].addEventListener('click',()=>{
    select = !select
    console.log(select)
    if(select === false){
        top_lang.style.display = 'block'
    }else{
        top_lang.style.display = 'none'
    }
})

/* header mobile menu */
const left_icon = document.querySelectorAll('.left_icon a')
const menu_m = document.querySelector('.menu_m')
const menu_m_close = document.querySelector('.top_m > a')

menu_m.style.display = 'none'
left_icon[0].addEventListener('click',()=>{
    menu_m.style.display = 'block'
    setTimeout(()=>{
        menu_m.style.left = '0'
    }, 10);
})
menu_m_close.addEventListener('click',()=>{
    menu_m.style.left = '-100%'
    setTimeout(()=>{
        menu_m.style.display = 'none'
    }, 500);
})

/* header nav */
const nav_a = document.querySelectorAll('.bottom nav .gnb li')
const nav_category = document.querySelectorAll('.lnb_category_wrap .category_bg')

nav_a.forEach((t,i)=>{
    nav_category[i].style.display = 'none'
    t.addEventListener('mouseover',()=>{
        nav_category[i].style.display = 'block'
        setTimeout(()=>{
            nav_category[i].style.opacity = '1'
        }, 10);
    })
    t.addEventListener('mouseleave',()=>{
        nav_category[i].style.opacity = '0'
        setTimeout(()=>{
            nav_category[i].style.display = 'none'
        }, 500);
    })
})

/* header search */
const body_html = document.querySelector('body, html')
const search_box = document.querySelector('.right_icon .search_box')
const search_icon = document.querySelector('.right_icon .search')
const search_bg = document.querySelector('.search_bg')
const search_page = document.querySelector('.search_bg .search_page')
const search_close = document.querySelector('.search_page .close')

search_bg.style.display = 'none'
search_box.addEventListener('click',()=>{
    search_bg.style.display = 'block'
    body_html.style.overflow = 'hidden'
    setTimeout(()=>{
        search_page.style.opacity = '1'
    }, 10);
})
search_icon.addEventListener('click',()=>{
    search_bg.style.display = 'block'
    body_html.style.overflow = 'hidden'
    setTimeout(()=>{
        search_page.style.opacity = '1'
    }, 10);
})
search_close.addEventListener('click',()=>{
    search_bg.style.opacity = '0'
    body_html.style.overflow = 'auto'
    setTimeout(()=>{
        search_bg.style.display = 'none'
        search_bg.style.opacity = '1'
        search_page.style.opacity = '0'
    }, 500);
})

/* header cart */
const cart_icon = document.querySelector('.bottom .cart')
const cart_bg = document.querySelector('.bottom .cart_bg')
const cart_page = document.querySelector('.bottom .cart_bg .cart_page')

cart_bg.style.display = 'none'
cart_icon.addEventListener('click',()=>{
    cart_bg.style.display = 'block'
    body_html.style.overflow = 'hidden'
    setTimeout(()=>{
        cart_bg.style.opacity = '1'
    }, 10);
    setTimeout(()=>{
        cart_page.style.right = '0'
    }, 100);
})
cart_bg.addEventListener('click',()=>{
    cart_bg.style.opacity = '0'
    body_html.style.overflow = 'auto'
    cart_page.style.right = '-500px'
    setTimeout(()=>{
        cart_bg.style.display = 'none'
    }, 500);
})

/* footer bottom lang */
const bottom_lang = document.querySelector('footer .lang')
const bottom_a = document.querySelector('footer .lang_sel > a')
console.log(bottom_lang)

bottom_lang.style.display = 'none'
bottom_a.addEventListener('click',()=>{
    select = !select
    if(select === false){
        bottom_lang.style.display = 'block'
    }else{
        bottom_lang.style.display = 'none'
    }
})