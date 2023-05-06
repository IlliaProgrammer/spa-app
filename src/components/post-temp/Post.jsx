import React, {useState} from 'react';
import './post.css';

function Post(props) {
  const [likes, setLikes] = useState(props.reactions.likes);
  const [image, setImage] = useState("https://www.citypng.com/public/uploads/preview/-51611915675wmb5cgaf3d.png");
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(!buttonClicked);
    if (!buttonClicked) {
      setImage("https://www.clker.com/cliparts/J/O/Y/8/K/2/white-line-heart-md.png");
      setLikes(likes+1)
    } else {
      setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7yELhsrjsGCIFt_vwRd10mv9kem_96FNFxA&usqp=CAU");
      setLikes(likes-1)
    }
  
  };


  return (
    <div className="App">
      <div className="autor">
        <img className="author-img" src={props.author.photo} alt="no pic"/>
        <p className="aurhor-name">{props.author.name}</p>
        <img class="verified" src='https://img.icons8.com/win10/600w/FFFFFF/instagram-check-mark.png' alt="-"/>
        <p className="info">{props.author.nickname}</p>
      
        <p className="info">{props.date}</p>
      </div>
      <div className="content">
        <p>{props.content}</p>
        <img className="content-img" src={props.image} alt="ops"/>
        <div className='reactions'>
          <p className='react'><img class="icon" src="https://img.icons8.com/ios11/600w/FFFFFF/comments.png" alt="ops"/>{props.reactions.comments}</p>
          <p className='react' ><img class="icon" src="https://img.icons8.com/ios11/600w/FFFFFF/repeat.png" alt="ops"/>{props.reactions.replyes}</p>
          <button><p className='react' onClick={handleClick}><img class="icon" src={image} alt="ops"/>{likes}</p></button>
          <p className='react'><img class="icon" src="https://download.moodle.org/theme/image.php/moodleorgcleaned_downloads/theme_moodleorgcleaned/1674377011/frontpage/FG-banner6" alt="ops"/></p>
        </div>
      </div>
    </div>
  );
}

export default Post;