const Extentions = document.getElementById('extentions')


fetch('json/data.json')
.then(response => response.json())
.then(res =>{
    res.forEach(element => {
        console.log(element)
        let DIV = document.createElement('div')       //creat div for card
        DIV.classList.add('CARD')

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

        let RemoveButton = document.createElement('div')
        RemoveButton.classList.add('Button')
        RemoveButton.innerText = 'Remove'

        

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


    });
})



