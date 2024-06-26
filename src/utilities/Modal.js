import React from "react";
export default function Modal({ open, children, setOpen }) {
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
						className="absolute top-3 right-3 bg-teal-600 text-white rounded-md px-2 py-0 font-medium "
						onClick={() => {
							setOpen(false);
						}}>
						x
					</button>
				</div>
			</div>
		</>
	);
}
