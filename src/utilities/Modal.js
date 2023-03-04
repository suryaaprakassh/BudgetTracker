import React from "react";
export default function Modal({ open, children, setOpen, submit }) {
	if (!open) return null;
	const formStyles = {
		position: "fixed",
		top: "50%",
		left: "50%",
		transform: "translate(-50%,-50%)",
		background: "#fff",
		padding: "30px",
		zIndex: 1000,
	};
	const overLayStyle = {
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		background: "rgba(0,0,0,0.7)",
	};
	return (
		<>
			<div style={overLayStyle} className="flex-col justify-between "></div>
			<div style={formStyles}>
				{children}
				<div className="flex justify-around">
					<button
						className="bg-teal-600 text-white rounded-md px-5 py-2 font-medium "
						onClick={() => {
							setOpen(false);
						}}>
						close
					</button>
					{submit && (
						<button className="bg-green-500 text-white rounded-md px-5 py-2 font-medium ">
							submit
						</button>
					)}
				</div>
			</div>
		</>
	);
}
