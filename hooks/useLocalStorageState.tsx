import React from 'react';

function useLocalStorageState<T>(
	key: string,
	defaultValue = ''
): [string, React.Dispatch<React.SetStateAction<string>>] {
	const [state, setState] = React.useState(
		() => window.localStorage.getItem(key) ?? defaultValue
	);

	React.useEffect(() => {
		window.localStorage.setItem(key, state);
	}, [key, state]);

	return [state, setState];
}

export default useLocalStorageState;
