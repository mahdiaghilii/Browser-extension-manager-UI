const Extentions = document.getElementById('extentions')


fetch('json/data.json')
.then(response => response.json())
.then(res =>{
    res.forEach(element => {
        console.log(element)
        let DIV = document.createElement('div')
        DIV.classList.add('CARD')

        let TITLE = document.createElement('h3')
        TITLE.innerText = element.name;

        let DESC = document.createElement('p')
        DESC.innerText = element.description

        let LOGO = document.createElement('img')
        LOGO.setAttribute('src' , element.logo)
        LOGO.setAttribute('alt' , element.name)

        DIV.append(TITLE)
        DIV.append(DESC)
        DIV.append(LOGO)
        
        Extentions.append(DIV)
        
    });
})



