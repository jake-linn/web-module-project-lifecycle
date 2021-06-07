import React from 'react';


class User extends React.Component{

render() {

const {user} = this.props;

return(
<div>
<div className = 'user-img'>
    <img
    src = {user.avatar_url}
    alt = {`${user.login}'s avatar`}
    />
    </div>


<div className = 'user-text'> 

<h1>  {user.name}   </h1>

</div>
<div classname = 'user-stats'>
<ul>

<li> <p> Login: {user.login}</p></li>
<li> <p> Bio: {user.bio}</p></li>

<li> <p> Location: {user.location}</p></li>
<li> <p> Following: {user.following}</p></li>
</ul>

</div>
</div>
);


};



};

export default User; 