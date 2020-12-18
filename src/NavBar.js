import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';

// import { Header, Icon, ButtonGroup } from 'react-native-elements';
// import { withNavigation} from 'react-navigation';

import { Appbar, Title, ToggleButton } from 'react-native-paper';


export default function NavBar() {
    return (
        
        <View style={{
            // flex: 1,
            flexDirection: 'row',
            // width: 500,
            // height: 10,
            justifyContent: 'space-between',
            // alignItems: 'flex-start',
            // alignContent: 'space-between',
            // backgroundColor: 'rgba(52, 5, 5, 0.8)',
          }}>
            <View style={{
            //   flex: 1,
            //   backgroundColor: 'rgba(52, 52, 52, 0.8)',
            //   width: 20,

            //   height: '100%',
            }} >

                <Title >Home</Title>

            </View>


            <View style={{
            //   flex: 1,
            //   backgroundColor: 'rgba(152, 52, 152, 0.8)',
              // width: '30%',
            //   height: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // padding: 10,
            }} >

                <ToggleButton
                    icon="check"
                    value="check"
                    status={'checked'}
                    // onPress={onButtonToggle}
                />

                {/* <ToggleButton
                    icon="bluetooth"
                    value="bluetooth"
                    status={'checked'}
                    // onPress={onButtonToggle}
                /> */}

            </View>
          </View>

        
    );
  }

{/* <View style={{
            flex: 1,
            // width: 500,
            height: '100%',
          }}>
              <View style={{
            flex: 1,
            // width: 500,
            // height: 500,
          }}>
            <Title >Home</Title>
            </View>

            <View style={{
            flex: 1,
            // width: 500,
            // height: 500,
          }}>
            <ToggleButton
                icon="bluetooth"
                value="bluetooth"
                status={'checked'}
                // onPress={onButtonToggle}
            />
            </View>
        </View>  */}

const styles = StyleSheet.create({
bottom: {
    // position: 'absolute',
    alignSelf: 'stretch',
    // left: 0,
    // right: 0,
    // width: 100,
    // bottom: 0,
},
});

//   <Image
//         style={{ width: 50, height: 50 }}
//         // source={'https://i.pravatar.cc/50'}
//       />