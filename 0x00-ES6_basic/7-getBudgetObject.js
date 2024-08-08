export default function getBudgetObject(income, gdp, capita) {
    const budget = {
    // shorthand notation for income: income, gdp: gdp, capita: capita
    // note: income, gdb and capita must have been declared and initialised
    // else it would throw a ReferenceError
     income,
     gdp,
     capita,
    };
    // returns the entire object
    return budget;
  }