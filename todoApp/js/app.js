const BASE_URL = "https://hamsahmedansari-todo-server.herokuapp.com"

let done = document.querySelector("#inprogress")
let inprogress = document.querySelector("#done")

// fetch(`${BASE_URL}/todo`)
//     .then(response => response.json())
//     .then(doc => console.log(doc.data))

// addUser = () => {
//     document.querySelector('#optionalWrapper').style.dispaly = 'block'
//     document.querySelector('#optionalWrapper').style.dispaly = 'block'
//     document.querySelector('#userWrapper').style.dispaly = 'none'
//     document.querySelector('#frontWrapper').style.opacity = "0.5"
// }

// addData = () =>{
//     let title = document.querySelector('#titleField')
//     let discription = document.querySelector('#discriptionFiled')
//     let opt1 = document.querySelector('#seletOpt1')
//     let opt2 = document.querySelector('#seletOpt2')
//     // let work = document.querySelector('#work')
//     // let assign = document.querySelector('#assign')
//     // let others = document.querySelector('#others')
//     if(title.value == '' || discription.value == '' || opt1.value == '' || opt2 == ''){
//         alert('Please filled all input filled!')
//     }
//     else{
//         let openDiv = document.querySelector("#openContainer")
//         openDiv.innerHTML = `<div class="openChild">
//         <div class="headingWrapper2">
//             <p class= 'titleName'>${title.value}</p>
//             <div class="working">

//             </div>
//         </div>
//         <div class="buttonWrapper">
//             <button class="doneBtn" onclick="done()">Done</button>
//             <button class="inprogressBtn" onclick="inprogress()">Inprogress</button>
//             <button class="deleteBtn" onclick="deleteBtn()">Delete</button>
//         </div>
//     </div>`
//     }
// }
addUser = ()=> {
    console.log('Hello!')
    document.querySelector('#userBtn').style.display = 'none'
    document.querySelector('#optionalWrapper').style.display = 'block'
}

addData = () => {
    let title = document.querySelector('#titleField').value
    let discrip = document.querySelector('#discriptionFiled').value
    let type = document.querySelector('#seletOpt1').value
    let status = document.querySelector('#seletOpt2').value

    console.log('type ', type)
    console.log('status ', status)
        if (title == '' || discrip == '' || type == '' || status == '') {
            alert('Please fill all fields!')
        }
        else {
            try {
                if (status == 'inprogress') {
                    let inpro = document.querySelector('#inprogressContainer')
                    // if()
                    inpro.innerHTML += `<div id="dataInOpenContainer" class="dataContainer1">
                    <div class = 'headerDiv'>
                        <p class="title" id="titleDiv">${title}</p>
                        <div class="logo" id="logoDiv">                   
                        </div>
                    </div>
                    <div class="btnsDiv">
                        <button class="userBtn1" id="openBtn">${'Open'}</button>
                        <button class="userBtn2" id="inProgBtn">${'Inprogress'}</button>
                        <button class="userBtn3" id="doneBtn">${'Delete'}</button>
                    </div>
                </div>`
                    document.querySelector('#titleField').value = ''
                    document.querySelector('#discriptionFiled').value = ''
                    document.querySelector('#seletOpt1').value = ''
                    document.querySelector('#seletOpt2').value = ''
                }
                if (status == 'open') {
                    let openWap = document.querySelector('#openContainer')
                    // if()
                    openWap.innerHTML += `<div id="dataInOpenContainer" class="dataContainer1">
                    <div class = 'headerDiv'>
                        <p class="title" id="titleDiv">${title}</p>
                        <div class="logo" id="logoDiv">
                        {}                   
                        </div>
                    </div>
                    <div class="btnsDiv">
                        <button class="userBtn1" id="openBtn">${'Open'}</button>
                        <button class="userBtn2" id="inProgBtn">${'Inprogress'}</button>
                        <button class="userBtn3" id="doneBtn">${'Delete'}</button>
                    </div>
                </div>`
                    document.querySelector('#titleField').value = ''
                    document.querySelector('#discriptionFiled').value = ''
                    document.querySelector('#seletOpt1').value = ''
                    document.querySelector('#seletOpt2').value = ''
                }
                if (status == 'done') {
                    let doneWap = document.querySelector('#doneContainer')
                    // if()
                    doneWap.innerHTML += `<div id="dataInOpenContainer" class="dataContainer1">
                    <div class = 'headerDiv'>
                        <p class="title" id="titleDiv">${title}</p>
                        <div class="logo" id="logoDiv">                   
                        </div>
                    </div>
                    <div class="btnsDiv">
                        <button class="userBtn1" id="openBtn">${'Open'}</button>
                        <button class="userBtn2" id="inProgBtn">${'Inprogress'}</button>
                        <button class="userBtn3" id="doneBtn">${'Delete'}</button>
                    </div>
                </div>`
                    document.querySelector('#titleField').value = ''
                    document.querySelector('#discriptionFiled').value = ''
                    document.querySelector('#seletOpt1').value = ''
                    document.querySelector('#seletOpt2').value = ''
                }
            } catch (error) {
                console.log(error)   
            }
        }
}

crossBtn = () => {
    document.querySelector('#userBtn').style.display = 'block'
    document.querySelector('#optionalWrapper').style.display = 'none'
}

// getData = () => {
//     fetch(`${BASE_URL}/todo`)
//         .then(res => res.json())
//         .then(doc => {
//             if (doc.data.length) {
//                 doc.data.map(val => {
//                     let open = document.querySelector("#open")

//                     if (val.status == 'open') {
//                         open.innerHTML = `    <div class="openChild">
//                         <div class="headingWrapper2">
//                             <p class= 'titleName'>${title.value}</p>
//                             <div class="working">

//                             </div>
//                         </div>
//                         <div class="buttonWrapper">
//                             <button class="doneBtn" onclick="done()">Done</button>
//                             <button class="inprogressBtn" onclick="inprogress()">Inprogress</button>
//                             <button class="deleteBtn" onclick="deleteBtn()">Delete</button>
//                         </div>
//                     </div>`
//                         // let div = document.createElement('div')

//                         // div.setAttribute('class', 'openChild')
//                         // div.setAttribute('id', 'project1')

//                         // let nestedDiv1 = document.createElement('div')
//                         // nestedDiv1.setAttribute('class', 'openHead')

//                         // let name = document.createElement('div')
//                         // name.setAttribute('class' , 'nameStlying')

//                         // let type = document.createElement('div')
//                         // type.setAttribute('class' , 'typeStlying')

//                         // let nestedType = document.createElement('div')
//                         // nestedType.setAttribute('class' , 'typeStlying')
//                         // if(work){
//                         //     return nestedType.innerHTML = 'WK'
//                         // }
//                         // if(assign){
//                         //     return nestedType.innerHTML = 'AS'
//                         // }
//                         // if(others){
//                         //     return nestedType.innerHTML = 'OT'                            
//                         // }


//                         open.appendChild()


//                         let nestedDiv2 = document.createElement('div')
//                         nestedDiv2.setAttribute('class')
//                     }
//                     if (val.status == 'done') {

//                     }
//                     if (val.status == 'inprogress') {

//                     }
//                 })
//             }
//         })
// }

// getData()