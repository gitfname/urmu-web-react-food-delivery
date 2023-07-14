
import styles from "./styles.module.css"

interface Props {
    total: number;
    value: number;
    className?: string;
}

function Rating({ total, value, className }: Props) {
    return (
        <div className={`flex items-center ${className}`}>
            {Array.from({ length: (total - value) }).map(() =>
                <div className={`w-3.5 h-3.5 bg-gray-300 ${styles.star}`}>
                </div>
            )}
            {Array.from({ length: value }).map(() =>
                <div className={`w-3.5 h-3.5 bg-yellow-400 ${styles.star}`}>
                </div>
            )}
        </div>
    )
}

export default Rating