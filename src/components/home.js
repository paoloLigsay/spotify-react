import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()

  const pathTodo = () => {
    history.push('/todo')
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  return (
    <div className="home">
      <a href="https://accounts.spotify.com/authorize?client_id=d61d37e0b87d4d8cabb9a61358a5c912&response_type=code&redirect_uri=https%3A%2F%2Fyourspotifyprofile.netlify.app%2F&scope=playlist-read-private user-read-private user-read-email user-read-recently-played user-top-read user-follow-read">
        login
      </a>
      <h1> Your Todo List </h1>
      <button className="btn" onClick={pathTodo}> Start </button>
    </div>
  )
}
  
export default Home