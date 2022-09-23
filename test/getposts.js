
const authorization = {
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEyLCJuYW1lIjoiYWtlX2VrIiwiZW1haWwiOiJha2UuZWtAbm9yb2ZmLm5vIiwiYXZhdGFyIjpudWxsLCJiYW5uZXIiOm51bGwsImlhdCI6MTY2MzUxNjAxOX0.8N4zUCAMhXw04a-gZjaZ8kNS-dghr-5XRYexdHwtQXU',
    },
  };
  
//   fetch('https://nf-api.onrender.com/api/v1/social/posts', authorization)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const url = 'https://nf-api.onrender.com/api/v1/social/posts/94';

async function fetchPosts(){
    try{
        const response = await fetch(url, authorization);
        const results = await response.json();
        console.log(results)
        showPosts(results)
    }
    catch(error){
        console.log(error)
    }
}

function showPosts(posts){
    for (i = 0; i < posts.length; i++){
        console.log(posts[i].id)
        // console.log(posts[i].body)
        // console.log(posts[i].title)
    }
}

fetchPosts();