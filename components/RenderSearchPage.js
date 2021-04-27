<NavigationContainer theme={MyTheme}>
<Stack.Navigator screenOptions={{headerShown: false}} >
<Stack.Screen name="Registration" component={Registration} />
  <Stack.Screen
    name="Homepage"
    component={NavigationBar}
    options={{ title: 'Welcome' }}
  />
</Stack.Navigator>
</NavigationContainer>