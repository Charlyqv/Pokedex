export const Evolutions = ({ evolutions }) => {
  return (
    <div className="flex justify-center items-center gap-2 flex-wrap">
      {
        evolutions.map((evolution, index) => 
        <article key={evolution.name} className="flex justify-center gap-2 items-center">
          {index != 0 && (
            <div className="bg-slate-100 p-2 rounded-full text-sm font-bold">
              <span>Lv. {evolution.min_level}</span>
            </div>
          )}
          <button className="hover:bg-slate-100 transition-colors rounded-3xl">
            <img src={evolution.image} alt="" />
          </button>
        </article>)
      }
    </div>
  )
}
