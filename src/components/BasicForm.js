import UseInputs from "../hooks/use-inputs";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = UseInputs((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = UseInputs((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = UseInputs((value) => value.includes("@"));

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }
  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log("Form submitted!");
    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const firstNameInputClass = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClass = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClass = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameInputClass}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameInputHasError && (
            <p className='error-text'>First name invalid</p>
          )}
        </div>
        <div className={lastNameInputClass}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameInputHasError && (
            <p className='error-text'>Last name invalid</p>
          )}
        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className='error-text'>Email invalid</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
