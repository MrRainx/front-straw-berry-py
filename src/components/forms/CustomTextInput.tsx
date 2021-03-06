import useCustomRef from '@hooks/useCustomRef';
import classnames from 'classnames';
import { InputText, InputTextProps } from 'primereact/inputtext';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FieldWrapper from './FieldWrapper';
import { BaseFormFieldProps } from './types';

const CustomTextInput = (props: CustomTextInputProps) => {
  const { label, name, rules, className, ...rest } = props;
  const { control } = useFormContext();

  const { setRef, focusRef } = useCustomRef<any>(null);

  return (
    <FieldWrapper label={label} name={name}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue=""
        onFocus={focusRef}
        render={({ onChange, value }, { invalid }) => (
          // @ts-ignore
          <InputText
            value={value}
            onChange={({ currentTarget }) => onChange(currentTarget.value)}
            className={classnames({
              [className]: true,
              'p-d-block w-100': true,
              'p-invalid': invalid,
            })}
            {...rest}
            ref={setRef}
          />
        )}
      />
    </FieldWrapper>
  );
};

export default CustomTextInput;

export type CustomTextInputProps = InputTextProps & BaseFormFieldProps;
