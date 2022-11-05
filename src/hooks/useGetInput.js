// import { useState } from 'react';
// // import { useGetData } from './useGetData';

// export const useGetInput = () => {
//   // const { data, setData } = useGetData();

//   const [values, setValues] = useState({
//     isFullTime: false,
//   });

//   const onChange = (e) => {
//     setValues({
//       ...values,
//       [e.target.name]: e.target.value,
//     });
//   };
//   const onChangeCheckBox = (e) => {
//     setValues({
//       ...values,
//       [e.target.name]: e.target.checked,
//     });
//   };
// console.log('running input');
// useEffect(() => {
//   console.log(values);
// }, [values]);

// useEffect(() => {
//   let filterArray = [...data];

//   console.log(values.title);
//   if (values.title) {
//     filterArray = filterArray.filter((company) =>
//       // company.position.split(' ').includes(values.title)
//       company.position.startsWith(values.title)
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

// return [values, onChange, onChangeCheckBox];
// };
