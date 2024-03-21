export interface NavbarInterface {
    route: string,
    label: string,
}

export const NavbarLinks = [
    { route: '/main', label: 'Home' },
    { route: '/main/features/upload-image', label: 'Upload Image'},
    { route: '/main/features/image-list', label: 'Image List'},
];