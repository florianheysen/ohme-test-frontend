const filters = [
    {
        id: 'contact',
        label: 'Contact',
        active: false
    },
    {
        id: 'structures',
        label: 'Structures',
        active: false
    },
    {
        id: 'interactions',
        label: 'Interactions',
        active: true
    },
    {
        id: 'paiements',
        label: 'Paiements',
        active: false
    },
]

const segments = [
    {
        id: 1,
        name: "Nom du segment 1",
        contacts: 28,
        structures: 3
    },
    {
        id: 2,
        name: "Nom du segment 2",
        contacts: 9,
        structures: 1
    },
    {
        id: 2,
        name: "Nom du segment 3",
        contacts: 9,
        structures: 1
    },
    {
        id: 2,
        name: "Nom du segment 4",
        contacts: 9,
        structures: 1
    },
]

export { filters, segments }