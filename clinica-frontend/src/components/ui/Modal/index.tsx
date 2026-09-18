import type { ReactNode } from "react"

interface ModalProps{
    isOpen:boolean
    onClose:()=>void
    children:ReactNode
}

const Modal = ({isOpen,onClose,children}:ModalProps)=>{
    if(!isOpen){
        return null
    }

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
                {/* botao de fechar */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 font-bold text-lg cursor-pointer"
                >
                    x
                </button>

                {/* conteúdo do Modal */}
                {children}
            </div>

        </div>
    )
}

export default Modal