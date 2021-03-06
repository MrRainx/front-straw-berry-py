import useCustomRef from '@hooks/useCustomRef';
import classnames from 'classnames';
import { MultiSelect, MultiSelectProps } from 'primereact/multiselect';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FieldWrapper from './FieldWrapper';
import { BaseFormFieldProps } from './types';

const CustomMultiSelect = (props?: CustomMultiSelectProps) => {
  const { label, rules, name, ...rest } = props;
  const { onChange: onChangeFn, placeholder, className } = props;

  const { control } = useFormContext();

  const { focusRef, setRef } = useCustomRef(null);

  return (
    <FieldWrapper label={label} name={name}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={null}
        onFocus={focusRef}
        render={({ onChange, value }, { invalid }) => (
          // @ts-ignore
          <MultiSelect
            value={value}
            onChange={({ value: selecteds }) => {
              onChangeFn && onChangeFn(selecteds);
              onChange(selecteds);
            }}
            placeholder={placeholder || 'Seleccione'}
            className={classnames({
              'w-100': true,
              'p-invalid': invalid,
              [className]: true,
            })}
            ref={setRef('focusInput')}
            {...rest}
          />
        )}
      />
    </FieldWrapper>
  );
};

export default CustomMultiSelect;

export type CustomMultiSelectProps = MultiSelectProps & BaseFormFieldProps;
