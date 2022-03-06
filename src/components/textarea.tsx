import styled from 'styled-components';
import { SpaceProps, space } from 'styled-system';

import FormControl from './form-control';

const FieldWrapper = styled.div`
  ${space}
`;

type TextFieldProps = {
  id?: string;
  label: string;
  type?: string;
  name: string;
  value: string;
  isError: boolean;
  error: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function TextField({
  id,
  label,
  name,
  value,
  onChange,
  isError,
  error,
  ...rest
}: TextFieldProps & SpaceProps) {
  return (
    <FieldWrapper {...rest}>
      <FormControl
        id={id || name}
        label={label}
        isError={isError}
        error={error}
      >
        <textarea
          id={id}
          name={name}
          onChange={onChange}
          value={value}
        ></textarea>
      </FormControl>
    </FieldWrapper>
  );
}
