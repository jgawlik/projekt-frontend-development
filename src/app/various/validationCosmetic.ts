export let formErrors = {
    'name': '',
    'ingredients': '',
    'price': '',
    'producer': '',
    'category': '',
};

export let validationMessages = {
    'name': {
        'required': 'Nazwa jest wymagana!',
        'minlength': 'Nazwa musi zawierać minimum 3 znaki.',
    },
    'ingredients': {
        'required': 'Składniki są wymagane!'
    },
    'price': {
        'required': 'Cena jest wymagana!'
    },
    'producer': {
        'required': 'Marka jest wymagana!'
    },
    'category': {
        'required': 'Kategoria jest wymagana!'
    },
};
