import type { ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function SafeBottomView(props: ViewProps) {
  return <SafeAreaView {...props} edges={{ bottom: 'maximum' }} />;
}
