document.getElementById("fe_data").addEventListener("click", data_fe);

function data_fe() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network error: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            displayPosts(data); // Corrected: Pass `data` instead of `data.results`
            console.log("data:", data);
        })
        .catch(error => console.error('Error:', error));
}

// Display output
function displayPosts(posts) {
    const postList = document.getElementById('id'); // Corrected element selection
    postList.innerHTML = ''; // Clear previous content

    posts.forEach(post => {
        const postItem = document.createElement('div'); // New `div` for each post
        postItem.className = 'post-list';
        postItem.innerHTML = `
            <div>
                <h2 class="font-bold text-blue-700 mb-1">Post Id: ${post.id}</h2>
                <h3 class="font-semibold mb-2">Title: ${post.title}</h3>
                <p>${post.body}</p>
            </div>
        `;
        postList.appendChild(postItem); // Append to the post list
    });
}
