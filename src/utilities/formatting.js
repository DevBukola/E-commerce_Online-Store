import React from 'react'

export const formatCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})

export default formatCurrency;