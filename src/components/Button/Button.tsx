import "./button.css"

interface Props {
  children: string;
  onClick: () => void;
}

const Button = ({children, onClick}: Props) => {
  return (
    <>
    <div>
      <button type="button" className={"btn btn-"} onClick={onClick}>{children}</button>   
    </div>
    </>
  )}
  ;


export default Button

//<button type="button" className={"btn btn-"+ color} onClick={onClick}>{children}</button>