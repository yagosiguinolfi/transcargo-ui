import { View } from "./style";

function Card({ children }, ...props){
  

  return(
    <View props={props}>
      {children}
    </View>
  )
}

export default Card;