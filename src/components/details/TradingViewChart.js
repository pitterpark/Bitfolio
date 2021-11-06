import React from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

export const Chart = ({ chartSize, coin }) => {
  return (
    <TradingViewWidget
      symbol={coin}
      theme={Themes.DARK}
      range="12m"
      autosize
      // width="100%"
      // height={chartSize.height * 0.9}
    />
  );
};
