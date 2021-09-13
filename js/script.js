const loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}
loadPosts()

const displayPosts = (posts) => {
    const postsContainer = document.getElementById('posts-container')


    posts.forEach(post => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${post.body}</p>
                        <a onClick="showPostDetail('${post.id}')" href="#" class="btn btn-primary">Show Details</a>
                    </div>
                </div>
        
        `
        postsContainer.appendChild(div)
    })
}

const showPostDetail = (id) => {
    const postDetailContainer = document.getElementById('postDetail')

    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            postDetailContainer.innerHTML = `
            <div class="card" style="width: 18rem;">

                <div class="card-body">
                    <h5 class="card-title">${data.title}</h5>
                    <p class="card-text">${data.body}</p>
                </div>
            </div>
            
            `
        })
}