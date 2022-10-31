import { useState } from 'react';

export const useGetInput = () => {
  const [values, setValues] = useState({
    isFullTime: false,
  });

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeCheckBox = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.checked,
    });
  };

  console.log(values);

  return [values, onChange, onChangeCheckBox];
};
