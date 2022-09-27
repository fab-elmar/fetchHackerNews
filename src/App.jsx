import "./App.css";
import { useState, useEffect } from "react";

function App() {

  const randomArray = [1, 2, 3, 4, 5]

  const [newsType, setNewsType] = useState([])
  const [news, setNews] = useState([])
  const [searchType, setSearchType] = useState([])
  useEffect(() => {
    setNewsType("")
    fetch(`https://hn.algolia.com/api/v1/search?query=${searchType}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then((object) => setNews(object.hits))
  }, [searchType])

  console.log(newsType)
  console.log('this is', news)
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchType(newsType)

  }
  //conditonal return
  return (
    <>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          value={newsType}
          onChange={(e) => setNewsType(e.target.value)}
          placeholder="search"
        />
        <button type="submit">Search</button>
      </form>
      {/* <button onClick={() => setNewsType('react')}>React</button>
      <button onClick={() => setNewsType('javascript')}>Javascript</button>
      <button onClick={() => setNewsType('python')}>Python</button>
      <p></p> */}
      <ol>
        {news.filter(item => item.title).map((item, i) =>
          <li key={i}> {item.title}  </li>)}
      </ol>

    </>

  )
}

export default App
