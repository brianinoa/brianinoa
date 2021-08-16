export const lightTheme = {
    body: '#ececec',
    text: '#363537',
    toggleBorder: '#FFF',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
    normalLink: '#27292a',
    introduction: '#555',
    dotted: '#000',
    linkHover: '#7e7e7e'
}

export const darkTheme = {
    body: '#333333',
    text: '#d0d0d0',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
    normalLink: '#ae9f8b',
    introduction: '#cecdcd',
    dotted: '#FFF',
    linkHover: '#fafafa'
}

export interface Theme {
    body: string;
    text: string;
    toggleBorder: string;
    gradient: string;
    normalLink: string;
    introduction: string;
    dotted: string;
    linkHover: string;
}