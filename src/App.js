import { useRef, useState } from 'react';
import './App.scss';
import Movie from './Components/Movie';


function App() {
  const inputRef=useRef(null)
  const [movieTitle, setMovieTitle]=useState('')
  const [movieYear, setMovieYear]=useState('')
  const [movieTitleErr, setMovieTitleErr]=useState('')
  const [movieYearErr, setMovieYearErr]=useState('')
  const [movies, setMovies]=useState([ ])
  const removeMovie=(id)=>{
    setMovies(movies.filter(movie=>{
      return movie.id !==id;
      
    }))
  }
  const validateForm =()=>{
    let validated=true;
    if(!movieTitle){
      setMovieTitleErr('영화제목을 입력해주세요');
      validated=false;
    }
    if(!movieYear){
      setMovieYearErr('개봉연도를 입력해주세요');
      validated=false;
    }
    return validated;
  }

  const onSubmit=(e)=>{
    e.preventDefault();

    if(validateForm()){
      setMovies([
        ...movies,
        {
          id:Date.now(),
          title:movieTitle,
          year:movieYear,
        }
      ]);
      inputRef.current.focus();
      setMovieTitle('');
      setMovieYear('');
      setMovieTitleErr('')
      setMovieYearErr('')
    }
  }

  return (
    <div className="App">
      <h1>movie list</h1>
      <form onSubmit={onSubmit}>
        <input ref={inputRef} type="text" placeholder='영화제목' value={movieTitle} onChange={e=>setMovieTitle(e.target.value)} />
        <div className="errText">{movieTitleErr}</div>
        <input type="text" placeholder='영화연도' value={movieYear} onChange={e=>setMovieYear(e.target.value)}/>
        <div className="errText">{movieYearErr}</div>
        <button type='submit'>영화추가</button>
      </form>
      
         {movies.length ? movies.map((movie)=>{
          return(
            <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />
          )
         }):(<div className='addText'>추가된 영화가 없습니다</div>)
        }
      
        
    </div>
  );
}

export default App;
