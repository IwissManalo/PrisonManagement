const prisoners = 
[
    {
        'id' : 1,
        'name': 'Irish',
        'age': 20,
        'crime': 'too gorgeous',
        'sentence': '300 years'
    },

    {
        'id' : 2,
        'name': 'Nico Faith',
        'age': 23,
        'crime': 'Illegal possesion of drugs and firearms',
        'sentence': '50 years'
    },

    {
        'id' : 3,
        'name': 'Ralph',
        'age': 20,
        'crime': 'Drug Addict',
        'sentence': '3000 years'
    }     
]

module.exports.prisoners = (req, res) => 
{
    res.json({'PRISONERS': prisoners});
};

// search a prisoner by id using /prisoner/{id}

module.exports.prisoner = (req, res) => 
{
    const {id} = req.params

    console.log(id)

    const matchingPrisoner = prisoners.filter
    (
        (prisoner) => prisoner.id === parseInt(id)
    )

    if  (matchingPrisoner.length === 0)
    {
        res.status(404).json({'error': `Prisoner with ${id} not found`})
    }
    else
    {
        res.status(200).json({'prisoner' : matchingPrisoner[0]})
    }
}

// simple query parameter using name as key
// using req.query
// http://localhost:4000/p/greet/person?name=Irish
module.exports.greet = (req, res) =>
{
    const { name } = req.query
    console.log(name)
    res.status(200).json ({'HELLO' : name})
};

module.exports.searchPrisoner = (req, res) =>
{
    const { id, name } = req.query
    console.log(id, name)

    const matchingPrisoner = prisoners.filter
    (
        (p) => p.id === parseInt(id) || p.name === name
    )

    if (matchingPrisoner.length === 0)
    {
        res.status(404).json({'error': `Prisoner with ${id} and ${name} not found`})

    }
    else
    {
        res.status(200).json({'found' : matchingPrisoner[0]})
    }
    
};