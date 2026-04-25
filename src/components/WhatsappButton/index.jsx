import WhatsappIcon from '../../assets/images/icons/whatsapp-icon.svg?react'
import { socialLinks } from '../../data/Links';

export default function WhatsappButton() {

    return (
        <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Entrar em contato pelo WhatsApp"
            className="
                fixed
                z-50
                bottom-4
                md:bottom-6
                right-4
                md:right-8
                p-1
                bg-green-500
                backdrop-blur-xl
                hover:bg-green-600
                rounded-full
                hover:scale-110
                shadow-lg
                transition-all
                duration-300
                focus:outline-none"
        >
            {/* Círculo de ping animado para chamar atenção */}
            <span className="
                absolute inset-2
                rounded-full
                bg-green-500/50
                animate-ping
                pointer-events-none
            " />

            {/* Círculo principal com backdrop-blur + borda sutil */}
            <span className="
                    relative
                    flex items-center justify-center
                    w-12 h-12 md:w-14 md:h-14 lg:w-20 lg:h-20
                    rounded-full
                    backdrop-blur-md
                    transition-all duration-300
                    bg-green-500
                    hover:bg-green-600/50
                    group-hover:shadow-2xl
                    group-hover:shadow-green-600/50
                ">
                <WhatsappIcon
                    aria-hidden="true"
                    className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white fill-current'
                />
            </span>
        </a>
    )
}