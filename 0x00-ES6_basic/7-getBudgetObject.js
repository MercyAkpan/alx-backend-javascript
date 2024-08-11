export default function getBudgetObject(income, gdp, capita) {
    // shorthand notation for income: income, gdp: gdp, capita: capita
    // note: income, gdb and capita must have been declared and initialised
    // else it would throw a ReferenceError
    const budget = { income, gdp, capita};
    // returns the entire object
      return budget;
  }