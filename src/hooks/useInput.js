import { useState } from "react";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    if (validator(e.target.value)) {
      setValue(e.target.value);
    }
  };
  return { props: { value, onChange } };
};
