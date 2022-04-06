export const theme = { 
    darkTheme: {
        background: `linear-gradient(to bottom, #232526, black)`,
        border: 'white',
        color: '#bfbeba',
        iconColor: 'white',
        animatedBorder: 'white',
        disabledButton: 'gray',
    },
    lightTheme: {
        background: `linear-gradient(to bottom, #d8d8d6, #fcfbf6)`,
        border: '#676662',
        color: '#000000',
        iconColor: '#000000',
        animatedBorder: 'black',
        disabledButton: 'gray',
    }
};

export const ThemeReducer = (state, action) => {
    switch (action.type) {
        case "LIGHT_THEME":
            return { ...theme.lightTheme };
        case "DARK_THEME":
            return { ...theme.darkTheme };
        default:
            return state;
    }
}