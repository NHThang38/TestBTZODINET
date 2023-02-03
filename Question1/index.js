var listPosts = document.querySelector("list-posts");

var postsApi = "https://jsonplaceholder.typicode.com/posts";

function handleCreateForm() {
    let createBtn = document.getElementById("createPost");
    createBtn.onclick = function () {
        let title = document.querySelector('input[name="title"]').value;
        let body = document.querySelector('input[name="body"]').value;
        let userId = document.querySelector('input[name="userId"]').value;
        let formData = { title: title, body: body, userId: userId};
        
        createPost(formData);
    };
}
function handleGetPost() {
    let buttonGet = document.getElementById("getPosts");
    buttonGet.onclick = function() {
        getPosts();
    }
}

function getPosts() {
    fetch(postsApi)
        .then(function (response) {
            return response.json();
        })
        .then(function (posts) {
            var htmls = posts.map(function (post) {
                return `<li>
            
                 <h2>${post.title}</h2>
                 <p>${post.body}</p>
            </li>`;
            });

            var html = htmls.join("");
            document.getElementById("list-posts").innerHTML = html;
        })
        .catch(function (err) {
            console.log(err);
        });
}

function createPost(data) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data),
    };

    fetch(postsApi, { options })
        .then(function (response) {
            response.json();
            console.log(response);
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(error => {
            console.log('Request failed', error);
            });
}

handleCreateForm();
handleGetPost();