import './button.scss';

const ButtonsTypeClasses = {
  google: 'google-sign-in',
  inverted: 'inverted',
}

function Button({children, buttonType, ...otherProps}) {
  return (
    <button className={`button-container ${ButtonsTypeClasses[buttonType]}`} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
