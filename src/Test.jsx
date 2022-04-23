import React from 'react'

function Test({title, name, onClick , children}) {
    const [state, setState] = React.useState();
 
  return (
    <div onClick={onClick}>
        Test : {title ? title :"don't have title"} { name ? name : "don't have name" }
        {children}
    </div>
  )
}
/*function Test2({title, name,}){
    return (
        <div onClick={onClick}>
            Test : {title ? title :"don't have title"} { name ? name : "don't have name" }
            {children}
        </div>
      )
}*/

export default Test