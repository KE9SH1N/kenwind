import CustomHeaders from "../components/header/CustomHeader";
export const getInitialHeadingText = (
	pathName: string | null | React.ReactNode
) => {
	switch (pathName) {
		case "/":
			return <CustomHeaders />;
		case "/introduction":
			return "Introduction";
		case "/buttons":
			return "Buttons";
		case "/files":
			return "File List";
		case "/dcm":
			return "Data Call Manager";
		case "/users":
			return "Users";
		default:
			return "Loading...";
	}
};
