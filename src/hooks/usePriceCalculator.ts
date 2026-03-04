import { useState } from 'react';
// Importando sua lista de preços (ajuste o caminho se necessário)
import { LAUNDRY_SERVICES } from '../constants/prices';

export function usePriceCalculator() {
    // O 'quantities' guarda quantas peças de cada ID o usuário escolheu.
    // Record<string, number> significa: { "id_do_item": quantidade_numerica }
    const [quantities, setQuantities] = useState<Record<string, number>>({});

    // Função para aumentar ou diminuir a quantidade
    const updateQuantity = (id: string, delta: number) => {
        setQuantities((prev) => {
            const currentQty = prev[id] || 0;
            const newQty = currentQty + delta;

            // Se a nova quantidade for menor que 0, a gente trava no 0.
            if (newQty < 0) return prev;

            return {
                ...prev,
                [id]: newQty,
            };
        });
    };

    // Lógica para somar o valor total de tudo
    const totalValue = LAUNDRY_SERVICES.reduce((acc, service) => {
        const qty = quantities[service.id] || 0;
        return acc + (service.price * qty);
    }, 0);

    // Retornamos as ferramentas para o componente page.tsx usar
    return {
        quantities,
        updateQuantity,
        totalValue,
    };
}