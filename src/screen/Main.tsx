import React, {type PropsWithChildren} from 'react';

export const Main = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <Header />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        test
        <LearnMoreLinks />
      </View>
    </ScrollView>
  );
};
