export default function guardrail(mathFunction) {
    // This is an empty array.
  const queue = [];
  try {
    // This appends returned value of Mathfunction().
    const value = mathFunction();
    queue.push(value);
  } catch (error) {
    // If an error occurs,it appends the error message to the array
    queue.push(`Error: ${error.message}`);
  } finally {
    const value = 'Guardrail was processed';
    queue.push(value);
  }
  return (queue);
}
