// Aqui estamos criando a "forma" do nosso objeto.
export interface ServiceItem {
    id: string;
    name: string;
    price: number; // TS garante que aqui só entra número
    unit: string;  // aqui só entra texto (ex: 'unid', 'kg')
    iconName: string;
    category: 'individual' | 'kg' | 'especial' | 'mt'; // só pode ser um desses 3 valores
}