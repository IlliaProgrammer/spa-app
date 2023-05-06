import React from 'react';
import Post from '../../components/post-temp/Post';
import './posts.css'

const Posts = () => {
  const post_infos = [
    {
      author: {
        name: "Anakin skywalker",
        photo: "https://i.quotev.com/oqq3tf76aaaa.jpg",
        nickname: "@dart_vader"
      },
      content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      image: "https://www.giantfreakinrobot.com/wp-content/uploads/2020/12/daisy-ridley-star-wars-rey.jpg",
      date: "26 февр.",
      reactions: {
        comments: 482,
        replyes: 182,
        likes: 569,
      },

    },
    {
      author: {
        name: "Kylo Ren",
        photo: "https://pm1.narvii.com/6715/7f5f84609243ffd12589a6a7a3de6a9615f94b23_hq.jpg",
        nickname: "@kylo_ren"
      },
      content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      image: "https://www.giantfreakinrobot.com/wp-content/uploads/2023/05/rey-finn-kylo-ren-force-awakens-star-wars-lightsaber-900x540.jpg",
      date: "1 груд.",
      reactions: {
        comments: 182,
        replyes: 322,
        likes: 31,
      },
    },
      {
        author: {
          name: "Boba Fett",
          photo: "https://lumiere-a.akamaihd.net/v1/images/boba-fett-main_a8fade4d.jpeg?region=311%2C0%2C853%2C853",
          nickname: "@boba_fett"
        },
        content: "No hard feelings. It’s just business",
        image: "https://www.giantfreakinrobot.com/wp-content/uploads/2022/02/book-of-boba-fett-900x506.jpg",
        date: "2 бер.",
        reactions: {
          comments: 582,
          replyes: 923,
          likes: 1324,
        },
    }
]

    return (
        <div className='back'>
          {post_infos.map((post, index) => (
              <Post key={index} author={post.author} content={post.content} image={post.image} date={post.date} reactions={post.reactions}/>
           ))}
        </div>
    );
};

export default Posts;


  