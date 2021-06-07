import React from 'react';

class Followers extends React.Component{

render() {
    
    
    
const {followers} = this.props;

return (

<div>

{followers.map(follower => {

return(

<div className = 'follower' key = {follower.id}>
    <img  src ={follower.avatar_url} alt = {`${follower.login}'s avatar`} />
<p>  {follower.login}</p>
</div> 
)
})}
</div> 

);
};
};

export default Followers; 

