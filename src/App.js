import './App.css';
import HeaderBackground from './components/HeaderBackground';
import Header from './components/Layout/Header';
import { useState } from 'react';
import Cards from './components/Cards';
import Details from './components/Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState('light');

  // const [values, onChange, onChangeCheckBox] = useGetInput();

  // const [jobs, setJobs] = useState([]);
  // const [fitlerArrayy, setFilterArrayy] = useState([]);

  // const [title, setTitle] = useState();

  // useEffect(() => {
  //   let filterArray = [...data];

  //   console.log(values.title);
  //   if (values.title) {
  //     filterArray = filterArray.filter((company) =>
  //       // company.position.split(' ').includes(values.title)
  //       company.position.split(' ').some((el) => el.startsWith(values.title))
  //     );
  //   }

  //   if (values.location) {
  //     filterArray = filterArray.filter(
  //       (company) => values.location === company.location
  //     );
  //   }

  //   if (values.isFullTime) {
  //     filterArray = filterArray.filter(
  //       (company) => company.contract === 'Full Time'
  //     );
  //   } else {
  //     filterArray = filterArray.filter(
  //       (company) => company.contract === 'Part Time'
  //     );
  //   }

  //   setData(filterArray);
  //   console.log(filterArray);
  // }, [values]);

  const toggleTheme = (e) => {
    const toggleBox = e.target.closest('.toggle');
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    toggleBox.style.justifyContent === 'flex-end'
      ? (toggleBox.style.justifyContent = 'flex-start')
      : (toggleBox.style.justifyContent = 'flex-end');
  };

  return (
    <div className="App" data-theme={theme}>
      <HeaderBackground setTheme={toggleTheme} />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Cards />} />

          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
