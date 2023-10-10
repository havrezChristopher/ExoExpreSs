const yup = require('yup');

const commentairesShemas = yup.object().shape({
    Prenom: yup.string().required().min(3).max(50),
    Nom: yup.string().required(),
    Note: yup.string().required().min(1).max(10),
    Email: yup.string().required().email(),
    Message: yup.string().required().min(8).max(500),
    
});

module.exports = commentairesShemas;