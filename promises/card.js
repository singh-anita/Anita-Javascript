class UserCard{
  constructor(user){
    console.log('---fff', user)
    this.props = { ...user };
    // this.userCard = document.createElement('div');
    // this.userCard.classList.add('userCard');
    // this.userName = document.createComment('p');
    // this.userName.innerText = user.name;
    // this.userCard.appendChild(userName)
  }
  render = () => {
    const userCard = document.createElement('div');
    userCard.classList.add('userCard');
    const userName = document.createComment('p');
    userName.innerText = this.props.name;
    userCard.appendChild(userName)
    return this.userCard;
  }
}
export default UserCard