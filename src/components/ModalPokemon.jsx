import { IconX } from '@tabler/icons-react'
import React from 'react'
import { colorByType } from '../constants/pokemon';

export const ModalPokemon = ({ showModal, onCloseModal, pokemon }) => {
  console.log("🚀 ~ ModalPokemon ~ pokemon:", pokemon);
  return (
    <section 
      className={`fixed top-0 left-0 right-0 bg-green-400 h-screen transition-all duration-500 ${showModal ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <button
        onClick={onCloseModal} 
        className='bg-white absolute top-4 right-4 p-1 rounded-lg hover:opacity-80 transition-opacity'
      >
        <IconX size={32} stroke={4}/>
      </button>
      <article 
        className={`bg-white h-[85%] absolute w-full bottom-0 rounded-tl-3xl rounded-tr-3xl text-center transition-all duration-500 px-4 grid gap-2 content-start ${ showModal ? "bottom-0" : "-bottom-full"}`}
      >
        <header>
          <img src={pokemon?.image} alt="" />
        </header>
        <span className='text-slate-400 text-sm font-semibold'>N° {pokemon?.id}</span>
        <h2 className='font-bold text-lg capitalize'>{pokemon?.name}</h2>
        <ul className='flex gap-2 justify-center'>
          {pokemon?.types.map((type) => (
            <li 
              className={`p-1 rounded-md px-2 text-sm ${colorByType[type]}`} 
              key={type}
            >
              {type}
            </li> 
          ))}
        </ul>
        <div>
          <h4 className='font-bold capitalize'>Pokedex Entry</h4>
          <p className='text-slate-400 '>{pokemon?.description}</p>
        </div>
        {/* Altura y peso */}
        <section className='grid grid-cols-2 gap-4'>
          <div>
            <h4 className='font-bold capitalize'>Height</h4>
            <span className='bg-slate-100 block rounded-full p-1'>0.7m</span>
          </div>
          <div>
            <h4 className='font-bold capitalize'>Weight</h4>
            <span className='bg-slate-100 block rounded-full p-1'>6.7kg</span>
          </div>
        </section>
        {/* Habilidades */}
        <section>
          <h4 className='font-bold capitalize'>Abilities</h4>
          <ul className='grid grid-cols-2 gap-4'>
            {
              pokemon?.abilities.map(ability => (
                <li 
                  key={ability}
                  className='bg-slate-100 block rounded-full p-1 capitalize'
                >
                  <span>{ability}</span>
                </li>
              ))
            }
          </ul>
        </section>
        {/* Stats */}
        <section>
          <h4 className='font-bold capitalize'>Stats</h4>
          <ul className='flex justify-center gap-3 flex-wrap'>
            {
              pokemon?.stats.map((stat) => (
                <li className='bg-slate-100 p-1 rounded-full' key={stat.name}>
                  <div className='bg-red-500 rounded-full w-[28px] aspect-square grid place-content-center'>
                    <span className='text-xs text-white font-semibold'>{stat.name}</span>
                  </div>
                  <span className='font-semibold text-sm'>{stat.base_stat}</span>
                </li>
              ))
            }
          </ul>
          <ul>
            <li>Stat</li>
          </ul>
        </section>
        <section>
          <h4>Evolutions</h4>
        </section>
      </article>
    </section>
  )
}
