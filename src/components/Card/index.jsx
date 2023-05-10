import { View } from "./style";

function Card({ children }){

  return(
    <View props={this.props}>
      {children}
    </View>
  )
}

export default Card;