export const ProgressBar = ({ size }) => {
	const styles = {
		width: `${size}%`,
	};
	if (size > 90) {
		styles.backgroundColor = "#ff3737";
	} else if (size > 75) {
		styles.backgroundColor = "#eed202";
	}
	return (
		<div className="w-8/12 h-4 rounded-lg bg-gray-200 relative">
			<div className="h-4 rounded-lg bg-cyan-500" style={styles}></div>
		</div>
	);
};
