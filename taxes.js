//Simple funciton that accept gross sales and totaltaxes collected. The function outputs total amount of sales with taxes, sales that exlucded taxes and descretionary surtax for a given period.

const taxValue = 0.07 // The percentage charged for taxable sales
const surtax = 0.01 // The designated percentage for your given county

const taxDue = (grossSales, taxesCollected) => {
  let salesWithTax = (taxesCollected / taxValue).toFixed(2)
  let surtaxTotal = (salesWithTax * surtax).toFixed(2)

  return `-------------- Tax Report -----------------
             Taxes Collected: $${taxesCollected}
                 Gross Sales: $${grossSales}
         Sales Including Tax: $${salesWithTax}
         Sales Excluding Tax: $${grossSales - salesWithTax}
        Discretionary Surtax: $${surtaxTotal}
  `
}

console.log(taxDue(10000.0, 110.0))
