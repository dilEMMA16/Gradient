import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import {
  CopyButtonOuterDiv,
  CopyButtonActualButton,
  CopyButtonIcon,
} from "./styles";

export const CopyButton = (props) => {
  const { contentToCopy } = props;
  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <CopyButtonOuterDiv>
      <CopyToClipboard text={contentToCopy} onCopy={onCopyText}>
        <CopyButtonActualButton>
          <CopyButtonIcon icon={faCopy} />
        </CopyButtonActualButton>
      </CopyToClipboard>
      {isCopied && <p style={{ marginTop: "0" }}>copied!</p>}
    </CopyButtonOuterDiv>
  );
};
