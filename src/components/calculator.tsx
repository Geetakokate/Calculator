import React, { useState } from 'react';
import calculate from './calculate';

const Calculator = () => {
	const [input, setInput] = useState('');
	const [result, setResult] = useState('');

	const run = (operation: 'add' | 'subtract' | 'multiply' | 'divide') => {
		const res = calculate(input, operation);
		setResult(res.toString());
	};

	return (
		<div style={{ maxWidth: 480, margin: '12px auto', fontFamily: 'Arial, sans-serif' }}>
			<h3>Calculator</h3>

			<label htmlFor="inputNumber">Enter numbers (comma or newline separated). Use //CHAR\n for custom delimiter.</label>
			<input
				id="inputNumber"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder={'e.g. 1,2,3 or //;\n1;2'}
				style={{ width: '100%', fontSize: 14, marginTop: 8 }}
			/>

			<div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
				<button onClick={() => run('add')}>Add</button>
				<button onClick={() => run('subtract')}>Subtract</button>
				<button onClick={() => run('multiply')}>Multiply</button>
				<button onClick={() => run('divide')}>Divide</button>
			</div>

			<div style={{ marginTop: 12 }}>
				<div data-testid="result" style={{ marginTop: 6 }}>{result}</div>
			</div>
		</div>
	);
};

export default Calculator;
