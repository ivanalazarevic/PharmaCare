import {Product} from "@/store/types";

export const initialProducts :Product[]=[
    {
        id: '1',
        name: 'Vitamin C Supplement',
        manufacturer: { id: 'm1', name: 'Health Corp' },
        price: 19.99,
        expiryDate: new Date(2025, 5, 20),
    },
    {
        id: '2',
        name: 'Organic Honey',
        manufacturer: { id: 'm2', name: 'Nature Farms' },
        price: 12.49,
        expiryDate: new Date(2024, 11, 15),
    },
    {
        id: '3',
        name: 'Omega-3 Fish Oil',
        manufacturer: { id: 'm3', name: 'Ocean Health' },
        price: 25.0,
        expiryDate: new Date(2025, 2, 10),
    },
    {
        id: '4',
        name: 'Calcium Tablets',
        manufacturer: { id: 'm4', name: 'BoneStrength Inc.' },
        price: 15.75,
        expiryDate: new Date(2025, 7, 25),
    },
    {
        id: '5',
        name: 'Multivitamin Gummies',
        manufacturer: { id: 'm1', name: 'Health Corp' },
        price: 22.5,
        expiryDate: new Date(2024, 9, 30),
    },

]