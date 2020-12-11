//Simple funciton to accept gross sales and totaltaxes collected. The function outputs total amount of sales with taxes and sales that exlucded taxes for given period.

const taxValue = 0.07 // The percentage charged for taxable sales

const taxDue = (grossSales, taxesCollected) => {
  let salesWithTax = taxesCollected / taxValue

  return `-------------- Tax Report -----------------
            Taxes Collected: $${taxesCollected}
                Gross Sales: $${grossSales}
        Sales Including Tax: $${salesWithTax}
        Sales Excluding Tax: $${grossSales - salesWithTax}
  `
}

console.log(taxDue(7236.71, 45.99))
