import {useState} from 'react';
import styles from './select.module.css'

type SelectOption = {
    label: string
    value: any
}

type SelectProps = {
    option: SelectOption[]
    value?: SelectOption
    onChange: (value: SelectOption | undefined) => void
}

const Select = ({ options, value, onChange }: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div
                onBlur={() => setIsOpen(false)}
                onClick={() => setIsOpen(prev => !prev) }
                // tapIndex={0}
                className={styles.container}>
            <span className={styles.value}> {value?.label} </span>
            <button className={styles['clear-btn']}> &times; </button>
            <div className={styles.divider}> </div>
            <div className={styles.caret}> </div>
                <ul className={`${styles.options} ${isOpen? styles.show: " "}`}>
                    {options.map((option) => (
                    <li key={option.label} onClick={() => onChange(option)}>
                        {option.label}
                    </li>
                ))}
                </ul>
            </div>    
        </>
    )
}

export default Select;

