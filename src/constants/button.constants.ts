import { ButtonOptions } from '../app/components/button/button.component';

/**
 * Button styles for profile section page
 */
export const LIKED_BUTTON_OPTIONS: ButtonOptions = {
  text: 'Liked Articles',
  icon: 'bi bi-heart-fill',
  styles: 'w-full font-poppins text-lg lg:text-sm',
  align: 'text-left',
};

export const SAVED_BUTTON_OPTIONS: ButtonOptions = {
  text: 'Saved Articles',
  icon: 'bi bi-bookmark-fill',
  styles: 'w-full font-poppins text-lg lg:text-sm',
  align: 'text-left',
};

export const LOGOUT_BUTTON_OPTIONS: ButtonOptions = {
  text: 'Logout',
  icon: 'bi bi-box-arrow-right',
  styles: 'w-full font-poppins text-lg lg:text-sm',
  align: 'text-left',
};

export const DELETE_PROFILE_BUTTON_OPTIONS: ButtonOptions = {
  text: 'Delete profile',
  icon: 'bi-person-fill-x',
  styles: '!border-red-700 !text-red-700 w-full font-poppins text-lg lg:text-sm',
  align: 'text-left',
};

/**
 * Button options for register and login forms
 */
export const REGISTER_BUTTON_OPTIONS: ButtonOptions = {
  type: 'submit',
  text: 'Sign up',
  styles: 'w-full font-semibold font-poppins mt-4',
};

export const GOOGLE_BUTTON_OPTIONS: ButtonOptions = {
  icon: 'bi bi-google',
  text: 'Continue with Google',
  styles: 'font-semibold font-poppins',
};

export const LOGIN_BUTTON_OPTIONS: ButtonOptions = {
  type: 'submit',
  text: 'Login',
  styles: 'w-full font-semibold font-poppins mt-2',
};

/**
 * Button options for cancel and confirm buttons
 */
export const CANCEL_BUTTON_OPTIONS: ButtonOptions = {
  text: 'Cancel',
  styles: 'w-full font-poppins',
}

export const CONFIRM_BUTTON_OPTIONS: ButtonOptions = {
  text: 'Confirm',
  icon: 'bi bi-check-circle',
  styles: 'w-full font-poppins',
}
