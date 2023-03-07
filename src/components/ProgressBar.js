export const ProgressBar = ({ size }) => {
	const styles = {
		width: `${size < 100 ? size : 100}%`,
	};
	if (size > 90) {
		styles.backgroundColor = "#ff3737";
	} else if (size > 50) {
		styles.backgroundColor = "#eed202";
	}
	return (
		<div className="w-11/12 h-4 mb-5 rounded-lg bg-gray-200 relative">
			<div className="h-4 rounded-lg bg-cyan-500" style={styles}></div>
		</div>
	);
};
