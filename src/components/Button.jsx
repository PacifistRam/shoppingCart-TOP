

export const Button = ({children,action,onClickHandle}) => {
  return (
    <button className={`btn ${action === "add cart"? "cta-btn": "cts"}`} onClick={onClickHandle} >
        {children}
    </button>
  )
}
