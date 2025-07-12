export enum ERoutes {
    LANDING = "landing",
    HOME = "/home",
    LETTER = '/letter', 
    LETTER_FORM = '/letter-form',
    LETTER_TODAY = `${LETTER}/today`,
    SETTING = '/setting',

    OAUTH = '/api/oauth',
    REDIRECT_LOGIN = `${OAUTH}/kakao`,
    LOGOUT = `${OAUTH}/logout`
}