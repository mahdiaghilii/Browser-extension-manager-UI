const Extentions = document.getElementById('extentions')
const BODY = document.body
BODY.classList.add('BdDark')



fetch('json/data.json')
.then(response => response.json())
.then(res =>{
    res.forEach(element => {
       
        let DIV = document.createElement('div')       //creat div for card
        DIV.classList.add('DarkCARD')
        DIV.classList.add('divs')

        let TITLE = document.createElement('h3')      //creat h3 for title
        TITLE.innerText = element.name;

        let DESC = document.createElement('p')        //creat p for description
        DESC.innerText = element.description

        let LOGO = document.createElement('img')      //creat img for logo
        LOGO.setAttribute('src' , element.logo)
        LOGO.setAttribute('alt' , element.name)

        let SpanLogo = document.createElement('div')  //creat div for pushing logo
        SpanLogo.classList.add('SpanLogo')

        let SpanName = document.createElement('div')  //creat div for pushing title & description
        SpanName.classList.add('SpanName')

        SpanLogo.append(LOGO)                         //all appends line 28 / line 39
        
        SpanName.append(TITLE)
        SpanName.append(DESC)

        let UpDiv = document.createElement('div')     //creat div for section up main div and pushing SpanName & SpanLogo
        UpDiv.classList.add('UpDiv')
        let DownDiv = document.createElement('div')   //creat div for section down and pushing removebutton & activebotton
        DownDiv.classList.add('DownDiv')
        
        UpDiv.append(SpanLogo)
        UpDiv.append(SpanName)
        DIV.append(UpDiv)
        Extentions.append(DIV)

        let RemoveButton = document.createElement('div') //creat removebutton
        RemoveButton.classList.add('DarkButton')
        RemoveButton.innerText = 'Remove'
        RemoveButton.addEventListener('click' , function(){
            DIV.classList.add('removeCard')
        })

        

        let check = document.createElement('input')   //creat checkbox
        check.setAttribute('type' , 'checkbox')
        check.setAttribute('id' , `${element.name}`)
        check.classList.add('checkBox')
        

        let label = document.createElement('label')
        label.setAttribute('for'  , `${element.name}`) //creat label
        label.classList.add('label')

        DownDiv.append(RemoveButton)
        DownDiv.append(check)
        DownDiv.append(label)
        DIV.append(DownDiv)

        let test = document.querySelectorAll('.label')

        const AllBtn = document.getElementById('All')           //select fillters button
        const ActiveBtn = document.getElementById('Active')
        const InactiveBtn = document.getElementById('Inactive')

        ActiveBtn.addEventListener('click' , ActiveBtnHandler)   //event for fillter with activbutton

            function ActiveBtnHandler(e){
            let checking = DIV.childNodes[1].childNodes[1]

            if(checking.checked == false){
                DIV.classList.add('removeCard')
            }else{
                DIV.classList.remove('removeCard')
            }

        }

        InactiveBtn.addEventListener('click' , InactiveBtnBtnHanler)  //event for fillter with Inactivbutton

        function InactiveBtnBtnHanler(e){
            let checking = DIV.childNodes[1].childNodes[1]
            if(checking.checked == true){
                DIV.classList.add('removeCard')
            }else{
                DIV.classList.remove('removeCard')
            }
        }

        AllBtn.addEventListener('click' , AllBtnBtnHandler)           //event for fillter with allbutton
        
        function AllBtnBtnHandler(e){
            DIV.classList.remove('removeCard')
        }

    });



        //create mode for all page

        const imgMood = document.getElementById('imgMood')          //select mode icon
        let DIVS = document.querySelectorAll('.divs')               //select elements for change classes
        let Buttons = document.querySelectorAll('.DarkButton')      //select remove button for change classes
        let RightTitleMode = document.getElementById('RightTitle')
        let LeftTitleMode = document.getElementById('LeftTitle')
        let EXmode = document.getElementById('Exmood')
        console.log(EXmode)

       

        imgMood.addEventListener('click' , moodBtnHandler)          //click event for change mode

        function moodBtnHandler(e){
            console.log(e.target.src)
            if(e.target.alt === 'LightMood'){                       //change body mode
                BODY.classList.remove('BdDark')
                BODY.classList.add('BdLight')
                imgMood.alt = 'DarkMood'
                imgMood.removeAttribute('src' , 'assets/images/icon-sun.svg')
                imgMood.setAttribute('src', 'assets/images/icon-moon.svg')
            }
            
            else if(e.target.alt === 'DarkMood'){
                BODY.classList.remove('BdLight')
                BODY.classList.add('BdDark') 
                imgMood.alt = 'LightMood'
                imgMood.removeAttribute('src' , 'assets/images/icon-moon.svg')
                imgMood.setAttribute('src', 'assets/images/icon-sun.svg')

            }

            DIVS.forEach(element => {
                element.classList.toggle('LightCARD')               //change cards mode
            });

            Buttons.forEach(element => {
                
                element.classList.toggle('LightButton')             //change remove buttons mode
                element.classList.toggle('DarkButton')
            });

            if(RightTitleMode.id == 'RightTitle'){
                RightTitleMode.removeAttribute('id' , 'RightTitle')
                RightTitleMode.setAttribute('id' , 'LightRightTitle')
                console.log(RightTitleMode.id)
            }
            else if(RightTitleMode.id == 'LightRightTitle'){
                RightTitleMode.removeAttribute('id' , 'LightRightTitle')
                RightTitleMode.setAttribute('id' , 'RightTitle')
            }

            if(LeftTitleMode.id == 'LeftTitle'){
                LeftTitleMode.removeAttribute('id' , 'LeftTitle')
                LeftTitleMode.setAttribute('id' , 'LightLeftTitle')
            }
            else if(LeftTitleMode.id == 'LightLeftTitle'){
                LeftTitleMode.removeAttribute('id' , 'LightLeftTitle')
                LeftTitleMode.setAttribute('id' , 'LeftTitle')
            }

            if(EXmode.id == 'Exmood'){
                EXmode.removeAttribute('id' , 'Exmood')
                EXmode.setAttribute('id' , 'LightExmood')
            }
            else if(EXmode.id == 'LightExmood'){
                EXmode.removeAttribute('id' , 'LightExmood')
                EXmode.setAttribute('id' , 'Exmood')
            }


            
        }
    
})




