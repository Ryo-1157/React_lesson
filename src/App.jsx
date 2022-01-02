/* eslint  */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("更新されたよ");
  //　状態によって動的に変化する値を用いる時に使う（state）
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // useEffectは初めの一度だけデータをとってくる。第２引数に変数をおくと、その変数の値が変化した時だけuseEffect内部の関数を実行する。
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on / off</button>
      <p>{num}</p>
      {
        //左がTrueの時だけ右の処理をするのが＆＆、左がFalseの時だけ右の処理をするのが｜｜（パイプライン）
        faceShowFlag && <p>🥺</p>
      }
    </>
  );
};

export default App;
