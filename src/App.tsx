//react
import { useState } from 'react'

//components and types
import { SongTable } from './components/SongTable'
import { Song } from './types/type'

//external libraries
import axios from 'axios'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'

import './App.css'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [songs, setSongs] = useState<Song[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  async function onFetchSongs() {
    setIsLoading(true)
    try {
      const response = await axios.get('/api/songs')
      setSongs(response.data)
      toast('Got songs!')
    } catch (error) {
      console.error('Error fetching songs', error)
      toast.error('Failed to fetch songs')
    }
    setIsLoading(false)
  }
  return (
    <div className="App">
      <div className="hero" data-theme="dark">
        <nav className="container-fluid">
          <ul>
            <li>
              <a href="https://github.com/gertzMan" className="contrast">
                <strong>Adam Gertzkin</strong>
              </a>
            </li>
          </ul>
        </nav>
        <header className="container">
          <hgroup>
            <h1>Song List Manager</h1>
            <h2>Fun with csv parsing, React, Docker and much more... </h2>
          </hgroup>
          <p>
            <a href="#" role="button" onClick={onFetchSongs}>
              {isLoading ? 'Loading...' : 'Fetch songs'}
            </a>
          </p>
        </header>
      </div>
      <main className="container">
        <div className="grid">
          {!songs && (
            <section>
              <h1>Discover Song List Manager</h1>
              <h3>Powered by React!</h3>
              <p>
                I built an intuitive and user-friendly interface that brings
                your curated song collection to life in a beautifully organized
                table. Whether you're a music aficionado or a casual listener,
                Song List Manager application lets you explore and enjoy your
                songs with ease.
              </p>
              <p>
                To build Song List Manager I used react for the front end. The
                simplicity of React allowed me to design an intuitive user
                interface. The centerpiece of this frontend is a sleek table
                display that presents songs with titles and bands. Navigating
                and searching through the collection becomes a breeze with this
                organized layout.
              </p>
              <p>
                Through the process of creating this frontend, I honed my skills
                in crafting visually appealing interfaces and integrating React
                components. This project taught me the art of combining style
                and functionality to create a delightful user experience.
              </p>
              <p>
                By seamlessly connecting to the NestJS backend, I learned how to
                integrate frontend and backend systems effectively, enhancing my
                understanding of full-stack development.
              </p>
            </section>
          )}
          {songs && (
            <section>
              <SongTable songs={songs} />
            </section>
          )}
        </div>
      </main>
      <footer className="container">
        <small>
          By <a href="https://github.com/gertzMan">Adam Gertzkin</a>
        </small>
      </footer>
      <ToastContainer />
    </div>
  )
}

export default App
