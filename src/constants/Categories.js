const Categories = {
    Salary: 'Salary',
    CreditCard: 'CreditCard',
    Gas: 'Gas',
    Shopping: 'Shopping',
    Coffe: 'Coffe',
    Clothes: 'Clothes',
    EatingOut: 'EatingOut',
    Entertaiment: 'Entertaiment',
    Trip: 'Trip',
    Food: 'Food',
    getName: (type) => {
        switch (type) {
            case Categories.Salary: return 'Salary';
            case Categories.CreditCard: return 'Credit card';
            case Categories.Gas: return 'Gas';
            case Categories.Shopping: return 'Shopping';
            case Categories.Coffe: return 'Coffe';
            case Categories.Clothes: return 'Clothes';
            case Categories.EatingOut: return 'EatingOut';
            case Categories.Entertaiment: return 'Entertaiment';
            case Categories.Trip: return 'Trip';
            case Categories.Food: return 'Food';

            default: return ''
        }
    }
}

export default Categories;