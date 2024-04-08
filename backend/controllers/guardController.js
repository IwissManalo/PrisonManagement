const guards = 
[
    {
        'id' : 1,
        'name': 'Michelle Gallardo',
        'rank': 'junior',
        'yearsOfService': 6,
        'active': true
    },

    {
        'id' : 2,
        'name': 'Alexene Tomate',
        'rank': 'senior',
        'yearsOfService': 20,
        'active': true
    },

    {
        'id' : 3,
        'name': 'Samantha Paradero',
        'rank': 'junior',
        'yearsOfService': 4,
        'active': false
    },     
]

// GET all guards 
// http://localhost:4000/g/guards
module.exports.guards = (req, res) => 
{
    res.json({'GUARDS': guards});
};

// GET guard by their specific ID
// http://localhost:4000/g/guards/3

module.exports.guard = (req, res) => 
{
    const {id} = req.params

    console.log(id)

    const matchingGuard = guards.filter
    (
        (guard) => guard.id === parseInt(id)
    )

    if  (matchingGuard.length === 0)
    {
        res.status(404).json({'error': `Guard with ${id} not found`})
    }
    else
    {
        const {name, id} = matchingGuard[0];
        res.status(200).json({'name': name, 'id': id});    
    }
}

// GET guard by searching ID, rank, years of service
// http://localhost:4000/g/search/guard?id=1name=Michelle

module.exports.searchGuard = (req, res) => 
{
    const { id, name } = req.query;
    console.log(id, name);

    const matchingGuard = guards.filter
    (
        (guard) => guard.id === parseInt(id) || guard.name === name
    );

    if (matchingGuard.length === 0) 
    {
        res.status(404).json({'error': `Guard with ${id} and ${name} not found`});
    } 
    else 
    {
        const { id, name, rank, yearsOfService } = matchingGuard[0];
        res.status(200).json({ 'id': id, 'name': name, 'rank': rank, 'years of service': yearsOfService });
    }
};

// DELETE guard by their ID
// http://localhost:4000/g/delete/guard/=1

module.exports.deleteGuard = (req, res) => {
    const { id } = (req.params);
    console.log(id);

    const index = parseInt(id) - 1; 
    if (index < 0 || index >= guards.length) 
    {
        res.status(404).json({ 'error': `Guard with ID ${id} not found` });
    } 
    else 
    {
        guards.splice(index, 1);
        res.status(200).json({ 'message': `Guard with ID ${id} deleted successfully` });
    }
};

