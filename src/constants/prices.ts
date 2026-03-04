import { ServiceItem } from "../types";

export const LAUNDRY_SERVICES: ServiceItem[] = [
    {
        id: '1',
        name: 'Camiseta / Camisa',
        price: 12.00,
        category: 'individual',
        unit: 'peça',
        iconName: 'Shirt'
    },
    {
        id: '2',
        name: 'Calça Jeans / Sarja',
        price: 15.00,
        category: 'individual',
        unit: 'peça',
        iconName: 'Pocket'
    },
    {
        id: '3',
        name: 'Edredom Casal',
        price: 45.00,
        category: 'especial',
        unit: 'unid',
        iconName: 'Bed'
    },
    {
        id: '4',
        name: 'Lavagem por KG (Mín. 5kg)',
        price: 18.00,
        category: 'kg',
        unit: 'kg',
        iconName: 'Weight'
    },
    {
        id: '5',
        name: 'Par de Tênis',
        price: 35.00,
        category: 'especial',
        unit: 'par',
        iconName: 'Footprints'
    }
];