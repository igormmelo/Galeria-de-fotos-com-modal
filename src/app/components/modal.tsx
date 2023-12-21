import { ListPhotos } from "../data/listphotos"

type Props={
    isOpen: Boolean
    indeximage: number
    setModalValue: React.Dispatch<React.SetStateAction<boolean>>
}
export const Modal = ({isOpen,indeximage,setModalValue}: Props)=>{
    if(isOpen){
        return(
           <>
            <div className="bg-white max-w-[1600px] w-screen h-screen mx-auto fixed top-0 left-[160px] ">
                <img src={ListPhotos[indeximage]} alt="imagem clicada" className="w-screen h-screen"   />
            </div>
            <span className="text-white fixed top-5 right-5 text-[30px] cursor-pointer" onClick={()=>(setModalValue(false))}>X</span>
           
           </>
        )
    }
    return null
}