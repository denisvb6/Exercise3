import { useState } from "react";
import styles from './MyComponent.module.css';

export const MyComponent = () => {
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [showRedText, setShowRedText] = useState(false);

	const NUMS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	const onClick = (item) => {

		if(operator === ''){
			setOperand1((operand1) => operand1 + item);
		} else {
			setOperand2((operand2) => operand2 + item);
		}
	};

	const onClickPlus = () => {
		setOperator((operator) => operator + '+');
		setShowRedText(false);
	};

	const onClickMinus = () => {
		setOperator((operator) => operator + '-');
		setShowRedText(false);
	};

    const onClickEquals = () => {

		switch(operator){
			case '+':
				setOperand1(Number(operand1) + Number(operand2));
				setOperand2('');
				setOperator('');
				setShowRedText(true);
				break;
			case '-':
				setOperand1(Number(operand1) - Number(operand2));
				setOperand2('');
				setOperator('');
				setShowRedText(true);
				break;
			default:
				break;
		}
	};

	const onClickC = () => {
		setOperand1('');
		setOperand2('');
		setOperator('');
		setShowRedText(false);
	};

	return (
		<>
			<div className={showRedText ? styles.red : styles.white}>
				{operand1}{operator}{operand2}
			</div>

			<div>
				{ NUMS.map((item) => (
					(item <= 4) ?
						<button className={styles.button} onClick={() => onClick(item)}>{item}</button> :
						''
				) ) }
			</div>
			<div>
				{ NUMS.map((item) => (
					(item > 4) ?
						<button className={styles.button} onClick={() => onClick(item)}>{item}</button> :
						''
				) ) }
			</div>

			<div>
				<button className={styles.button} onClick={onClickC}>C</button>
				<button className={styles.button} onClick={onClickPlus}>+</button>
				<button className={styles.button} onClick={onClickMinus}>-</button>
				<button className={styles.button} onClick={onClickEquals}>=</button>
			</div>
		</>
	);
};
