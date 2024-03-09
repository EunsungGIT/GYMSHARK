/* chat */
const chat = document.querySelector ('.chat')
const chat_icon = document.querySelector('#chatBtn')
const chat_icon_img = document.querySelector('#chatBtn img')
const chat_box = document.querySelector('.chat_box')
const chat_message = document.querySelector('.chat_message')
const user_text = document.querySelector('.user_text')
const sendBtn = document.querySelector('#sendBtn')
const apiEndpoint = 'https://api.openai.com/v1/chat/completions'
const apiKey = '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';

let chatOpen = true

chat_box.style.display = 'none'
chat_icon.addEventListener('click', ()=>{
    chatOpen = !chatOpen
    if(chatOpen === false){
        chat_icon_img.src = './images/chat/chat_open.png'
        chat_icon_img.style.transform = 'rotate(360deg)';
        chat_box.style.display = 'block'
        setTimeout(()=>{
            chat_box.style.transform = 'scale(1)'
        }, 10);
    }else {
        chat_icon_img.src = './images/icon/icon_chat.png'
        chat_icon_img.style.transform = 'rotate(0deg)';
        chat_box.style.transform = 'scale(0)'
        setTimeout(()=>{
            chat_box.style.display = 'none'
        }, 500);
    }
})

async function fetchAIResponse(prompt) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: prompt
            }, ],
            temperature: 0.3,
            max_tokens: 400,
            top_p: 0.3,
            frequency_penalty: 0.5,
            presence_penalty: 0.5,
            stop: ["Human"],
        }),
    };
    try {
        const response = await fetch(apiEndpoint, requestOptions);
        const data = await response.json();
        const aiResponse = data.choices[0].message.content;
        return aiResponse;
    } catch (error) {
        console.error('OpenAI API 호출 중 오류 발생:', error);
        return 'OpenAI API 호출 중 오류 발생';
    }
}

sendBtn.addEventListener('click', async()=>{
    let message = user_text.value
    addMessage  ('YOU',message)
    user_text.value = ''
    //ai
    let aiMessage = await fetchAIResponse(message)
    addMessage('GYMSHARK', aiMessage);
})

user_text.addEventListener('keydown',(e)=>{
    if(e.keyCode === 13){
        sendBtn.click();
    }
})

function addMessage(target, contents){
    const messageElement = document.createElement('div')
    messageElement.classList.add('message')
    messageElement.innerHTML = `${target} : ${contents}`
    chat_message.appendChild(messageElement)
}

// chat_box
const menuBtn = document.querySelectorAll('.menu button')
const box = document.querySelectorAll('.chat_box .box')
const menuBtn_img = document.querySelectorAll('.menu button img')

box[0].style.display = 'block'
box[1].style.display = 'none'
box[2].style.display = 'none'

menuBtn[0].addEventListener('click',()=>{
    box[0].style.display = 'block'
    box[1].style.display = 'none'
    box[2].style.display = 'none'
    menuBtn_img[0].src = './images/chat/home_active.png'
    menuBtn_img[1].src = './images/chat/message.png'
    menuBtn_img[2].src = './images/chat/help.png'
})
menuBtn[1].addEventListener('click',()=>{
    box[0].style.display = 'none'
    box[1].style.display = 'block'
    box[2].style.display = 'none'
    menuBtn_img[0].src = './images/chat/home.png'
    menuBtn_img[1].src = './images/chat/message_active.png'
    menuBtn_img[2].src = './images/chat/help.png'
})
menuBtn[2].addEventListener('click',()=>{
    box[0].style.display = 'none'
    box[1].style.display = 'none'
    box[2].style.display = 'block'
    menuBtn_img[0].src = './images/chat/home.png'
    menuBtn_img[1].src = './images/chat/message.png'
    menuBtn_img[2].src = './images/chat/help_active.png'
})

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
const lang_sub = document.querySelector('#lang_sub')

popup_close.addEventListener('click',(e)=>{
    e.preventDefault()
    popup.style.display = 'none'
    header.style.top = '0'
})
lang_left.addEventListener('click',(e)=>{
    e.preventDefault()
    lang_right_a.innerHTML = 'English'
    lang_right.style.width = '150px'
    lang_left.style.width = '150px'
    lang_left_more.style.display = 'block'
    lang_or.style.display = 'none'
    lang_sub.style.background = '#fff'
    lang_sub.style.color = '#000'
})

/* header top lang */
const top_a = document.querySelectorAll('.top > a')
const lang_more = document.querySelector('.top > a .more')
const top_lang = document.querySelector('.top .lang')
const lang_a = document.querySelectorAll('.top_lang li')

let select = true
top_lang.style.display = 'none'
top_a[5].addEventListener('click',()=>{
    select = !select
    console.log(select)
    if(select === false){
        lang_more.style.transform = 'rotate(180deg)'
        top_lang.style.display = 'block'
    }else{
        lang_more.style.transform = 'rotate(0)'
        top_lang.style.display = 'none'
    }
})

/* header mobile menu */
const left_icon = document.querySelectorAll('.left_icon a')
const menu_m = document.querySelector('.menu_m')
const menu_m_close = document.querySelector('.top_m > a')

menu_m.style.display = 'none'
left_icon[0].addEventListener('click',(e)=>{
    e.preventDefault()
    menu_m.style.display = 'block'
    setTimeout(()=>{
        menu_m.style.left = '0'
    }, 10);
})
menu_m_close.addEventListener('click',(e)=>{
    e.preventDefault()
    menu_m.style.left = '-100%'
    setTimeout(()=>{
        menu_m.style.display = 'none'
    }, 500);
})

/* header search_mobile */
const search_m = document.querySelector('.search_m')
const search_m_close = document.querySelector('.search_m .search > a')

search_m.style.display = 'none'
left_icon[1].addEventListener('click',(e)=>{
    e.preventDefault()
    search_m.style.display = 'block'
    setTimeout(()=>{
        search_m.style.left = '0'
    }, 10);
})
search_m_close.addEventListener('click',(e)=>{
    e.preventDefault()
    search_m.style.left = '-100%'
    setTimeout(()=>{
        search_m.style.display = 'none'
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
    nav_category[i].addEventListener('mouseover',()=>{
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
    nav_category[i].addEventListener('mouseleave',()=>{
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
const cart_close = document.querySelector('.cart_bg #closeBtn')

cart_bg.style.display = 'none'
cart_icon.addEventListener('click',(e)=>{
    e.preventDefault()
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
cart_close.addEventListener('click',()=>{
    cart_bg.style.opacity = '0'
    body_html.style.overflow = 'auto'
    cart_page.style.right = '-500px'
    setTimeout(()=>{
        cart_bg.style.display = 'none'
    }, 500);
})

/* cart active page */
const cart_bg_active = document.querySelector('.cart_bg_active')
const cart_page_active = document.querySelector('.cart_bg_active .cart_page')
const cart_close_active = document.querySelector('.cart_bg_active #closeBtn')

cart_bg_active.style.display = 'none'
cart_bg_active.addEventListener('click',()=>{
    cart_bg_active.style.opacity = '0'
    body_html.style.overflow = 'auto'
    cart_page_active.style.right = '-500px'
    setTimeout(()=>{
        cart_bg_active.style.display = 'none'
    }, 500);
})
cart_close_active.addEventListener('click',()=>{
    cart_bg_active.style.opacity = '0'
    body_html.style.overflow = 'auto'
    cart_page_active.style.right = '-500px'
    setTimeout(()=>{
        cart_bg_active.style.display = 'none'
    }, 500);
})

/* footer bottom lang */
const bottom_lang = document.querySelector('footer .lang')
const bottom_a = document.querySelector('footer .lang_sel > a')
console.log(bottom_lang)

bottom_lang.style.display = 'none'
bottom_a.addEventListener('click',(e)=>{
    e.preventDefault()
    select = !select
    if(select === false){
        bottom_lang.style.display = 'block'
    }else{
        bottom_lang.style.display = 'none'
    }
})