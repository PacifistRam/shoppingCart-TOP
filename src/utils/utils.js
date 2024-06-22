

export const usDollar = (price) => {
    return new Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'usd',
    }).format(price)
}