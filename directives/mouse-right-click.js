import { findBrothersElement } from '@/utils/dom.js'

function createMenu(arr, point, fn) {
    const contentMenu = document.createElement('div')
    contentMenu.style.position = 'fixed'
    contentMenu.style.top = point.y ? point.y + 'px' : 0
    contentMenu.style.left = point.x ? point.x + 'px' : 0
    contentMenu.style.zIndex = 999999
    contentMenu.style.backgroundColor = '#ffffff'
    contentMenu.style.borderRadius = '4px'
    contentMenu.style.overflow = 'hidden'
    contentMenu.style.boxShadow = '0px 0px 6px 1px rgba(0, 0, 0, 0.3)'
    contentMenu.style.padding = '2px 0'

    contentMenu.id = 'ivyMouseRightMenus'
    contentMenu.addEventListener('click', (ev) => {
        const target = ev.target
        const nodeName = target.nodeName.toLowerCase()
        if (nodeName === 'li') {
            const command = target.getAttribute('command')
            const name = target.textContent
            if (fn) {
                fn({ command, name })
            }
            document.body.removeChild(contentMenu)
        }
    })
    contentMenu.addEventListener('mouseover', (ev) => {
        const target = ev.target
        const nodeName = target.nodeName.toLowerCase()
        if (nodeName === 'li') {
            const brothers = findBrothersElement(target)
            brothers.map((ele) => {
                ele.style.backgroundColor = '#ffffff'
            })
            target.style.backgroundColor = '#f3f3f3'
        } else {
            const lis = [...document.querySelectorAll('#ivyMouseRightMenus li')]
            lis.map((el) => {
                el.style.backgroundColor = '#ffffff'
            })
        }
    })
    contentMenu.addEventListener('mouseleave', (ev) => {
        const lis = [...document.querySelectorAll('#ivyMouseRightMenus li')]
        lis.map((el) => {
            el.style.backgroundColor = '#ffffff'
        })
    })

    const menuList = arr.map((item, i) => {
        let command = i
        let name = ''
        if (item.command) {
            command = item.command
        }
        if (item.name) {
            name = item.name
        }
        return `<li style="line-height: 32px;padding: 0 12px;transition: background-color 0.3s;background-color: #ffffff;cursor: pointer;" command="${command}">${name}</li>`
    })

    const menuInnerStr = `<ul style="list-style: none;margin: 0;">${menuList.join('')}</ul>`
    contentMenu.innerHTML = menuInnerStr
    document.body.appendChild(contentMenu)
}

function bodyClick(ev) {
    const target = document.getElementById('ivyMouseRightMenus')
    if (target) document.body.removeChild(target)
}

export default {
    bind(el, binding) {
        const data = binding.value
        el.addEventListener('contextmenu', (ev) => {
            ev.preventDefault()
            const point = {
                x: ev.pageX,
                y: ev.pageY,
            }
            const target = document.getElementById('ivyMouseRightMenus')
            if (target) document.body.removeChild(target)
            createMenu(data.menus, point, data.callback)
        })
    },
    inserted(el) {
        document.body.addEventListener('click', bodyClick)
    },
    unbind() {
        document.body.removeEventListener('click', bodyClick)
    },
}
