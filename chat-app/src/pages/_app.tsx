import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { initializeFirebaseApp } from "@src/lib/firebase/firebase";
import { AuthProvider } from "@src/feature/auth/provider/AuthProvider";
import { Header } from "@src/Component/Header/Header";
import { getApp } from "firebase/app";

initializeFirebaseApp();
function MyApp({ Component, pageProps }: AppProps) {
	console.log(getApp());
	return (
		<ChakraProvider>
			<AuthProvider>
				<Header />
				<Component {...pageProps} />
			</AuthProvider>
		</ChakraProvider>
	);
}

export default MyApp;
