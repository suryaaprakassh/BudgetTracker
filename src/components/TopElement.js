const TopElement = ({ setOpen ,setLimitOpen}) => {
	return (
		<div className="flex space-between p-5">
			<p className="inline-block mr-auto text-2xl font-semibold">
				Budget Tracker
			</p>
			<button
				className="mx-5 p-2 bg-teal-600 text-white rounded-md "
				onClick={() => {
					setOpen(true);
				}}>
				Add Budget
			</button>
			<button className="mx-5 border-solid border-2 rounded-md border-teal-600 p-1 font-medium text-md  " onClick={()=>{
        setLimitOpen(true);
      }}>
        Set Limit
			</button>
		</div>
	);
};
export default TopElement;
