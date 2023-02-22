async function catchProfile () {
    const profileCatcher = await fetch (`https://api.github.com/users/${localStorage.getItem('userName')}`, {method: 'GET', headers: {'Authorization': 'Bearer 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'}})
    .then(
        response => response.json()
    )
    .catch(
        error => console.log(error)
    )
    return profileCatcher
}

async function catchRepos () {
    const reposCatcher = await fetch (` https://api.github.com/users/${localStorage.getItem('userName')}/repos`, {method: 'GET', headers: {'Authorization': 'Bearer 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'}})
    .then(
        response => response.json()
    )
    .catch(
        error => console.log(error)
    )
    return reposCatcher
}

async function renderProfile () {
    const profile = await catchProfile()
    console.log(profile)

    let getBody = document.querySelector("body")
    let profileWrapper = document.createElement("div")
    let headerWrapper = document.createElement("div")
    let pictureNameWrapper = document.createElement("div")
    let profilePicture = document.createElement("img")
    let profileName = document.createElement("h2")
    let changeProfileButton = document.createElement("button")
    let reposWrapper = document.createElement("div")

    profileWrapper.classList.add("profileWrapper")

    headerWrapper.classList.add("headerWrapper")

    pictureNameWrapper.classList.add("pictureNameWrapper")

    profilePicture.classList.add("profilePicture")
    profilePicture.src = profile.avatar_url

    profileName.classList.add("profileName")
    profileName.innerText = profile.name

    changeProfileButton.classList.add("changeProfileButton")
    changeProfileButton.innerText = "Trocar de usuário"
    changeProfileButton.addEventListener("click", (e) => {
        e.preventDefault()
        localStorage.clear()
        window.location.assign(`${window.location.origin}` + "/index.html")
    })

    reposWrapper.classList.add("reposWrapper")

    getBody.append(profileWrapper)
    profileWrapper.append(headerWrapper, reposWrapper)
    headerWrapper.append(pictureNameWrapper, changeProfileButton)
    pictureNameWrapper.append(profilePicture, profileName)
}
renderProfile()

async function renderRepos () {
    const repos = await catchRepos()
    const catchReposWrapper = document.querySelector(".reposWrapper")

    for(let i = 0; i < repos.length; i++) {
        let repoCard = document.createElement("div")
        let repoName = document.createElement("p")
        let repoDescription = document.createElement("span")
        let repoUrl = document.createElement("a")

        repoCard.classList.add("repoCard")

        repoName.classList.add("repoName")
        repoName.innerText = repos[i].name

        repoDescription.classList.add("repoDescription")
        repoDescription.innerText = repos[i].description

        repoUrl.classList.add("repoUrl")
        repoUrl.innerText = "Repositório"
        repoUrl.href = repos[i].html_url

        catchReposWrapper.append(repoCard)
        repoCard.append(repoName, repoDescription, repoUrl)
    }

    console.log(repos)
}
renderRepos()