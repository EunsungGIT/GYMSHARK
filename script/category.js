/* 필터 */
const filter_a = document.querySelectorAll('.filter a')
const sort_by = document.querySelector('.sort_by > a')
const select_sort = document.querySelector('.select_sort')
const product_type = document.querySelectorAll('.product_type > a')
const size = document.querySelector('.size > a')
const select_size = document.querySelector('.select_size')
const features = document.querySelectorAll('.features > a')
const fit = document.querySelector('.fit > a')
const select_fit = document.querySelector('.select_fit')
const collection = document.querySelector('.collection > a')
const select_collection = document.querySelector('.select_collection')
const color = document.querySelector('.color > a')
const select_color = document.querySelector('.select_color')
const pattern = document.querySelectorAll('.pattern > a')
const discount = document.querySelector('.discount > a')
const select_discount = document.querySelector('.select_discount')
const price = document.querySelector('.price > a')
const select_price = document.querySelector('.select_price')

for(let i of filter_a){
    i.addEventListener('click',(e)=>{
        e.preventDefault()
    })
}

let open_m = true

select_sort.style.display = 'none'
sort_by.addEventListener('click',()=>{
    open_m = !open_m
    if(open_m === false){
        select_sort.style.display = 'flex'
    }else{
        select_sort.style.display = 'none'
    }
})
product_type[1].style.display = 'none'
product_type[0].addEventListener('click',()=>{
    open_m = !open_m
    if(open_m === false){
        product_type[1].style.display = 'flex'
    }else{
        product_type[1].style.display = 'none'
    }
})
select_size.style.display = 'none'
size.addEventListener('click',()=>{
    open_m = !open_m
    if(open_m === false){
        select_size.style.display = 'flex'
    }else{
        select_size.style.display = 'none'
    }
})
features[1].style.display = 'none'
features[0].addEventListener('click',()=>{
    open_m = !open_m
    if(open_m === false){
        features[1].style.display = 'flex'
    }else{
        features[1].style.display = 'none'
    }
})
select_fit.style.display = 'none'
fit.addEventListener('click',()=>{
    open_m = !open_m
    if(open_m === false){
        select_fit.style.display = 'block'
    }else{
        select_fit.style.display = 'none'
    }
})
select_collection.style.display = 'none'
collection.addEventListener('click',()=>{
    open_m = !open_m
    if(open_m === false){
        select_collection.style.display = 'block'
    }else{
        select_collection.style.display = 'none'
    }
})
select_color.style.display = 'none'
color.addEventListener('click',()=>{
    open_m = !open_m
    if(open_m === false){
        select_color.style.display = 'flex'
    }else{
        select_color.style.display = 'none'
    }
})
pattern[1].style.display = 'none'
pattern[0].addEventListener('click',()=>{
    open_m = !open_m
    if(open_m === false){
        pattern[1].style.display = 'flex'
    }else{
        pattern[1].style.display = 'none'
    }
})
select_discount.style.display = 'none'
discount.addEventListener('click',()=>{
    open_m = !open_m
    if(open_m === false){
        select_discount.style.display = 'flex'
    }else{
        select_discount.style.display = 'none'
    }
})
select_price.style.display = 'none'
price.addEventListener('click',()=>{
    open_m = !open_m
    if(open_m === false){
        select_price.style.display = 'flex'
    }else{
        select_price.style.display = 'none'
    }
})

/* 상품 */
const product_icon = document.querySelectorAll('.product_image .icon a')
const product = document.querySelectorAll('.product li')
const product_img = document.querySelectorAll('.product_image > img')
const size_box = document.querySelectorAll('.product .size')
const size_a = document.querySelectorAll('.product .size a')

product.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        size_box[i].style.bottom = '0'
        product_img[i].src = './images/product_1_02.jpg'
    })
    t.addEventListener('mouseleave',()=>{
        size_box[i].style.bottom = '-150px'
        product_img[i].src = './images/product_1_01.jpg'
    })
})
product_icon[0].addEventListener('click',(e)=>{
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
cart_bg_active.addEventListener('click',()=>{
    cart_bg_active.style.opacity = '0'
    body_html.style.overflow = 'auto'
    cart_page_active.style.right = '-500px'
    setTimeout(()=>{
        cart_bg_active.style.display = 'none'
    }, 500);
})
