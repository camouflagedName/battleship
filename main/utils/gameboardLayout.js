export const addIcon = (type) => {
    const icon = document.createElement("span")
    icon.className = "material-symbols-outlined"
    icon.innerHTML = type

    return icon
}
