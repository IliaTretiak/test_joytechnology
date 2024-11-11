const Valid_statuses = new Set(['success', 'final', 'done'])
const people = [
    {
        name: 'Max',
        age: '20',
        status: 'in_progress'
    },
    {
        name: 'Sam',
        age: '21',
        status: 'done'
    },
    {
        name: 'Dan',
        age: '30',
        status: 'success'
    }
]
const peopleWithValidation = people 
    .filter(person => Valid_statuses.has(person.status))
    .map(person => person.name)

    //person => person.status in Valid_statuses
    //person => Valid_statuses.has(person.status)
    //person => Valid_statuses.entries(person.status)
    //person => Valid_statuses[person.status]

console.log(peopleWithValidation)