import { Box, Divider } from 'native-base'
import { AirbnbRating, Rating } from 'react-native-ratings'

export default function Ratings(props) {
  const { size , ml, mt, b, isDisable } = props;
  return (
    <Box h="30" position="relative"  alignItems="flex-start" bottom={b} ml={ml} mt={mt}>
      <AirbnbRating 
        isDisable= "true"
        reviews = ""
        count={5}
        size={size}
        showRating
        onFinishRating={this.ratingCompleted}
      />  
  </Box>
  )
}
