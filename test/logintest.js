const loginUser = {
    method: 'POST',
    body: JSON.stringify({
        "email": "ake.ek@noroff.no",
        "password": "244466666"
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  const url = 'https://nf-api.onrender.com/api/v1/social/auth/login';

  async function fetchPosts(){
      try{
          const response = await fetch(url, loginUser);
          const results = await response.json();
          console.log(results)
          showPosts(results)
      }
      catch(error){
          console.log(error)
      }
  }
  
  function showPosts(posts){
    const auth = posts.accessToken;
    localStorage.setItem('Value', auth);
    const bearer = localStorage.getItem('Value');
    console.log(bearer);
  }
  
  fetchPosts();
