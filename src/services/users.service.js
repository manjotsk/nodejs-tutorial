const demoUsers = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    },
    {
        id: 3,
        name: 'John Smith',
    },
    {
        id: 4,
        name: 'Jane Smith',
    },
    {
        id: 5,
        name: 'John Johnson',
    },
    {
        id: 6,
        name: 'Jane Johnson',
    },
    {
        id: 7,
        name: 'John Williams',
    },
    {
        id: 8,
        name: 'Jane Williams',
    },
    {
        id: 9,
        name: 'John Brown',
    },
    {
        id: 10,
        name: 'Jane Brown',
    },
    {
        id: 11,
        name: 'John Jones',
    },
    {
        id: 12,
        name: 'Jane Jones',
    },
    {
        id: 13,
        name: 'John Garcia',
    },
    {
        id: 14,
        name: 'Jane Garcia',
    },
    {
        id: 15,
        name: 'John Miller',
    },
    {
        id: 16,
        name: 'Jane Miller',
    },
    {
        id: 17,
        name: 'John Davis',
    },
    {
        id: 18,
        name: 'Jane Davis',
    },
    {
        id: 19,
        name: 'John Rodriguez',
    },
    {
        id: 20,
        name: 'Jane Rodriguez',
    },
    {
        id: 21,
        name: 'John Martinez',
    },
    {
        id: 22,
        name: 'Jane Martinez',
    },
    {
        id: 23,
        name: 'John Hernandez',
    },
    {
        id: 24,
        name: 'Jane Hernandez',
    },
    {
        id: 25,
        name: 'John Lopez',
    },
    {
        id: 26,
        name: 'Jane Lopez',
    },
    {
        id: 27,
        name: 'John Gonzalez',
    },
    {
        id: 28,
        name: 'Jane Gonzalez',
    },
    {
        id: 29,
        name: 'John Wilson',
    },
    {
        id: 30,
        name: 'Jane Wilson',
    },
]

const fetchUsers = async () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(demoUsers)
    }, 0)
})

module.exports = {
    fetchUsers
}