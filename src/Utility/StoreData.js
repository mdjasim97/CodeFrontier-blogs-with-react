import toast from "react-hot-toast"

const getLocalStorageData = () => {
    let blogs = []
    const getStoreBlog = localStorage.getItem('Blogs')
    if (getStoreBlog) {
        blogs = JSON.parse(getStoreBlog)
    }
    return blogs
}


const saveLocalStorageData = (blog) => {
    const previousBlogs = getLocalStorageData()
    const isExits = previousBlogs.find(b => b.id === blog.id)
    if (isExits) {
        return toast.error('Already bookmarked!')
    }
    previousBlogs.push(blog)
    localStorage.setItem('Blogs', JSON.stringify(previousBlogs))
    toast.success('Bookmark successful.')
}


const deleteLocalStorageData = (id) => {
    const previousBlogs = getLocalStorageData()
    const remaining = previousBlogs.filter(b => b.id !== id)
    localStorage.setItem('Blogs', JSON.stringify(remaining))
    toast.success('Blog Remove form Bookmark.')
}


export {saveLocalStorageData, deleteLocalStorageData}