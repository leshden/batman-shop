import {FromInputLabel, Input, Group} from './form-input.styles';

function FormInput({label, ...otherProps}) {
  return (
    <Group>
      { label && (
        <FromInputLabel
        shrink={otherProps.value.length}
        className={`${otherProps.value.length ? 'shrink' : ''} form-input-lable`}>{label}</FromInputLabel>
        )
      }
      <Input {...otherProps}/>
    </Group>
  );
}

export default FormInput;
