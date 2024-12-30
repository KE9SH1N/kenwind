import CustomHeaders from "../global-component/header/CustomHeader";
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
		case "/card":
			return "Card";
		case "/input":
			return "Input";
		case "/users":
			return "Users";
		default:
			return "Loading...";
	}
};
