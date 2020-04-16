import React from 'react';

// This variable will be true once the server-side hydration is completed.

function useMediaQuery(query, options = {}) {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const queryList = window.matchMedia(query);
    setMatches(queryList.matches);

    function handleMatchesChange(event) {
      setMatches(event.matches);
    }

    queryList.addListener(handleMatchesChange);
    return () => {
      queryList.removeListener(handleMatchesChange);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
