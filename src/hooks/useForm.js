// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (initialValues) => {
  const [value, setValue] = useState(initialValues);

  const handleChanges = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return [value, handleChanges];
};

export default useForm;