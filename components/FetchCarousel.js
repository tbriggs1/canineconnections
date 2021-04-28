import React from 'react';
import { Style, Text, SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { ScrollView } from 'react-native-gesture-handler';
import { animatedStyles1 } from './FetchCarousel';
import Carousel from 'react-native-snap-carousel';


export default class FetchCarousel extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Item 1",
              text: "Text 1",
          },
          {
              title:"Item 2",
              text: "Text 2",
          },
          {
              title:"Item 3",
              text: "Text 3",
          },
          {
              title:"Item 4",
              text: "Text 4",
          },
          {
              title:"Item 5",
              text: "Text 5",
          },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'floralwhite',
              borderRadius: 5,
              height: 250,
              padding: 50,
              marginLeft: 25,
              marginRight: 25, }}>
            <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text>{item.text}</Text>
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView>
            <View>
                <Carousel 
                  layout={"tinder"}
                  layoutCardOffset={`9`}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}



// const FetchCarousel = () => {

//     return(
//          <ScrollView>
//             <StyledView>
//                 <Carousel
//                 ref={(c) => { this._carousel = c; }}
//                 data={this.state.entries}
//                 renderItem={this._renderItem}
//                 sliderWidth={sliderWidth}
//                 itemWidth={itemWidth}
//                 />
//             </StyledView>
//         </ScrollView>
//     )
// }

// export default FetchCarousel;


 


// const StyledView = styled.View`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 200px;
// `

// const ButtonView = styled.View`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
// `
// const StyledButton = styled.Text`
//     font-size: 10px;
//     margin-left: 10px;
//     color: white;
// `


// const StyledTouchableOpacity = styled.TouchableOpacity`
//   background: blue;
//   padding: 9px;
//   border-radius: 20px;
//   margin-top: 10px;
//   width: 110px;
// `

