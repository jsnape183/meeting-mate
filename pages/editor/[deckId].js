import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { StyledEngineProvider } from "@mui/material/styles";
import { store } from "../../store";
const TopBar = dynamic(() => import("../../components/common/TopBar"), {
  ssr: false
});
const EditorWrapper = dynamic(() => import("./EditorWrapper"));

export default function EditorPage() {
  const router = useRouter();
  const { deckId } = router.query;
  return (
    <StyledEngineProvider injectFirst>
      <div>
        <TopBar />
        <Provider store={store}>
          <EditorWrapper deckId={deckId} />
        </Provider>
      </div>
    </StyledEngineProvider>
  );
}
