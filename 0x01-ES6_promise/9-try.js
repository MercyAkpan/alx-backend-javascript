export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const value = mathFunction();
    queue.push(value);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
    // console.log("an error here")
  } finally {
    const value = 'Guardrail was processed';
    queue.push(value);
  }
  return (queue);
}
