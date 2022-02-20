import React from "react";
import TelegramChart from "../features/telegramChart";

export default function App() {
  return (
    <div>
      <h1>Hello, world</h1>
      <div>Chart test</div>
      <div style={{display: 'grid', justifyItems: 'center'}}>
        <TelegramChart />
      </div>
    </div>
  )
}