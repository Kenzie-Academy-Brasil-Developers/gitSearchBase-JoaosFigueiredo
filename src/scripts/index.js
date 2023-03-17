function renderHomePage () {
    let getBody = document.querySelector("body")

    let createMain = document.createElement("main")
    let createSection = document.createElement("section")
    let createAside = document.createElement("aside")

    let pageInfosWrapper = document.createElement("div")
    let pageName = document.createElement("h1")
    let pageDescription = document.createElement("p")

    let searchWrapper = document.createElement("div")
    let searchHeader = document.createElement("h3")
    let searchForm = document.createElement("form")
    let inputLabel = document.createElement("label")
    let searchInput = document.createElement("input")
    let searchButton = document.createElement("button")

    pageInfosWrapper.classList.add("pageInfosWrapper")

    pageName.classList.add("pageName")
    pageName.innerText = "Git Search"

    pageDescription.classList.add("pageDescription")
    pageDescription.innerText = "Encontre e se conecte com profissionais de forma rápida e fácil"

    searchWrapper.classList.add("searchWrapper")

    searchHeader.classList.add("searchHeader")
    searchHeader.innerText = "Procurar por um usuário"

    searchForm.classList.add("searchForm")

    inputLabel.classList.add("inputLabel")
    inputLabel.innerText = "Usuário github"
    inputLabel.setAttribute("for", "user")

    searchInput.classList.add("searchInput")
    searchInput.id = "user"
    searchInput.placeholder = "Digite um usuário do github aqui..."

    searchButton.classList.add("searchButton")
    searchButton.innerText = "Ver perfil do github"

    getBody.append(createMain, createAside)
    createMain.append(createSection)
    createSection.append(pageInfosWrapper)
    pageInfosWrapper.append(pageName, pageDescription)
    createAside.append(searchWrapper)
    searchWrapper.append(searchHeader, searchForm)
    searchForm.append(inputLabel, searchInput, searchButton)
}
renderHomePage()

async function verifyUser () {
    const fetchUser = await fetch (`https://api.github.com/users/${localStorage.getItem('userName')}`, {method: 'GET', headers: {'Authorization': 'Bearer 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'}})
    .then(
        response => response.json()
    )
    .catch(
        error => console.log(error)
    )
    if(fetchUser.name || fetchUser.login) {
        window.location.assign(`${window.location.origin}` + "/src/pages/profile.html")
    } else {
        window.location.assign(`${window.location.origin}` + "/src/pages/error.html")
    }
    return fetchUser
}

async function verifyValue () {
    let getInputValue = document.querySelector(".searchInput")
    let getSubmitBtn = document.querySelector(".searchButton")

    getSubmitBtn.addEventListener("click", (event) => {
        event.preventDefault()
        localStorage.setItem('userName', getInputValue.value)
        verifyUser()
    })
}
verifyValue()