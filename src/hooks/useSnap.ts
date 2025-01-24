import { MIDTRANS_APP_URL, MIDTRANS_CLIENT_KEY } from "@/lib/constants";
import React, { useEffect, useState } from "react";

export const useSnap = () => {
	const [snap, setSnap] = useState(null);

	useEffect(() => {
		const midtransKey = MIDTRANS_CLIENT_KEY;
		const script = document.createElement("script");
		script.src = `${MIDTRANS_APP_URL}/snap/snap.js`;
		script.setAttribute("data-client-key", midtransKey);
		script.onload = () => {
			setSnap(window.snap);
		};
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	const snapEmbed = (snap_token: any, embedId: any, action: any) => {
		if (snap) {
			snap.embed(snap_token, {
				embedId,
				onSuccess: (result: any) => {
					console.log("success", result);
					action.onSuccess(result);
				},
				onPending: (result: any) => {
					console.log("pending", result);
					action.onPending(result);
				},
				onClose: () => {
					action.onClose();
				},
			});
		}
	};
	return { snapEmbed };
};
