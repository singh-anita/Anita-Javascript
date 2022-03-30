import UserCard from "./card.js";


const fetchUsersData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then((response) => {
      // console.log(response.json());
      return response.json();
    })
    .then(users => {
      resolve( 
        {message: "Successful",
        data : users
      // const user = users
      //  user.map(data => data)
      // // const users 
      // console.log(users);

      // return users
    });
    })
    .catch(err => {
      reject({
        message: 'error thrown',
        error : err})
    })
  });
};

    const renderUsers = (root) => {
      console.log('--root', root)
      const url = "https://jsonplaceholder.typicode.com/users";
      fetchUsersData(url).then((response) => {
        // render cards for each user
        console.log('---respobse', response)
        const { data: users } = response;
        console.log('--alias',users)
        users.forEach((user) => {
          console.log('user', user)
          root.appendChild(new UserCard(user).render())
          // root.appendChild(new UserCard(user).render());
        });
      });
    };
    
    const init = () => {
      const root = document.getElementById("root");
      renderUsers(root);
    };
    
    //calling the function
    init();

// fetchUserData();