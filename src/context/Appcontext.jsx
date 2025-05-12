import React from 'react'
import { createContext } from 'react' 
import { HandymanList } from '../assets/assets'

 // eslint-disable-next-line react-refresh/only-export-components
 export const Appcontext= createContext()

const AppcontextProvider=(props)=>
     {

        const Value= {HandymanList}

    return (
      <Appcontext.Provider value={Value}>
{props.children}
</Appcontext.Provider>
    )
  }


export default AppcontextProvider