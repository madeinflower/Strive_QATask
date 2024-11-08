export const locators = {
  // Header and Navigation
  signupLoginButton: "//a[normalize-space()='Signup / Login']",
  logoutButton: "//a[normalize-space()='Logout']",
  
  // Titles
  newUserSignupTitle: "//h2[normalize-space()='New User Signup!']",
  loginToYourAccountTitle: "//h2[normalize-space()='Login to your account']",
  enterAccountInformationTitle: "//b[normalize-space()='Enter Account Information']",
  accountCreatedTitle: "//b[normalize-space()='Account Created!']",

  // Login
  emailLoginInputField: "//input[@data-qa='login-email']",
  loginPasswordInputField: "//input[@placeholder='Password']",
  loginButton: "//button[normalize-space()='Login']",
  invalidCredentialsMessage: "//p[normalize-space()='Your email or password is incorrect!']",
  loggedinAsTab: "//li[10]//a[1]",

  // Signup
  nameInputField: "//input[@placeholder='Name']",
  emailSignupInputField: "//input[@data-qa='signup-email']",
  signupButton: "//button[normalize-space()='Signup']",
  signupPasswordInputField: "//input[@id='password']",
  mrRadioButton: "//input[@id='id_gender1']",
  mrsRadioButton: "//input[@id='id_gender2']",

  // Birthday Fields
  dayBirthdayDropDown: "//select[id='days']",
  monthBirthdayDropDown: "(//select[@id='months'])[1]",
  yearBirthdayDropDown: "//select[@id='years']",

  // User Details
  firstNameInputField: "//input[@id='first_name']",
  lastNameInputField: "//input[@id='last_name']",
  companyInputField: "//input[@id='company']",
  addressInputField: "//input[@id='address1']",
  countryDropDown: "//select[@id='country']",
  stateInputField: "//input[@id='state']",
  cityInputField: "//input[@id='city']",
  zipCodeInputField: "//input[@id='zipcode']",
  mobileNumberInputField: "//input[@id='mobile_number']",
  termsAndConditionsCheckBox: "//input[@id='checkbox2']",
  createAccountButton: "//button[normalize-space()='Create Account']",
  emailAlreadyExistMessage: "//p[normalize-space()='Email Address already exist!']",
  emailFormatIsIncorrect: "//p[normalize-space()='Email format is incorrect']"
};
