"use client"
import { useState } from "react";
import { ListPhotos } from "./data/listphotos";
import Image from 'next/image'
import { Modal } from "./components/modal";
 



const Page = ()=>{
  const [modalvalue,setModalValue] = useState(false)
  const [positionItem,setPositionItem] = useState(0)
  return(
     <div className="max-w-[1200px] w-screen h-screen mx-auto ">
      <h3 className=" text-center text-4xl mb-4 text-white">Galeria de Imagens</h3>
      <div className="grid grid-cols-3 gap-4 ">
      {ListPhotos.map((item,index)=>(
        <>
          <button onClick={()=>{setModalValue(true); setPositionItem(index) }}><Image src={item} alt="imagem do universo" width={1920} height={1080} className="aspect-video"/></button>
          
        </>
      ))}
    
     </div>
     <Modal isOpen={modalvalue} indeximage={positionItem} setModalValue={setModalValue}/>
     </div>
  )
}
export default Page;