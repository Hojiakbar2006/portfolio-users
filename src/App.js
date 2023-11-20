import React from 'react'
import { Appbar } from './Components/Appbar/Appbar'
import "./App.css"
import { BrowserRouter} from 'react-router-dom'
import AnimatedRouter from './Components/Appbar/AnimatedRouter'
import { Config } from './Config/Config'

export function App() {

  return (
    <BrowserRouter>
      <Appbar/>
      <AnimatedRouter/>
      <Config/>
    </BrowserRouter>
  )
}
