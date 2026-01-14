import { useState, useEffect, useRef } from 'react';

interface DecodeTextProps {
    text: string;
    className?: string;
    delay?: number;
}

export const DecodeText = ({ text, className, delay = 0 }: DecodeTextProps) => {
    const [displayText, setDisplayText] = useState('');
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    const intervalRef = useRef<number | null>(null);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            let iteration = 0;

            intervalRef.current = window.setInterval(() => {
                setDisplayText(
                    text
                        .split('')
                        .map((char, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            if (char === ' ') return ' ';
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join('')
                );

                if (iteration >= text.length) {
                    if (intervalRef.current !== null) {
                        clearInterval(intervalRef.current);
                    }
                }

                iteration += 1 / 3;
            }, 30);
        }, delay);

        return () => {
            clearTimeout(startTimeout);
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
            }
        };
    }, [text, delay]);

    return <span className={className}>{displayText}</span>;
};
