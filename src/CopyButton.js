import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { CopyToClipboard } from "react-copy-to-clipboard";
import {useState} from 'react';


export const CopyButton = (props) => {
	const {contentToCopy} = props;
	const [isCopied, setIsCopied] = useState(false)

	console.log(isCopied)
const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

	return (
		<div style={{paddingTop: '10px', textAlign: 'center'}} >
		<CopyToClipboard text={contentToCopy} onCopy={onCopyText}>

		<button class="copyIcon" style={{color: 'white', backgroundColor: 'transparent', border:'none',borderRadius: '20px'}}>
		    <FontAwesomeIcon icon={faCopy} style={{marginRight: '2px', fontSize: '1.4em'}} />
			
			
		</button>
	 </CopyToClipboard>
	 {isCopied && (<p style={{marginTop:'0'}}>copied!</p>)}
	 </div >
	)
}