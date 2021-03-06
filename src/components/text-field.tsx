import styled from 'styled-components';
import { SpaceProps, space } from 'styled-system';

import FormControl from './form-control';

const FieldWrapper = styled.div`
  ${space}
`;

type TextFieldProps = {
  label: string;
  type?: string;
  name: string;
  value: string;
  isError: boolean;
  error: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TextField({
  label,
  type = 'text',
  name,
  value,
  onChange,
  isError,
  error,
  ...rest
}: TextFieldProps & SpaceProps) {
  return (
    <FieldWrapper {...rest}>
      <FormControl id={name} label={label} isError={isError} error={error}>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
      </FormControl>
    </FieldWrapper>
  );
}
