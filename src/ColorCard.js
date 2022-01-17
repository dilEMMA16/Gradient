import {CopyButton} from './CopyButton';

export const ColorCard = (params) => {
	const {backgroundColorCode} = params

	return (
		<div style={{minHeight: '100px', margin:'10px'}}>
			<div className="colorDiv" style={{backgroundColor: backgroundColorCode, height: '70px', border: '3px solid white'}} > <CopyButton contentToCopy={backgroundColorCode}/></div>
			<div style={{boxShadow:' 0 4px 8px 0 rgba(0,0,0,0.2)', backgroundColor: 'white', height: '30px', color: 'gray', paddingLeft: '8px', paddingRight: '8px',paddingTop: '5px'}}>
				{backgroundColorCode}
			</div>
		</div>
	)
}