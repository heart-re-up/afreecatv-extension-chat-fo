export interface Global {
  path: string;
  title: string;
  key: string;
}

function resolvePath(path: string) {
  return `/games/${path}`;
}

export function useMenuGames() {
  const items: Global[] = [
    { path: resolvePath('/draw'), key: 'darw', title: '전자뽑기' },
    { path: resolvePath('/ladder'), key: 'ladder', title: '사다리타기' },
    { path: resolvePath('/roulette'), key: 'roulette', title: '룰렛' },
    { path: resolvePath('/pinball'), key: 'pinball', title: '핀볼' },
  ];
  return {
    items,
  };
}
