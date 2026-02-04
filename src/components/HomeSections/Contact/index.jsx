// Versão atualizada com valores rem e padrões da Tailwind
import ContactImg from '../../../assets/images/contact.svg'
import { socialLinks } from '../../../data/Links';

export default function Contact() {
    return (
        // Medidas antigas da Div container (logo após a Section) w-70 md:w-167 lg:w-255 xl:w-312 ---- Novas medidas: w-full max-w-7xl
        <section aria-labelledby="contact-title" className='w-full flex flex-col justify-center items-center pt-10 md:pt-14 lg:pt-20 pb-8 md:pb-20 px-5 md:px-12'>
            <div className='w-full max-w-7xl flex flex-col md:flex-row justify-center md:justify-between items-center gap-5'>
                
                <img className='w-[17.5rem] md:w-[22.5rem] lg:w-[25rem] xl:w-[28.75rem] md:h-72 lg:auto' src={ContactImg} alt="Imagem de um Celular em Ilustração com Varios Icones de Mensagem" />
                
                <div className='w-[17.5rem] md:w-78 lg:w-[25rem] xl:w-[33.75rem] flex flex-col justify-center items-center md:items-end gap-5'>
                    <h2 id="contact-title" className='text-2xl md:text-2xl font-semibold text-[var(--shani-purple)] lg:text-2xl xl:text-3xl'>Contato</h2>

                    <p className='text-sm md:text-base text-justify md:text-right lg:text-lg xl:text-xl text-[var(--carbon-fiber)]'>
                        Transforme seu projeto em um <span className='text-[var(--greti-violaceo)]'>sucesso</span> com os <span className='text-[var(--greti-violaceo)]'>brindes personalizados da LIMAK</span>
                        <br /><br />
                        Entre em contato conosco e solicite seu <span className='text-[var(--shani-purple)]'>orçamento</span> personalizado!
                    </p>

                    <div className='flex flex-col justify-center items-center md:items-end p-2 md:p-0 border md:border-none border-[var(--shani-purple)] rounded-lg'>
                        <p className='text-sm md:text-base text-justify md:text-right text-[var(--carbon-fiber)] lg:text-lg xl:text-xl lg:leading-6'>
                           <a href={socialLinks.telefone}><span className='font-semibold text-[var(--shani-purple)]'>Telefone: </span>(11) 3368-3693</a>
                           <br />
                           <a href={socialLinks.whatsapp} target="_blank"><span className='font-semibold text-[var(--shani-purple)]'>Whatsapp: </span>(11) 3858-8972</a>
                           <br />
                           <a href={socialLinks.email}><span className='font-semibold text-[var(--shani-purple)]'>E-mail: </span>limak@limak.com.br</a>
                            <br />
                            <br />
                           <a href={socialLinks.endereco} target="_blank"><span className='font-semibold text-[var(--shani-purple)]'>Onde estamos: </span>R. Buquira, 293 - Vila Baruel, São Paulo - SP, 02522-010</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}