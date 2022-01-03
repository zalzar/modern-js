const users = [
    { name: 'Ali', premium: true },
    { name: 'Niobe', premium: false },
    { name: 'Neo', premium: true },
    { name: 'Link', premium: true },
    { name: 'Persephone', premium: true },
    { name: 'Morpheus', premium: true },
    { name: 'Smith', premium: false },
    { name: 'Trinity', premium: true },
    { name: 'Oracle', premium: false }
];

const getPremiumUsers = (users) => {
    return users.filter(user => user.premium);
};

export { getPremiumUsers, users as default };