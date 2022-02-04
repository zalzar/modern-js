const users = [
    { name: 'Ali', premium: true },
    { name: 'Morpheus', premium: true },
    { name: 'Link', premium: false },
    { name: 'Trinity', premium: true },
    { name: 'Agent Smith', premium: true },
    { name: 'The Oracle', premium: true },
    { name: 'Cypher', premium: false },
    { name: 'Dozer', premium: false },
    { name: 'Tank', premium: false },
    { name: 'Niobe', premium: true },
    { name: 'Merovingian', premium: true },
    { name: 'Neo', premium: true },
    { name: 'Persephone', premium: false },
    { name: 'Seraph', premium: true },
    { name: 'Lock', premium: false },
    { name: 'Apoc', premium: false }
];

const getPremUsers = (users) => {
    return users.filter(user => user.premium);
};

export { getPremUsers, users as default };