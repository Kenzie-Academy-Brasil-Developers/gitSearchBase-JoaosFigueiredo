function renderErrorPage () {
    let getBody = document.querySelector("body")

    let createMain = document.createElement("main")
    let createSection = document.createElement("section")

    let messageWrapper = document.createElement("div")
    let errorHeader = document.createElement("h1")
    let errorDescription = document.createElement("p")
    let homeForm = document.createElement("form")
    let homePageButton = document.createElement("button")

    let imgWrapper = document.createElement("div")
    let warningImg = document.createElement("img")
    let warningBackground = document.createElement("img")

    messageWrapper.classList.add("messageWrapper")
    
    errorHeader.classList.add("errorHeader")
    errorHeader.innerText = "Ooops!"

    errorDescription.classList.add("errorDescription")
    errorDescription.innerText = "Não encontramos o usuário que você procurou, vamos tentar novamente."

    homeForm.classList.add("homeForm")

    homePageButton.classList.add("homePageButton")
    homePageButton.innerText = "Nova Busca"
    homePageButton.addEventListener("click", (e) => {
        e.preventDefault()
        window.location.assign(`${window.location.origin}` + "/index.html")
    })

    imgWrapper.classList.add("imgWrapper")

    warningImg.classList.add("warningImg")
    warningImg.src = "../assets/Rectangle 113error.svg"

    warningBackground.classList.add("warningBackGround")
    warningBackground.src = "../assets/Rectangle 112errorback.svg"

    getBody.append(createMain)
    createMain.append(createSection)
    createSection.append(messageWrapper, imgWrapper)
    messageWrapper.append(errorHeader, errorDescription, homeForm)
    homeForm.append(homePageButton)
    imgWrapper.append(warningImg, warningBackground)
}
renderErrorPage()