import Introduction from "./components/introduction/Introduction";
import VersionInfo from "./components/introduction/VersionInfo";
import GlobalLayout from "./global-layout/GlobalLayout";

export default function Home() {
	return (
		<main>
			<GlobalLayout>
				<div>
					<Introduction />
					{/* <VersionInfo /> */}
				</div>
			</GlobalLayout>
		</main>
	);
}
