/* recommend swiper */
var swiper = new Swiper('.recommend_swiper', {
    slidesPerView: 1.2,
    spaceBetween: 10,
    navigation:{
        nextEl:'.product_next',
        prevEl:'.product_prev'
    },
    breakpoints:{
        768: {
            slidesPerView: 4.2,
        },
    },
});

/* recommend */
const product_icon_cart = document.querySelectorAll('.product_image .icon .cart_icon')
const product_icon_wishlist = document.querySelectorAll('.product_image .icon .wishlist_icon')
const product_icon_wishlist_img = document.querySelectorAll('.product_image .icon .wishlist_icon img')
const product = document.querySelectorAll('.product_slide')
const product_001 = document.querySelectorAll('.product_001')
const product_002 = document.querySelectorAll('.product_002')
const product_003 = document.querySelectorAll('.product_003')
const product_img = document.querySelectorAll('.product_image > img')
const product_img_01 = document.querySelectorAll('.product_image_001 > img')
const product_img_02 = document.querySelectorAll('.product_image_002 > img')
const product_img_03 = document.querySelectorAll('.product_image_003 > img')
const product_info = document.querySelectorAll('.recommend_swiper .product_info')
const size = document.querySelectorAll('.recommend_swiper .size')
const size_a = document.querySelectorAll('.recommend_swiper .size a')

product.forEach((t,i)=>{
    product_img[i].addEventListener('click',()=>{
        window.location.href = './product.html'
    })
    product_info[i].addEventListener('click',()=>{
        window.location.href = './product.html'
    })
    t.addEventListener('mouseover',()=>{
        size[i].style.bottom = '0'
    })
    t.addEventListener('mouseleave',()=>{
        size[i].style.bottom = '-150px'
    })
})
product_001.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        product_img_01[i].src = './images/product_1_02.jpg'
    })
    t.addEventListener('mouseleave',()=>{
        product_img_01[i].src = './images/product_1_01.jpg'
    })
})
product_002.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        product_img_02[i].src = './images/product_1_04.jpg'
    })
    t.addEventListener('mouseleave',()=>{
        product_img_02[i].src = './images/product_1_03.jpg'
    })
})
product_003.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        product_img_03[i].src = './images/product_1_06.jpg'
    })
    t.addEventListener('mouseleave',()=>{
        product_img_03[i].src = './images/product_1_05.jpg'
    })
})

for(let i of product_icon_cart){
    i.addEventListener('click',(e)=>{
        e.preventDefault()
        cart_bg_active.style.display = 'block'
        body_html.style.overflow = 'hidden'
        setTimeout(()=>{
            cart_bg_active.style.opacity = '1'
        }, 10);
        setTimeout(()=>{
            cart_page_active.style.right = '0'
        }, 100);
    })
}
product_icon_wishlist.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault()
        product_icon_wishlist_img[i].src = './images/icon/icon_wishlist_active.png'
    })
})

for(let i of size_a){
    i.addEventListener('click',(e)=>{
        e.preventDefault()
        cart_bg_active.style.display = 'block'
        body_html.style.overflow = 'hidden'
        setTimeout(()=>{
            cart_bg_active.style.opacity = '1'
        }, 10);
        setTimeout(()=>{
            cart_page_active.style.right = '0'
        }, 100);
    })
}

/* recommend 2 */
const product_004 = document.querySelectorAll('.product_004')
const product_005 = document.querySelectorAll('.product_005')
const product_006 = document.querySelectorAll('.product_006')
const product_img_04 = document.querySelectorAll('.product_image_004 > img')
const product_img_05 = document.querySelectorAll('.product_image_005 > img')
const product_img_06 = document.querySelectorAll('.product_image_006 > img')

product_004.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        product_img_04[i].src = './images/product_1_08.jpg'
    })
    t.addEventListener('mouseleave',()=>{
        product_img_04[i].src = './images/product_1_07.jpg'
    })
})
product_005.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        product_img_05[i].src = './images/product_1_10.jpg'
    })
    t.addEventListener('mouseleave',()=>{
        product_img_05[i].src = './images/product_1_09.jpg'
    })
})
product_006.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        product_img_06[i].src = './images/product_1_12.jpg'
    })
    t.addEventListener('mouseleave',()=>{
        product_img_06[i].src = './images/product_1_11.jpg'
    })
})

/* recommend 3 */
const product_007 = document.querySelectorAll('.product_007')
const product_008 = document.querySelectorAll('.product_008')
const product_009 = document.querySelectorAll('.product_009')
const product_img_07 = document.querySelectorAll('.product_image_007 > img')
const product_img_08 = document.querySelectorAll('.product_image_008 > img')
const product_img_09 = document.querySelectorAll('.product_image_009 > img')

product_007.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        product_img_07[i].src = './images/product_1_14.jpg'
    })
    t.addEventListener('mouseleave',()=>{
        product_img_07[i].src = './images/product_1_13.jpg'
    })
})
product_008.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        product_img_08[i].src = './images/product_1_16.jpg'
    })
    t.addEventListener('mouseleave',()=>{
        product_img_08[i].src = './images/product_1_15.jpg'
    })
})
product_009.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        product_img_09[i].src = './images/product_1_18.jpg'
    })
    t.addEventListener('mouseleave',()=>{
        product_img_09[i].src = './images/product_1_17.jpg'
    })
})

/* recommend 4 */
const product_010 = document.querySelectorAll('.product_010')
const product_011 = document.querySelectorAll('.product_011')
const product_012 = document.querySelectorAll('.product_012')
const product_img_10 = document.querySelectorAll('.product_image_010 > img')
const product_img_11 = document.querySelectorAll('.product_image_011 > img')
const product_img_12 = document.querySelectorAll('.product_image_012 > img')

product_010.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        product_img_10[i].src = './images/product_1_20.jpg'
    })
    t.addEventListener('mouseleave',()=>{
        product_img_10[i].src = './images/product_1_19.jpg'
    })
})
product_011.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        product_img_11[i].src = './images/product_1_22.jpg'
    })
    t.addEventListener('mouseleave',()=>{
        product_img_11[i].src = './images/product_1_21.jpg'
    })
})
product_012.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        product_img_12[i].src = './images/product_1_24.jpg'
    })
    t.addEventListener('mouseleave',()=>{
        product_img_12[i].src = './images/product_1_23.jpg'
    })
})

/* recommend 5 */
const product_013 = document.querySelectorAll('.product_013')
const product_014 = document.querySelectorAll('.product_014')
const product_015 = document.querySelectorAll('.product_015')
const product_img_13 = document.querySelectorAll('.product_image_013 > img')
const product_img_14 = document.querySelectorAll('.product_image_014 > img')
const product_img_15 = document.querySelectorAll('.product_image_015 > img')

product_013.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        product_img_13[i].src = './images/product_1_26.jpg'
    })
    t.addEventListener('mouseleave',()=>{
        product_img_13[i].src = './images/product_1_25.jpg'
    })
})
product_014.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        product_img_14[i].src = './images/product_1_28.jpg'
    })
    t.addEventListener('mouseleave',()=>{
        product_img_14[i].src = './images/product_1_27.jpg'
    })
})
product_015.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        product_img_15[i].src = './images/product_1_30.jpg'
    })
    t.addEventListener('mouseleave',()=>{
        product_img_15[i].src = './images/product_1_29.jpg'
    })
})