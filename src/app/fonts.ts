import localFont from 'next/font/local';


export const sweetSuckerPunch = localFont({
    src: '../sweet-sucker-punch.woff2',
    variable: '--font-SweetSuckerPunch',
    display: 'swap',
});

export const switzer = localFont({
    src: [
        {
            path: '../switzer-thin.woff2',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../switzer-extraLight.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../switzer-light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../switzer-medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../switzer-semibold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../switzer-extrabold.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../switzer-black.woff2',
            weight: '900',
            style: 'normal',
        }
    ],
    variable: '--font-switzer',
    display: 'swap',
});