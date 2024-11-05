export const LEFT_MENU_INFO = (user) => [
    {
        id: 1,
        field: 'Email',
        text: user.email,
        icon: 'bxl:gmail',
        iconColor: 'bg-[#FF375B]'
    },
    {
        id: 2,
        field: 'SocialClub',
        text: user.socialclub,
        icon: 'simple-icons:rockstargames',
        iconColor: 'bg-[#FFAA06]'
    },
    {
        id: 3,
        field: 'Баланс',
        text: `${user.scoins} DScoin`,
        icon: 'token:dcr',
        iconColor: 'bg-[#3FBAFF]'
    },
    {
        id: 4,
        field: 'VIP',
        text: `${user.viplvl != 0 ? 'Да' : "Нет"}`,
        icon: 'clarity:crown-solid',
        iconColor: 'bg-[#06FFC3]'
    }
]