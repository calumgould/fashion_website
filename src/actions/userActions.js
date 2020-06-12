export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';

export const toggleDarkMode = (darkMode) => dispatch => {
    console.log('toggleDarkMode: ', darkMode);
    dispatch({
        type: TOGGLE_DARK_MODE,
        darkMode
    });
  };