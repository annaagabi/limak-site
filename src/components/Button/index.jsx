export default function Button({
    type = 'button',
    onClick,
    className = '',
    children = 'Fale Conosco',
}) {

    const baseStyle = 'w-[6.88rem] h-7 flex justify-center items-center bg-[var(--shani-purple)] rounded-md text-sm font-semibold text-white lg:cursor-pointer';

    return (
        <button type={type} onClick={onClick} className={`${baseStyle} ${className}`}>
            {children}
        </button>
    )
}