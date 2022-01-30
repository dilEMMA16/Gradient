import "./App.css";
import { useState, useCallback } from "react";
import { ColorCard } from "./ColorCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  AppOuterDiv,
  CopyText,
  AppCopyButtonActualButton,
  AppGradientCodeDiv,
  AppDegreesButton,
  AppDegreesDiv,
  AppContentDiv,
  AppColorsUsedDiv,
  AppSwitchItUpButton,
  CopyButtonIcon,
} from "./styles";

function App() {
  const [gradient, setGradient] = useState({
    color1: "rgb(255, 0, 0)",
    color2: "rgb(0, 255, 0)",
    color3: "rgb(0, 0, 255)",
    degrees: 180,
  });
  const [isCopied, setIsCopied] = useState(false);

  const [gradientStyles, setGradientStyles] = useState({
    backgroundColor: "rgb(255, 0, 0)",
    backgroundImage: `linear-gradient(180deg, rgb(255,0,0) 0%, rgb(0,255,0) 50%, rgb(0,0,255) 100%)`,
  });

  const getNewGradient = () => {
    let red1st = Math.floor(Math.random() * 255);
    let red2nd = Math.floor(Math.random() * 255);
    let red3rd = Math.floor(Math.random() * 255);

    let green1st = Math.floor(Math.random() * 255);
    let green2nd = Math.floor(Math.random() * 255);
    let green3rd = Math.floor(Math.random() * 255);

    let blue1st = Math.floor(Math.random() * 255);
    let blue2nd = Math.floor(Math.random() * 255);
    let blue3rd = Math.floor(Math.random() * 255);

    let color1 = "rgb(" + red1st + ", " + green1st + ", " + blue1st + ")";
    let color2 = "rgb(" + red2nd + ", " + green2nd + ", " + blue2nd + ")";
    let color3 = "rgb(" + red3rd + ", " + green3rd + ", " + blue3rd + ")";

    setGradient({
      color1: color1,
      color2: color2,
      color3: color3,
      degrees: 180,
    });
    setGradientStyles({
      backgroundColor: color1,
      backgroundImage: `linear-gradient(180deg, ${color1} 0%, ${color2} 50%, ${color3} 100%)`,
    });
  };

  const handleDegreeChange = useCallback(
    (deg) => {
      let copyOfGradient = gradient;
      copyOfGradient = { ...copyOfGradient, degrees: deg };
      setGradient(copyOfGradient);
    },
    [gradient, setGradient]
  );

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <AppOuterDiv
      fill={gradient.color1}
      image={`linear-gradient(${gradient.degrees}deg, ${gradient.color1} 0%, ${gradient.color2} 50%, ${gradient.color3} 100%)`}
    >
      <AppContentDiv>
        <AppSwitchItUpButton onClick={getNewGradient}>
          switch it up
        </AppSwitchItUpButton>
        <AppColorsUsedDiv>
          <ColorCard backgroundColorCode={gradient.color1} />
          <ColorCard backgroundColorCode={gradient.color2} />
          <ColorCard backgroundColorCode={gradient.color3} />
        </AppColorsUsedDiv>
        <AppDegreesDiv>
          <AppDegreesButton
            className={gradient.degrees === 180 ? "active " : undefined}
            onClick={() => handleDegreeChange(180)}
          >
            180 &#176;
          </AppDegreesButton>
          <AppDegreesButton
            className={gradient.degrees === 90 ? "active " : undefined}
            onClick={() => handleDegreeChange(90)}
          >
            90 &#176;
          </AppDegreesButton>
          <AppDegreesButton
            className={gradient.degrees === 62 ? "active " : undefined}
            onClick={() => handleDegreeChange(62)}
          >
            62 &#176;
          </AppDegreesButton>
        </AppDegreesDiv>
        <AppGradientCodeDiv>
          <CopyToClipboard text={"code"} onCopy={onCopyText}>
            <AppCopyButtonActualButton>
              <CopyButtonIcon icon={faCopy} />
            </AppCopyButtonActualButton>
          </CopyToClipboard>
          {isCopied && <CopyText>copied!</CopyText>}
          <p>// CSS</p>
          <p>
            <code>background-color: {gradientStyles.backgroundColor}</code>
          </p>
          <p>
            <code>
              background-image:{" "}
              {`linear-gradient(${gradient.degrees}deg, ${gradient.color1} 0%, ${gradient.color2} 50%, ${gradient.color3} 100%)`}
            </code>
          </p>
        </AppGradientCodeDiv>
      </AppContentDiv>
    </AppOuterDiv>
  );
}

export default App;
