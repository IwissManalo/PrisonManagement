const prisoners = [
    {
    'name': 'Irish',
    'age': 20,
    'crime': 'too gorgeous',
    'sentence': '300 years'
    },

    {
        'name': 'Nico Faith',
        'age': 23,
        'crime': 'Illegal possesion of drugs and firearms',
        'sentence': '50 years'
    },

    {
        'name': 'Ralph',
        'age': 20,
        'crime': 'Drug Addict',
        'sentence': '3000 years'
    }
        
]
module.exports.prisoners = (req, res) => {
    res.json({'PRISONERS': prisoners});
};