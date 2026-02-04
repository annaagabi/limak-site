export default function ButtonViewAll({
    type = 'button',
    onClick,
    className = '',
    children = 'Ver todos',
}) {
    
    const baseStyle = 'w-16 md:w-24 text-sm md:text-xl font-semibold text-[var(--prickly-purple)] lg:cursor-pointer';

    return (
        <div>
            <button type={type} onClick={onClick} className={`${baseStyle} ${className}`}>
                {children}
            </button>          
        </div>
    )
}