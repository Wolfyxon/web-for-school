import { useState } from 'react'
import TabContainer from './TabContainer'
import Tab from './Tab'

import "./App.css";

export default function App() {
  return (
    <>
      <TabContainer>
        <Tab title='a'>hi</Tab>
        <Tab title='b'>ho</Tab>
      </TabContainer>
    </>
  )
}

