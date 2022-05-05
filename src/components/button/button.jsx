import {BaseButton, GoogleSignInButton, InvertedButton} from './button.styles';

export const ButtonsTypeClasses = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
}

const getButton = (buttonType = ButtonsTypeClasses.base) => (
  {
    [ButtonsTypeClasses.base] : BaseButton,
    [ButtonsTypeClasses.google] : GoogleSignInButton,
    [ButtonsTypeClasses.inverted] : InvertedButton,
  }[buttonType]
);



function Button({children, buttonType, ...otherProps}) {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton {...otherProps}>
      {children}
    </CustomButton>
  );
}

export default Button;
