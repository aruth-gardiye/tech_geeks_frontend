// Validate bootstrap form fields


// validate username, at least 1 character required
export const validateUsername = (username) => {
  return username.length > 0;
}

// Validate email cannot be empty and must be in the correct format
export const validateEmail = (email) => {
  return email.length > 0 && email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
}

// Validate password, at least 1 character required
export const validatePassword = (password) => {
  return password.length > 0;
}

// Add above check to register form
export const validateRegisterForm = (username, email, password) => {
  // return error message if any of the fields are invalid
  if (!validateUsername(username)) {
    // return error message with the field name
    return {
      username: 'Username is required.'
    };
  }
  if (!validateEmail(email)) {
    return {
      email: 'Email is required.'
    };
  }
  if (!validatePassword(password)) {
    return {
      password: 'Password is required.'
    };
  }
}