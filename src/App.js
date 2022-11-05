import './App.css';
import HeaderBackground from './components/HeaderBackground';
import Header from './components/Layout/Header';
import Main from 'components/Layout/Main';
import { useState } from 'react';

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
      <Header />
      <Main />
      <button>Load more</button>
    </div>
  );
}

export default App;
