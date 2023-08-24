import React from 'react'
//import avtar from  '/Avatar_Aang.png'
const name='Saurav'
const element=<h1>Hello, {name}</h1>
const User ={
    firstName:'Saurav',
    lastName:'Sah'
}
function formatName(User)
{
    return User.firstName+' '+User.lastName;
};
function getGreeting(user)
{
    if(user)
    {
        return 'Hello'+' '+user.firstName;
    }
    return 'Hello Stranger';
}
export default function Jsx() {
  return (
    <div>
      {element}
      <h2>{formatName(User)}</h2>
      <h2>{getGreeting(User)}</h2>
      <h3>{getGreeting(null)}</h3>
      <h4>{google}</h4>
      <h5>{image}</h5>
      {ele}
    </div>
  )
}
const google = <a href="https://www.google.com/mail"> link </a>;
const avatarUrl='./components/avtar.png';
const image = <img src={avatarUrl}></img>;

const ele=(
   <div>
     <h1>Hello Users</h1>
     <h2>Good to see you here</h2>
   </div>
);





