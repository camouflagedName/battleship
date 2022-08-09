export const createContainer = (title) => {
    const attemptsContainer = document.createElement("div")
    attemptsContainer.className = "sideContainer"
    attemptsContainer.id = title.toLowerCase()

    const containerHeader = document.createElement("h3")
    containerHeader.innerHTML = title
    attemptsContainer.appendChild(containerHeader)

    return attemptsContainer
}


export const createSidePanelRow = (content) => {
    const containerRow = document.createElement("p")
    containerRow.innerHTML = content

    return containerRow
}

export const createViewRow = () => {
    const viewRow = document.createElement("div")
    viewRow.className = "view-row"
    
    return viewRow
}

export const createTitle = () => {
    const title = document.createElement("h1")
    title.className = "title"
    title.innerHTML = "Ship Finder"

    return title
}