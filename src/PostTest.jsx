import axios from 'axios'
import React from 'react'

const PostTest = () => {
  const [posts, setPosts] = React.useState([])

  React.useEffect(()=>{
    axios.get('http://localhost:3001/posts').then((response) =>{
      setPosts(response.data);
    }).catch((e) => console.error(e))
  },[])

  return (
    <div style={{display: 'flex', width: '100%', flexDirection: 'column'}}>
      <h1>Produtos</h1>
      <div style={{display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center'}}>
        {posts.map((post)=> (
          <div key={post.id} style={{padding: '8px', backgroundColor: '#171717', width: '320px'}}>
            <h2 key={post.id}>{post.nome}</h2>
            <p >{post.descricao}</p>
            <p><strong>{`R$ ${post.valor}`}</strong></p>
          </div>
          
        ))}
      </div>

    </div>
  )
}

export default PostTest