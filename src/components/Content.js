import Search from './Search'
import Brand from './Brand'
import MainContext from './MainContext'
import { useContext } from 'react'
import Download from './Download'

function Content() {

  const {brands,selectedBrands} = useContext(MainContext)
  
  return (

    <main className='content'>
      <header className="header">
      <Search/>
      {<Download/>}
      </header>
      <section className="brands">
        {brands.map((brand,key)=>(
          <Brand key={key} brand={brand}/>
        ))}
      </section>
    </main>
  )
}

export default Content