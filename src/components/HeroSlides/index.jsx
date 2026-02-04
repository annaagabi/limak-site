import Button from '../Button';

export default function HeroSlide({
        image,
        imageAlt,
        title,
        subtitle,
        paragraph,
        button,
        buttonLink,
        ariaLabel,

        containerClassName = '',
        imageClassName = '',
        contentClassName = '',
        titleClassName = '',
        subtitleClassName = '',
        paragraphClassName = '',
        buttonClassName = ''
    }) {
        
    return (
        <div className={`
            w-full max-w-[100vw]
            md:max-w-7xl mx-auto
            flex flex-col md:flex-row-reverse
            justify-between items-center
            md:gap-7 lg:gap-16 xl:gap-32
            transition-all duration-300
            ${containerClassName}
            `}>

            {image && (
                <img
                    className={`
                        w-full
                        max-w-xs md:max-w-sm lg:max-w-lg
                        aspect-[4/3]
                        max-h-[16rem] lg:max-h-[20rem]
                        object-contain

                        ${imageClassName}
                    `}

                    
                    src={image}
                    alt={imageAlt}
                />
            )}

            <div className={`
                    w-full max-w-xl flex flex-col justify-center
                    items-center lg:items-start transition-all duration-300 
                    ${contentClassName}
                `}>

                {title && (
                    <h1 className={`
                            text-sm lg:text-base font-semibold text-[var(--shani-purple)]
                            mb-1 md:mb-2 
                            ${titleClassName}
                        `}>
                        {title}
                    </h1>
                )}

                {subtitle && (
                    <h2
                        id="hero-subtitle"
                         className={`
                            mb-5 text-xl md:text-2xl lg:text-3xl xl:text-4xl
                            font-bold text-[var(--shani-purple)]
                            text-center md:text-left
                            ${subtitleClassName}
                        `}
                    >
                        {subtitle}
                    </h2>
                )}

                {paragraph && (
                    <p className={`
                        w-full max-w-[29.5rem]
                        mx-auto md:mx-0
                        mb-5 md:mb-7
                        text-sm lg:text-lg
                        text-center md:text-left
                        ${paragraphClassName}
                        `}>

                        {paragraph}
                    </p>
                )}

                {button && (
                    <a href={buttonLink} target="_blank" rel="noopener">
                        <Button
                            aria-label={ariaLabel}
                            className={`
                                md:w-32 lg:w-40 h-8 md:h-9 lg:h-10 xl:h-11
                                md:text-base lg:text-lg md:rounded-lg
                                hover:bg-[var(--greti-violaceo)]
                                transition-all duration-300
                                ${buttonClassName}
                            `}
                        >
                            {button}
                        </Button>
                    </a>
                )}
            </div>
        </div>
    );
}
