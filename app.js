let body = document.getElementsByTagName('body')[0]
let table = document.createElement('table')
table.style.cssText = `
width: 80%;
margin: 30px auto;
border: 1px solid red;
`

body.append(table)
let num = 1
for(let i = 0; i < 10; i++){
    let tr = document.createElement('tr')
    table.append(tr)
    for(let j = 0; j < 10; j++){
        let td = document.createElement('td')
        td.style.cssText = `
        border: 1px solid red;
        text-align: center;
        `
        td.innerHTML = `<div onclick='func(${num})'>${num}</div>`
        tr.append(td)
        num++
    }
}
let colors = ['red','blue','yellow','brown', 'green','pink','whitesmoke','aqua','red','blue']
function func(num){
    let trs = document.querySelectorAll('tr')
    for(let i = 0; i < 10; i++){
        let current = trs[i]
        for(let j = 0; j < 10; j++){
            let curr = current.childNodes[j]
            trs[j].childNodes[i].style.cssText = `background-color: ${colors[i]}; text-align: center; font-weight: 600; padding: 10px 0; width: 10%`
            console.log(curr)
            if(curr.innerText % num == 0){
                curr.innerText = '*'
            }
        }
    }
}
func()