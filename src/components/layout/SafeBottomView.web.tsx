import { type ViewProps, type ViewStyle, View } from 'react-native';

const safeBottomStyle = {
  paddingBottom: 'max(12px, env(safe-area-inset-bottom, 0px))',
} as unknown as ViewStyle;

export function SafeBottomView({ style, ...props }: ViewProps) {
  return <View {...props} style={[style, safeBottomStyle]} />;
}
