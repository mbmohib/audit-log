import styled from 'styled-components';

import FormControl from './form-control';

type TextFieldProps = {
  id?: string;
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TextField({
  id,
  label,
  type = 'text',
  name,
  value,
  onChange,
}: TextFieldProps) {
  return (
    <FormControl id={id || name} label={label}>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </FormControl>
  );
}
