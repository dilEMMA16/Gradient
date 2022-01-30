import { CopyButton } from "./CopyButton";
import {
  ColorCardOuterDiv,
  ColorCardColoredDiv,
  ColorCardRGBDiv,
} from "./styles";

export const ColorCard = (params) => {
  const { backgroundColorCode } = params;

  return (
    <ColorCardOuterDiv>
      <ColorCardColoredDiv fill={backgroundColorCode}>
        <CopyButton contentToCopy={backgroundColorCode} />
      </ColorCardColoredDiv>
      <ColorCardRGBDiv>{backgroundColorCode}</ColorCardRGBDiv>
    </ColorCardOuterDiv>
  );
};
