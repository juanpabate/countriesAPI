import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import { AiOutlineSearch, AiOutlineDown } from "react-icons/ai";
import { FaMoon, FaRegMoon } from "react-icons/fa";

function App() {
  const [countriesArray, setCountriesArray] = useState([]);
  const [countriesToRender, setCountriesToRender]= useState([]);

  const [search, setSearch]= useState('');
  const [filter, setFilter] = useState('Filter by Region');

  const [toggleFilter, setToggleFilter]= useState(false);
  const [toggleDark, setToggleDark]= useState(false);



  useEffect(()=>{
    getCountries();
  }, []);
  
  useEffect(()=>{
    setCountriesToRender(countriesArray);
  }, [countriesArray]);
  
  const getCountries = async()=>{
    let request= await fetch('https://restcountries.com/v3.1/all');
    let countries= await request.json();
    setCountriesArray(countries);
  }

  const filterBySearch= e=>{
    setSearch(e.target.value);
  }

  const resetFilter= ()=>{
    setFilter('All');
  }

  useEffect(()=>{
    if(search != ''){
     let arrayFilter= countriesArray.filter(country=> country.name.common.toLowerCase().includes(search.toLocaleLowerCase()));
     setCountriesToRender(arrayFilter);
    }else{
      setCountriesToRender(countriesArray);
    }
  },[search]);

  const showCategories= ()=>{
    setToggleFilter(!toggleFilter);
  }

  const darkMode= ()=>{
    setToggleDark(!toggleDark)
  }

  const useFilter= e =>{
    setFilter(e.target.outerText);
  }
  useEffect(()=>{
    if(filter== 'All'){
      setCountriesToRender(countriesArray);
    }else{
      let arrayFilter= countriesArray.filter(country=> country.region == filter);
      setCountriesToRender(arrayFilter);
    }
  }, [filter])
  

  return (
    <div className={toggleDark ? 'AppDark': 'App'}>
      <header className={toggleDark ? 'headerDark dark': 'header'}>
        <h1> Where in the world?</h1>
        <button onClick={darkMode} className={toggleDark ? 'buttonDark dark': 'button'}> {toggleDark ? <FaMoon /> : <FaRegMoon />} Dark Mode</button>
      </header>
      <div className='filters-container'>
        <div className={toggleDark ? 'searchDark': 'search'}>
          <AiOutlineSearch />
          <input type="text" 
          placeholder='Search for a country...'
          onChange={filterBySearch}
          onClick={resetFilter}/>
        </div>
        <div className={toggleDark ? 'filterDark': 'filter'}>
          <p>{filter}</p>

          <div className='categories-arrow'>
            <AiOutlineDown onClick={showCategories}/>
          </div>
          <div className={toggleFilter ? 'categories-container': 'none'} id={toggleDark ? 'categoriesDark' : 'categories'} >
            <p onClick={useFilter}>Africa</p>
            <p onClick={useFilter}>Americas</p>
            <p onClick={useFilter}>Asia</p>
            <p onClick={useFilter}>Europe</p>
            <p onClick={useFilter}>Oceania</p>
            <p onClick={useFilter}>All</p>
          </div>
        </div>
      </div>
      <div className='countries-container'>
        {countriesToRender.map(country=>
          <Card 
          className={toggleDark ? 'cardDark dark': 'card'}
          key= {country.name.common}
          image= {country.flags.png}
          alt= {country.flags.alt}
          name= {country.name.common}
          population= {country.population}
          region= {country.region}
          capital= {country.capital}/>
        )}
      </div>
    </div>
  )
}

export default App
