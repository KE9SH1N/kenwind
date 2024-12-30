import Introduction from "./global-component/introduction/Introduction";
import VersionInfo from "./global-component/introduction/VersionInfo";
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
