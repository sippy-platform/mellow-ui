import { useMemo } from "react";

type MellowColor = 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'teal' | 'cyan' | 'blue' | 'indigo' | 'violet' | 'purple' | 'pink' | 'rose' | 'brown' | 'grey';

export default function useColor(string: string): { color: MellowColor, supplement: MellowColor } {
  const colors: MellowColor[] = ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'teal', 'cyan', 'blue', 'indigo', 'violet', 'purple', 'pink', 'rose', 'brown', 'grey'];

  const getHashOfString = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    hash = Math.abs(hash);
    return hash;
  };

  const [color, supplement] = useMemo(() => {
    const hash = getHashOfString(string);

    const colorIndex = Math.floor(hash % 16);

    return [colors[colorIndex], colors[colorIndex === 0 ? 16 : colorIndex - 1]];
  }, []);

  return { color, supplement };
}