import { useState } from "react";
import useUpdateEffect from "./useUpdateEffect";

export default function useGetBoundingClientRect(element, property) {
	const [value, setValue] = useState();

	useUpdateEffect(() => {
		setValue(element.getBoundingClientRect()[property]);
	}, [element]);

	return value ? value : null;
}
