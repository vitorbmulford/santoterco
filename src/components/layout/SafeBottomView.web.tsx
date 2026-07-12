import { type ViewProps, type ViewStyle, View } from 'react-native';

const safeBottomStyle = {
  paddingBottom: 0,
} as unknown as ViewStyle;

export function SafeBottomView({ style, ...props }: ViewProps) {
  return <View {...props} style={[style, safeBottomStyle]} />;
}
