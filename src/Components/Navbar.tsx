import Header from './Header'  // import header form header
import React from 'react'

const Navbar = () => {
  const navigation =['Products', 'Solutions', 'Resources', 'Pricing']  //create an array of navigation menu

  return (
    <div>
      {/* pass the data to header */}
      <Header 
        logoSrc='/logo.png'      
        navigation={navigation}
        buttonText='Login'
      />
    </div>
  )
}

export default Navbar