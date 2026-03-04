/**
 * Transforma um número em uma string de moeda brasileira.
 * Exemplo: 12 -> R$ 12,00
 */
export const formatCurrency = (value: number): string => {
    // O TypeScript garante que 'value' seja sempre um número.
    // Se você tentar passar um texto, ele vai acusar erro antes de você rodar o site.

    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
};