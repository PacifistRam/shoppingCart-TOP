import { Link } from "react-router-dom"

export const Button = ({as = "button",children,classes = [],onClickHandle,...rest}) => {
  if(as === "button"){
    return (
    <button className={`btn ${classes.join(" ")}`} onClick={onClickHandle} >
        {children}
    </button>
  )
  } else if (as === "Link"){
    const {to} = rest 
    return (
      <Link className={`btn ${classes.join(" ")}`} onClick={onClickHandle} to={to}>
        {children}
      </Link>
    )
  }
  
  
}



{/* <element className={`btn ${classes.join(" ")}`} onClick={onClickHandle} >
{children}
</element> */}