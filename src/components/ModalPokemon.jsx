import { IconX } from '@tabler/icons-react'
import React from 'react'

export const ModalPokemon = ({ showModal }) => {
  return (
    <section className={`fixed top-0 left-0 right-0 bg-green-400 h-screen ${showModal ? "block" : "hidden"}`}>
      <button className='bg-white absolute top-4 right-4 p-1 rounded-lg hover:opacity-80 transition-opacity'>
        <IconX size={32} stroke={4}/>
      </button>
      <article className='bg-white h-[85%] absolute w-full bottom-0 rounded-tl-3xl rounded-tr-3xl text-center'>
        Pokemon
      </article>
    </section>
  )
}