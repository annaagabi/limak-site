export default function ModalNatal() {
  return (
    <>
      {/* Checkbox controlador */}
      <input type="checkbox" id="fechar-modal" className="hidden" />

      {/* Wrapper fixo e centralizado */}
      <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[9999] w-full flex justify-center">
        
        {/* Modal com animação */}
        <div
          className="
            modal-natal
            bg-gradient-to-br from-[#c98ae6] to-[#9b4bc4]
            text-white rounded-[1.125rem]
            shadow-[0_15px_35px_rgba(0,0,0,0.35)]
            px-6 py-[1.125rem]
            max-w-[32.5rem] w-[calc(100%-32px)]
            animate-slide-down
          "
        >
          <div className="flex items-center gap-[0.875rem] flex-wrap">
            <span className="text-[1.75rem]">🎄</span>

            <p className="flex-1 m-0 text-[0.906rem] leading-[1.5]">
              <strong>LIMAK SACOLAS DE TNT</strong> <br />
              Há mais de 20 anos produzindo embalagens que enobrecem a sua marca. <br />
              Desejamos a todos nós um excelente 2.026
            </p>

            <label
              htmlFor="fechar-modal"
              className="
                bg-white text-[#9b4bc4]
                rounded-full px-[0.875rem] py-[0.375rem]
                text-[0.875rem] font-semibold
                cursor-pointer whitespace-nowrap
                transition-all duration-200
                hover:bg-[#f1f1f1] hover:scale-105
              "
            >
              Fechar
            </label>
          </div>
        </div>
      </div>

      {/* CSS local da animação */}
      <style>
        {`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-slide-down {
            animation: slideDown 0.6s ease-out;
          }

          #fechar-modal:checked ~ .fixed {
            display: none;
          }
        `}
      </style>
    </>
  );
}
