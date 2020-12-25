import React from 'react';
import {Radio as RadioBase, RadioGroup as RadioGroupBase} from 'react-icheck';
import './RadioGroup.scss';

const RadioGroup = ({ children, props }) => (
  <RadioGroupBase
    {...props}
    className="c-radio-group">
    {children}
  </RadioGroupBase>
);

const Radio = props => (
  <RadioBase {...props} radioClass="c-radio-group__item" className="c-radio-group__item" />
);

RadioGroup.Item = Radio;

export default RadioGroup;
