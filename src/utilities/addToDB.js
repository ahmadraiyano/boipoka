const getStoredBook = () => {
    const getStoredBookStr = localStorage.getItem("readList")

    if(getStoredBookStr) {
        const parseStoredBook = JSON.parse(getStoredBookStr)
        return parseStoredBook
    } else {
        return []
    }
}
const addToBookDB = id => {
    const storedBook = getStoredBook()

    if(storedBook.includes(id)) {
        alert("This book already exists")
    } else {
        storedBook.push(id)
        const data = JSON.stringify(storedBook)
        localStorage.setItem("readList", data)
    }
}

export {addToBookDB, getStoredBook}