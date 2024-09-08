// export const Header = () => {
//   return (
//     <header className='relative bg-hero text-white p-10 h-[15rem]'>
//       <div className='absolute inset-0 bg-black opacity-50'></div>
//       <div className='relative z-10 flex flex-col items-center'>
//         <h1 className='text-4xl font-medium my-4'>¡Pizzería Mamma Mía!</h1>
//         <p className="text-sm font-semibold">¡Tenemos las mejoress pizzas que podrás encontrar!</p>
//         <div className='w-5/6 border-t-[0.1px] border-gray-300 my-5'></div>
//       </div>
//     </header>
//   )
// }
// export default Header;



import React from 'react'
import "../index.css"
import './header.css'
const Header = () => {
  return (

    <div className="p-5 text-center bg-image rounded-3 banner">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="hero-text text-white">
                        <h1 className="mb-3"> ¡Pizzería Mamma Mia!</h1>
                        <h4 className="mb-3">¡Tenemos las mejores pizzas que podras encontrar!</h4>
                        <hr/>
                    </div>
                </div>
        </div>
  )
}

export default Header